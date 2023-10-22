import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import React, {useState} from 'react';

import './CheckOutForm.css';
const CheckOutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, SetCardError] = useState('');
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
				<button type="submit" disabled={!stripe}>
					Pay
				</button>

				{cardError && <p className="text-red-500 mt-2">{cardError}</p>}
			</form>
		</div>
	);
};

export default CheckOutForm;
