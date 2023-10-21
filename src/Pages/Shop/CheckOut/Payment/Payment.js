import React from 'react';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';

const Payment = () => {
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
		{
			name: 'Payment',
			path: '/shop/checkout/payment',
		},
	];
	return (
		<div>
			<BreadCrumb items={breaditems}></BreadCrumb>
		</div>
	);
};

export default Payment;
