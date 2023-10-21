import React, {useContext} from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';
import {useForm} from 'react-hook-form';
import OrderDetails from './OrderDetails/OrderDetails';
import {CartWishListContext} from '../../../contexts/CartWishListProvider';
import UseCartTotal from '../../../hooks/UseCartTotal';

const CheckOut = () => {
	// !get cart data from CartWishListProvider
	const {cartListItems} = useContext(CartWishListContext);
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	// !get Total Products Price
	const subTotal = UseCartTotal(cartListItems);

	let total = 0;
	const shipping = 5;
	// !calculate total Products price +shipping
	if (subTotal) {
		total += subTotal + shipping;
	}

	const handleBillingDetails = (data) => {};

	const countryName = [
		{
			name: 'Bangladesh',
			value: 'Bangladesh',
		},
		{
			name: 'India',
			value: 'India',
		},
		{
			name: 'Pakistan',
			value: 'Pakistan',
		},
		{
			name: 'Bhutan',
			value: 'Bhutan',
		},
		{
			name: 'Nepal',
			value: 'Nepal',
		},
	];
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
			<div className="checkout">
				<form onSubmit={handleSubmit(handleBillingDetails)}>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 mx-10 md:mx-40">
						<div className="form-data">
							<h2 className="bg-black text-white p-4 text-xl font-bold uppercase">
								Billing Details
							</h2>
							<div className="flex flex-col xl:flex-row">
								<div className="form-control mt-5 w-full  xl:w-2/3 mr-4">
									<label className="label">
										<span className="label-text font-bold">Name*</span>
									</label>
									<input
										{...register('name', {required: 'Name is required'})}
										type="text"
										placeholder="Name"
										className="p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black"
										autoComplete="name"
									/>
									{errors.name && <span className="text-red-600">{errors.name.message}</span>}
								</div>
								<div className="form-control mt-5 w-full">
									<label className="label">
										<span className="label-text font-bold">Email*</span>
									</label>
									<input
										{...register('email', {required: 'Email is required'})}
										type="text"
										placeholder="Email"
										className="p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black"
										autoComplete="email"
									/>
									{errors.email && <span className="text-red-600">{errors.email.message}</span>}
								</div>
							</div>
							<div className="form-control mt-5">
								<label className="label">
									<span className="label-text font-bold">Phone*</span>
								</label>
								<input
									{...register('phone', {required: 'Name is required'})}
									type="text"
									placeholder="Phone Number"
									className="p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black"
									autoComplete="phone"
								/>
								{errors.phone && <span className="text-red-600">{errors.phone.message}</span>}
							</div>
							<div className="form-control mt-5">
								<label className="label">
									<span className="label-text font-bold">Country*</span>
								</label>
								<select
									{...register('country', {required: 'Country is required'})}
									className="p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black"
								>
									{countryName.map((country, index) => {
										return (
											<option key={index} value={country.value}>
												{country.name}
											</option>
										);
									})}
								</select>
								{errors.country && <span className="text-red-600">{errors.country.message}</span>}
							</div>
							<div className="form-control mt-5">
								<label className="label">
									<span className="label-text font-bold">Town/City*</span>
								</label>
								<input
									{...register('townCity', {required: 'Town/City is required'})}
									type="text"
									placeholder="Town or City name"
									className="p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black"
									autoComplete="phone"
								/>
								{errors.townCity && <span className="text-red-600">{errors.townCity.message}</span>}
							</div>
							<div className="form-control mt-5">
								<label className="label">
									<span className="label-text font-bold">Street Address*</span>
								</label>
								<input
									{...register('street', {required: 'Street Address is required'})}
									type="text"
									placeholder="House number and street name"
									className="p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black"
									autoComplete="phone"
								/>
								{errors.street && <span className="text-red-600">{errors.street.message}</span>}
							</div>
							<div className="form-control mt-5">
								<label className="label">
									<span className="label-text font-bold">Order Note</span>
								</label>
								<textarea
									{...register('orderNote')}
									type="text"
									placeholder="Notes about your order, e.g. special notes for delivery."
									className="p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black h-32"
									autoComplete="note"
								/>
							</div>
						</div>
						<div className="order-details">
							<div className="cupon">
								<h2 className="bg-black text-white p-4 text-xl font-bold uppercase">
									Order details
								</h2>
								<OrderDetails cartLists={cartListItems}></OrderDetails>

								<div className="cart-subtotal">
									<div className="mx-5 my-5 font-bold">
										<div>
											<div className="flex justify-between mb-2 ">
												<h2 className="uppercase">Subtotal</h2>
												<h2>${subTotal}</h2>
											</div>
											<div className="flex justify-between mb-2">
												<h2 className="uppercase">Shipping</h2>
												<h2>$5</h2>
											</div>
											<div className="flex justify-between mb-2">
												<h2 className="uppercase">Tax</h2>
												<h2>0</h2>
											</div>
										</div>
										<div className="divider"></div>
										<div>
											<div className="flex justify-between mb-2">
												<h2 className="uppercase">Total</h2>
												<h2>${total}</h2>
											</div>
										</div>
									</div>
								</div>
								<div className="form-control mt-6">
									<button className="btn btn-outline btn-primary">Place Order</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CheckOut;
