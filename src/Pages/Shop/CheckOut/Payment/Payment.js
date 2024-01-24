import React from 'react';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm/CheckOutForm';
import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Payment = () => {
	const {id} = useParams();
	const {data: booking = []} = useQuery({
		queryKey: ['booking', id],
		queryFn: async () => {
			const res = await fetch(`https://eshopspots-server.vercel.app/booking/${id}`);
			const data = res.json();
			return data;
		},
	});
	// !destructuring
	const {data} = booking;
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
					<CheckOutForm booking={data}></CheckOutForm>
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
