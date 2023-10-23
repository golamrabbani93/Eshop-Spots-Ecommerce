import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import React, {useContext, useEffect, useState} from 'react';

import './CheckOutForm.css';
import {CartWishListContext} from '../../../../../contexts/CartWishListProvider';
import toast from 'react-hot-toast';
const CheckOutForm = ({booking}) => {
	const {deleteAllCartlist} = useContext(CartWishListContext);
	const stripe = useStripe();
	const elements = useElements();
	const [clientSecret, setClientSecret] = useState('');
	const [cardError, SetCardError] = useState('');
	const [processing, setProcessing] = useState(false);

	// !create payment intent
	useEffect(() => {
		//! Create PaymentIntent as soon as the page loads
		fetch('http://localhost:5000/payment/create-payment-intent', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(booking),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [booking]);
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		const card = elements.getElement(CardElement);
		if (card == null) {
			return;
		}

		// Use your card Element with other Stripe.js APIs
		const {error, paymentMethod} = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});
		if (error) {
			SetCardError(error.message);
		} else {
			SetCardError('');
		}
		setProcessing(true);
		const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: card,
				billing_details: {
					name: booking?.name,
					email: booking?.email,
					phone: booking?.phone,
				},
			},
		});
		if (confirmError) {
			SetCardError(confirmError.message);
			return;
		}
		if (paymentIntent.status === 'succeeded') {
			const paymentData = {
				email: booking?.email,
				price: paymentIntent.amount / 100,
				transectionId: paymentIntent.id,
				cardNumber: paymentMethod.card.last4,
				bookingId: booking?._id,
			};
			fetch('http://localhost:5000/payment/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(paymentData),
			})
				.then((res) => res.json())
				.then((data) => {
					SetCardError('');
					toast.success('Payment Success');
					deleteAllCartlist();
				});
		}
		elements.getElement(CardElement).clear();
		setProcessing(false);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>
				<button
					className="btn btn-primary"
					type="submit"
					disabled={!stripe || !clientSecret || processing}
				>
					Pay Now
				</button>

				{cardError && <p className="text-red-500 mt-2">{cardError}</p>}
			</form>
		</div>
	);
};

export default CheckOutForm;
