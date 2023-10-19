import React from 'react';
import {Link} from 'react-router-dom';

const EmptyCartWishList = ({name}) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="image ">
				<img
					className="max-w-full md:w-[700px]"
					src="https://i.ibb.co/BfXKbr8/empty-cart-wishlist.png"
					alt="empty"
				/>
			</div>
			<h4 className="text-3xl uppercase text-primary font-bold mt-10">Your {name} is Empty</h4>
			<h6 className="text-2xl font-semibold text-[#777] mt-6">
				Sorry Mate... No item Found inside your {name}!
			</h6>
			<button className="btn btn-primary btn-outline mt-6">
				<Link to="/shop">Continue Shopping</Link>
			</button>
		</div>
	);
};

export default EmptyCartWishList;
