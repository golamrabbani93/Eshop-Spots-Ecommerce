import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {Link, useParams} from 'react-router-dom';
import DashBoardLoader from '../../../Shared/DashBoardLoader/DashBoardLoader';
import SingleOrderDetails from './SingleOrderDetails';

const OrderDetails = () => {
	// !get id from url
	const id = useParams()?.id;
	// !Set OrderDetails

	const {data: OrderDetails, isLoading} = useQuery({
		queryKey: ['booking', id],
		queryFn: async () => {
			const res = await fetch(`https://eshopspots-server.vercel.app/booking/${id}`);
			const data = await res.json();
			return data?.data;
		},
	});

	if (isLoading) {
		return <DashBoardLoader />;
	}
	return (
		<div>
			<div className="container mx-auto">
				<div className="cart-main my-10">
					{/* !Cart List Start */}
					<div className="cartlist">
						<div className="overflow-x-auto mx-7 md:mx-20">
							<table className="table">
								{/* head */}
								<thead className="text-center bg-[#6c757d50] text-black">
									<tr className="text-base">
										<th>Delete</th>
										<th>Image</th>
										<th>Product</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{OrderDetails?.products?.map((singleProduct) => {
										return (
											<SingleOrderDetails key={singleProduct._id} singleProduct={singleProduct} />
										);
									})}
								</tbody>
							</table>
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
