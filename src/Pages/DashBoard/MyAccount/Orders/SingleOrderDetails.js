import React from 'react';
import {FaTrash} from 'react-icons/fa';
import UseScrollTop from '../../../../hooks/UseScrollTop';

const SingleOrderDetails = ({singleProduct, paymentStatus}) => {
	// ! Scroll to top
	UseScrollTop();
	const {_id, img, name, discount_price, main_price, quantity, total} = singleProduct;
	return (
		<tr className="border border-spacing-3 text-center text-base">
			{!paymentStatus && (
				<td className="border border-r-3">
					<div className="text-center">
						<FaTrash
							onClick={() => console.log(_id)}
							className="w-5 h-5 text-center m-auto text-red-500 hover:text-red-600 cursor-pointer"
						/>
					</div>
				</td>
			)}
			<td className="border border-r-3 ">
				<div className="avatar">
					<div className="mask mask-squircle w-[100px] ">
						<img className="text-center" src={img} alt={name} />
					</div>
				</div>
			</td>
			<td className="border border-r-3">{name}</td>
			<td className="border border-r-3">${discount_price || main_price}</td>
			<td className="border border-r-3">{quantity}</td>
			<td className="border border-r-3">${total}</td>
		</tr>
	);
};

export default SingleOrderDetails;
