import React from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';

const WishLists = () => {
	const breaditems = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Shop',
			path: '/shop',
		},
		{
			name: 'WishList',
			path: '/shop/wishlist',
		},
	];
	return (
		<div className="">
			<BreadCrumb items={breaditems}></BreadCrumb>
			<h2>wishList</h2>
		</div>
	);
};

export default WishLists;
