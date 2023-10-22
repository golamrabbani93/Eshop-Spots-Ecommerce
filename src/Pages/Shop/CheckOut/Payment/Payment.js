import React from 'react';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm/CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
console.log();
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
			<div>
				<Elements stripe={stripePromise}>
					<CheckOutForm></CheckOutForm>
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
