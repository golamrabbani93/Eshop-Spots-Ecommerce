import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {useParams} from 'react-router-dom';
import CheckOutProductsDetails from '../../../../../Shop/CheckOut/Payment/CheckOutForm/CheckOutProductsDetails';
import SingleProductList from './SingleProductList';
import DashBoardLoader from '../../../../../Shared/DashBoardLoader/DashBoardLoader';

const ProductList = () => {
	const bookingId = useParams().id;
	const {data: productList, isLoading} = useQuery({
		queryKey: ['booking', bookingId],
		queryFn: async () => {
			const res = await fetch(`https://eshopspots-server.vercel.app/booking/${bookingId}`);
			const data = await res.json();
			return data?.data.products;
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
						{productList.length > 0 ? (
							<div className="overflow-x-auto mx-7 md:mx-20">
								<h2 className="bg-black text-white p-4 text-xl font-bold uppercase">
									Product details
								</h2>
								<table className="table">
									{/* head */}
									<thead className="text-center bg-[#6c757d50] text-black">
										<tr className="text-base">
											<th>Image</th>
											<th>Product</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Total</th>
										</tr>
									</thead>
									<tbody>
										{productList?.map((singleProduct) => {
											return (
												<SingleProductList key={singleProduct._id} singleProduct={singleProduct} />
											);
										})}
									</tbody>
								</table>
								<div className="mt-6">
									<CheckOutProductsDetails cartListItems={productList}></CheckOutProductsDetails>
								</div>
							</div>
						) : (
							<h2 className="bg-black text-white p-4 text-xl font-bold uppercase">
								No Product Found
							</h2>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductList;
