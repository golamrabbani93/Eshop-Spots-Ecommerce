import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';

const OrderDetails = ({cartLists}) => {
	console.log('🚀🚀: OrderDetails -> cartLists', cartLists);
	return (
		<div>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead className="bg-[#ddd] h-[60px]">
						<tr className="font-bold text-xl text-black">
							<th>Product</th>
							<th className="text-right">Total</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{cartLists?.map((cartList) => {
							return (
								<tr key={cartList?._id} className="border border-r-2 border-l-0">
									<td className="flex items-center border border-r-2 border-l-0 border-b-0 border-t-0">
										{cartList?.name} <AiOutlineClose className="ml-1" />
										<span className="ml-1 font-bold">{cartList.quantity}</span>
									</td>
									<td className="text-right">
										$
										{cartList?.discount_price > 0
											? cartList?.discount_price * cartList?.quantity
											: cartList?.main_price * cartList?.quantity}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OrderDetails;
