import React from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';

const CheckOut = () => {
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
			name: 'Checkout',
			path: '/shop/checkout',
		},
	];
	return (
		<div>
			<BreadCrumb items={breaditems}></BreadCrumb>
			<h2>hello</h2>
		</div>
	);
};

export default CheckOut;
