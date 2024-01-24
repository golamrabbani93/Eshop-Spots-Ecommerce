import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import React, {useEffect, useState} from 'react';
import './CheckOutForm.css';
import toast from 'react-hot-toast';
import CheckOutProductsDetails from './CheckOutProductsDetails';
import Loader from '../../../../Shared/Loader/Loader';
import {Link} from 'react-router-dom';
const CheckOutForm = ({booking}) => {
	const stripe = useStripe();
	const elements = useElements();
	const [clientSecret, setClientSecret] = useState('');
	const [cardError, SetCardError] = useState('');
	const [processing, setProcessing] = useState(false);
	const [modaldata, setModaldata] = useState({});

	// !create payment intent
	useEffect(() => {
		//! Create PaymentIntent as soon as the page loads
		fetch('https://eshopspots-server.vercel.app/payment/create-payment-intent', {
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
			setProcessing(true);
		}

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
			setProcessing(false);
			const paymentData = {
				email: booking?.email,
				price: paymentIntent.amount / 100,
				transectionId: paymentIntent.id,
				cardNumber: paymentMethod.card.last4,
				bookingId: booking?._id,
			};
			fetch('https://eshopspots-server.vercel.app/payment/', {
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
					setModaldata(paymentData);
					document.getElementById('my_modal_3').showModal();
				});
		}
		// elements.getElement(CardElement).clear();
		setProcessing(false);
	};
	if (processing || booking?.products.length === 0) {
		return <Loader></Loader>;
	}
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
				<div>
					<CheckOutProductsDetails cartListItems={booking?.products}></CheckOutProductsDetails>
				</div>
				<div>
					<form className=" m-auto checkout-form" onSubmit={handleSubmit}>
						<h2 className="bg-black text-white p-4 text-xl font-bold uppercase">
							Payment with Card
						</h2>
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
							className="btn btn-primary mb-4"
							type="submit"
							disabled={!stripe || !clientSecret || booking?.paymentStatus}
						>
							{booking?.paymentStatus ? 'Already Paid' : 'Pay Now'}
						</button>
						<h2>Demo Card Number:4242 4242 4242 4242</h2>
						<h2>MM: Any Future Date</h2>
						<h2>CVC: Any 3 Digits</h2>
						<h2>ZIP: Any 5 Digits</h2>
						<dialog id="my_modal_3" className="modal">
							<div className="modal-box">
								<h3 className="font-bold text-xl text-green-500">
									Congratulation Payment Successfull!
								</h3>
								<p className="py-4 font-bold text-base md:text-lg">
									You Payment <span className="text-primary">${modaldata.price} </span> and your
									Transaction Id-
									<span className="text-primary">{modaldata?.transectionId}</span>
								</p>
								<div className="text-center text-lg">
									<Link
										to={`/`}
										className="link ml-2 font-bold hover:text-primary transition duration-300 ease-in-out"
									>
										Home
									</Link>
									<Link
										to={`/dashborad`}
										className="link ml-2 font-bold hover:text-primary transition duration-300 ease-in-out"
									>
										Dashboard
									</Link>
									<Link
										to={`/shop`}
										className="link ml-2 font-bold hover:text-primary transition duration-300 ease-in-out"
									>
										Shop
									</Link>
								</div>
							</div>
						</dialog>
						{cardError && <p className="text-red-500 mt-2">{cardError}</p>}
					</form>
				</div>
			</div>
		</div>
	);
};

export default CheckOutForm;
