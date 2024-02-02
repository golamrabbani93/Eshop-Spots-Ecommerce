import {useQuery} from '@tanstack/react-query';
import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import DashBoardLoader from '../../../Shared/DashBoardLoader/DashBoardLoader';
import SingleOrderDetails from './SingleOrderDetails';
import CheckOutProductsDetails from '../../../Shop/CheckOut/Payment/CheckOutForm/CheckOutProductsDetails';
import UseScrollTop from '../../../../hooks/UseScrollTop';

const OrderDetails = () => {
	// ! Scroll to top
	UseScrollTop();
	// !get id from url
	const bookingId = useParams()?.id;
	// ! Set OrderDetails
	const [OrderDetailsData, setOrderDetailsData] = useState(0);
	// ! get total products price

	// !Set OrderDetails
	const {data: OrderDetails, isLoading} = useQuery({
		queryKey: ['booking', bookingId],
		queryFn: async () => {
			const res = await fetch(`https://eshopspots-server.vercel.app/booking/${bookingId}`);
			const data = await res.json();
			setOrderDetailsData(data?.data?.products);
			return data?.data;
		},
	});

	const handleQuantity = (e, _id) => {
		const newQuantity = e.target.value;
		const productId = _id;

		const newProducts = OrderDetails?.products?.map((product) => {
			if (product._id === productId) {
				product.quantity = +newQuantity;
				if (product?.discount_price > 0) {
					// !if discount_price found
					const total = product.discount_price * product.quantity;
					product.total = total;
				} else {
					// !if discount_price not found or 0
					const total = product.main_price * product.quantity;
					product.total = total;
				}
			}
			return product;
		});
		// ! get product total price
		const total = newProducts?.reduce((total, product) => {
			total += product.total;
			return total;
		}, 0);
		const subTotal = total + 5;

		setOrderDetailsData(newProducts);
		fetch(`http://localhost:5000/booking/update/${bookingId}`, {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({products: newProducts, total: subTotal}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.data.modifiedCount > 0) {
					console.log('update');
				}
			});
	};
	if (isLoading || OrderDetailsData === 0) {
		return <DashBoardLoader />;
	}

	return (
		<div>
			<div className="container mx-auto">
				<div className="cart-main my-10">
					{/* !Cart List Start */}
					<div className="cartlist">
						<div className="overflow-x-auto mx-7 md:mx-20">
							<h2 className="bg-black text-white p-4 text-xl font-bold uppercase">
								Product details
							</h2>
							<table className="table">
								{/* head */}
								<thead className="text-center bg-[#6c757d50] text-black">
									<tr className="text-base">
										{!OrderDetails?.paymentStatus && <th>Delete</th>}
										<th>Image</th>
										<th>Product</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{OrderDetailsData?.map((singleProduct) => {
										return (
											<SingleOrderDetails
												key={singleProduct._id}
												singleProduct={singleProduct}
												paymentStatus={OrderDetails?.paymentStatus}
												handleQuantity={handleQuantity}
											/>
										);
									})}
								</tbody>
							</table>
							<div className="mt-6">
								<CheckOutProductsDetails cartListItems={OrderDetailsData}></CheckOutProductsDetails>
							</div>
							<div className="text-right">
								{!OrderDetails?.paymentStatus && (
									<Link
										to={`/shop/checkout/payment/${OrderDetails?._id}`}
										className="btn btn-primary btn-outline mt-5 text-right"
									>
										Make Payment
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderDetails;
