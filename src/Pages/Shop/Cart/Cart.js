import React from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';

const Cart = () => {
	// !breaditems list
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
			name: 'Cart',
			path: '/shop/cart',
		},
	];
	return (
		<div>
			<BreadCrumb items={breaditems}></BreadCrumb>
		</div>
	);
};

export default Cart;
