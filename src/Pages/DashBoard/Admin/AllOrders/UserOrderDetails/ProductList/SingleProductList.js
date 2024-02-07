import React from 'react';
import UseScrollTop from '../../../../../../hooks/UseScrollTop';

const SingleProductList = ({singleProduct}) => {
	UseScrollTop();
	const {img, name, discount_price, quantity, main_price, total} = singleProduct;
	return (
		<tr className="border border-spacing-3 text-center text-base">
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

export default SingleProductList;
