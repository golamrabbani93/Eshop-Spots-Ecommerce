import React from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();
	//! sign up with email and password
	const handleSignUp = (data) => {
		const fullData = {fullName: `${data.firstName} ${data.lastName}`, ...data};
		console.log('🚀🚀: handleSignUp -> fullData', fullData);
		// userSignUp(data.email, data.password)
		// .then((result) => {
		// 	toast.success('Sign Up Complete');
		// 	//!Post User TO database
		// 	UsePostUser(data.name, data.email);
		// 	//! user Name Update start
		// 	const userinfo = {
		// 		displayName: data.name,
		// 	};
		// 	updateUser(userinfo)
		// 		.then(() => {
		// 			// !Set User Email For Token
		// 			setUserEmail(data.email);
		// 		})
		// 		.catch((err) => console.log(err));
		// 	// //! user Name Update end
		// 	reset();
		// })
		// .catch((err) => {
		// 	toast.error('Sign Up Faild');
		// });
	};

	// // ! sign in with google acount
	const handleGoogleSignUp = () => {
		console.log('🚀🚀: handleGoogleSignUp -> handleGoogleSignUp');
		// 	googleSignIn()
		// 		.then((result) => {
		// 			//!Post User TO database
		// 			UsePostUser(result.user.displayName, result.user.email);
		// 			// !Set User Email For Token
		// 			setTimeout(() => {
		// 				setUserEmail(result.user.email);
		// 			}, 500);
		// 			toast.success('Sign Up Complete');
		// 		})
		// 		.catch((err) => {
		// 			toast.error('Sign Up Faild');
		// 		});
	};

	return (
		<div className="mt-[90px] container mx-auto mb-8">
			<h3 className="text-5xl text-center mt-6 font-extrabold">Sign Up</h3>
			<form onSubmit={handleSubmit(handleSignUp)}>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 xl:w-3/6 mx-10 md:mx-auto mt-7 ">
					<div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">First Name:</span>
							</label>
							<input
								{...register('firstName', {required: 'First Name is required'})}
								type="text"
								placeholder="First Name"
								className="input input-bordered"
								autoComplete="First-Name"
							/>
							{errors.firstName && (
								<span className="text-red-600 text-xs ml-2">{errors.firstName.message}</span>
							)}
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email:</span>
							</label>
							<input
								{...register('email', {required: 'Email is required'})}
								type="text"
								placeholder="email"
								className="input input-bordered"
								autoComplete="email"
							/>
							{errors.email && (
								<span className="text-red-600 text-xs ml-2">{errors.email.message}</span>
							)}
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Phone:</span>
							</label>
							<input
								{...register('phone', {
									required: 'Phone is required',
								})}
								type="Text"
								placeholder="Phone"
								className="input input-bordered"
							/>
							{errors.phone && (
								<span className="text-red-600 text-xs ml-2">{errors.phone.message}</span>
							)}
						</div>
					</div>
					<div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Last Name</span>
							</label>
							<input
								{...register('lastName', {required: 'Last Name is required'})}
								type="text"
								placeholder="Last Name"
								className="input input-bordered"
								autoComplete="Last-Name"
							/>
							{errors.lastName && (
								<span className="text-red-600 text-xs ml-2">{errors.lastName.message}</span>
							)}
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Address:</span>
							</label>
							<input
								{...register('address', {required: 'Address is required'})}
								type="text"
								placeholder="Address"
								className="input input-bordered"
								autoComplete="Address"
							/>
							{errors.address && (
								<span className="text-red-600 text-xs ml-2">{errors.address.message}</span>
							)}
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password:</span>
							</label>
							<input
								{...register('password', {
									required: 'Password is required',
									minLength: {value: 6, message: 'Password must be 6 characters long'},
									pattern: {
										value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
										message: 'Password must have uppercase, number and special characters',
									},
								})}
								type="password"
								placeholder="password"
								className="input input-bordered"
								autoComplete="password"
							/>
							{errors.password && (
								<span className="text-red-600 text-xs ml-2">{errors.password.message}</span>
							)}
						</div>
					</div>
				</div>
				<div className=" w-3/6  mx-auto">
					<div className="form-control mt-6">
						<button type="submit" className="btn btn-outline btn-primary">
							Sign Up
						</button>
					</div>
					<div className="">
						<h3 className="text-base text-center mt-1">
							Already in E-shopspots?{' '}
							<Link to="/login" className="text-primary link link-hover">
								Login
							</Link>
						</h3>
						<div className="divider">OR</div>
						<h2 onClick={handleGoogleSignUp} className="btn btn-outline btn-primary w-full">
							CONTINUE WITH GOOGLE
						</h2>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
