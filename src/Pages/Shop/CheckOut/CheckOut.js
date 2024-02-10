import React, {useContext, useEffect, useState} from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';
import {useForm} from 'react-hook-form';
import OrderDetails from './OrderDetails/OrderDetails';
import {CartWishListContext} from '../../../contexts/CartWishListProvider';
import UseCartTotal from '../../../hooks/UseCartTotal';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import {AuthContext} from '../../../contexts/AuthProvider';
import EmptyCartWishList from '../../../Components/EmptyCartWishList/EmptyCartWishList';
import {format} from 'date-fns';
import UseUserDetails from '../../../hooks/UseUserDetails';
import Loader from '../../Shared/Loader/Loader';
import UseScrollTop from '../../../hooks/UseScrollTop';

const CheckOut = () => {
	// !Scroll to top
	UseScrollTop();
	const {user} = useContext(AuthContext);
	const {userDetails, userLoader, refetch} = UseUserDetails(user?.email);

	// !get cart data from CartWishListProvider
	const {cartListItems, deleteAllCartlist} = useContext(CartWishListContext);
	// ! navigate to payment page
	const navigate = useNavigate();

	// !make new products array for payment and save to database
	const [newProducts, setNewProducts] = useState([]);
	useEffect(() => {
		if (cartListItems) {
			const newCartListItems = cartListItems?.map((item) => {
				return {
					...item,
					total:
						item.discount_price > 0
							? item.discount_price * item.quantity
							: item.main_price * item.quantity,
				};
			});
			setNewProducts(newCartListItems);
		}
	}, [cartListItems]);

	const {
		register,
		handleSubmit,
		reset,
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
	// !get order date
	const date = new Date();
	const orderDate = format(date, 'PP');
	// !useing loader for user information
	if (userLoader) {
		refetch();
		return <Loader></Loader>;
	}
	// !handle billingDetails
	const handleBillingDetails = async (data) => {
		const billingDetails = {
			name: data.name,
			email: data.email,
			phone: data.phone,
			country: data.country,
			townCity: data.townCity,
			street: data.street,
			orderNote: data.orderNote,
			products: newProducts,
			total: total,
			date: orderDate,
			status: 'Processing',
		};
		try {
			// !post billingDetails to database
			const res = await fetch('https://eshopspots-server.vercel.app/booking', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(billingDetails),
			});
			const dataRes = await res.json();
			const id = dataRes.bookingId;
			reset();
			// !navigate to payment page after post billingDetails to database
			navigate(`/shop/checkout/payment/${id}`);
			deleteAllCartlist();
		} catch (error) {
			toast.error('Place Order Faild');
		}
	};

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
			{cartListItems?.length > 0 ? (
				<div className="checkout">
					<form onSubmit={handleSubmit(handleBillingDetails)}>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 mx-10 md:mx-40">
							<div className="form-data">
								<h2 className="bg-black text-white p-4 text-xl font-bold uppercase">
									Billing Details
								</h2>
								<div className="flex flex-col xl:flex-row">
									<div className="form-control mt-5 w-full  !xl:w-2/3 mr-4">
										<label className="label">
											<span className="label-text font-bold">Name*</span>
										</label>
										<input
											{...register('name', {required: 'Name is required'})}
											type="text"
											defaultValue={user?.displayName}
											readOnly
											className="bg-[#d6e3f9] p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black"
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
											defaultValue={userDetails?.email}
											readOnly
											className="bg-[#d6e3f9] p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black"
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
										{...register('phone', {required: 'Phone Number is required'})}
										type="text"
										placeholder="Phone Number"
										defaultValue={userDetails?.phone}
										readOnly={userDetails?.phone ? true : false}
										className={`${
											userDetails?.phone && 'bg-[#d6e3f9]'
										} p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black`}
										autoComplete="phone"
									/>
									{errors?.phone && <span className="text-red-600">{errors.phone.message}</span>}
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
												<option
													key={index}
													value={userDetails?.country ? userDetails?.country : country.name}
													disabled={
														userDetails?.country && userDetails?.country !== country.name
															? true
															: false
													}
												>
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
										defaultValue={userDetails?.townCity}
										readOnly={userDetails?.townCity ? true : false}
										className={`${
											userDetails?.townCity && 'bg-[#d6e3f9]'
										} p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black`}
										autoComplete="phone"
									/>
									{errors.townCity && (
										<span className="text-red-600">{errors.townCity.message}</span>
									)}
								</div>
								<div className="form-control mt-5">
									<label className="label">
										<span className="label-text font-bold">Street Address*</span>
									</label>
									<input
										{...register('street', {required: 'Street Address is required'})}
										type="text"
										defaultValue={userDetails?.street}
										readOnly={userDetails?.street ? true : false}
										placeholder="Street name and House number"
										className={`${
											userDetails?.street && 'bg-[#d6e3f9]'
										} p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black`}
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
			) : (
				<EmptyCartWishList name={'Cart'}></EmptyCartWishList>
			)}
		</div>
	);
};

export default CheckOut;
