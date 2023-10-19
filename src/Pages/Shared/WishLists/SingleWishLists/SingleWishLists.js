import React from 'react';
import {FaTrash} from 'react-icons/fa';
const SingleWishLists = ({wishList}) => {
	const {_id, img, name, discount_price, main_price, stock} = wishList;
	return (
		<tr className="border border-spacing-3 text-center text-base">
			<td className="border border-r-3">
				<div className="text-center">
					<FaTrash className="w-5 h-5 text-center m-auto text-red-500 hover:text-red-600 cursor-pointer" />
				</div>
			</td>
			<td className="border border-r-3 ">
				<div className="avatar">
					<div className="mask mask-squircle w-[100px] ">
						<img className="text-center" src={img} alt={name} />
					</div>
				</div>
			</td>
			<td className="border border-r-3">{name}</td>
			<td className="border border-r-3">${discount_price || main_price}</td>
			<td className="border border-r-3">{stock}</td>
			<td className="border border-r-3">
				<button className="btn btn-primary btn-outline">Add To Cart</button>
			</td>
		</tr>
	);
};

export default SingleWishLists;
