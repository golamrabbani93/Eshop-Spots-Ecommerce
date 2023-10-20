import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
	const {userSignUp, updateUser, loader, setLoader} = useContext(AuthContext);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();
	//! sign up with email and password
	const handleSignUp = (data) => {
		userSignUp(data.email, data.password)
			.then((result) => {
				//! user Name Update in google start
				const userinfo = {
					displayName: data.name,
				};
				updateUser(userinfo);
				//! user Name Update in google end
				//!Post User TO database
				fetch('http://localhost:5000/user', {
					method: 'POST',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						name: data.name,
						email: data.email,
					}),
				})
					.then(() => {
						toast.success('Sign Up Success');
						navigate('/');
					})
					.catch((err) => {
						toast.error('Sign Up Faild');
					});
				reset();
			})
			.catch((err) => {
				if (err.code === 'auth/email-already-in-use') {
					toast.error('Email Already Used');
				} else {
					toast.error('Sign Up Faild');
				}
				setLoader(false);
			});
	};

	// // ! sign in with google acount
	const handleGoogleSignUp = () => {
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
			<div className="xl:w-2/6 mx-10 md:mx-auto mt-7 ">
				<form onSubmit={handleSubmit(handleSignUp)}>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input
							{...register('name', {required: 'Name is required'})}
							type="text"
							placeholder="Name"
							className="input input-bordered"
							autoComplete="name"
						/>
						{errors.name && <span className="text-red-600">{errors.name.message}</span>}
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							{...register('email', {required: 'Email is required'})}
							type="text"
							placeholder="email"
							className="input input-bordered"
							autoComplete="email"
						/>
						{errors.email && <span className="text-red-600">{errors.email.message}</span>}
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
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
						{errors.password && <span className="text-red-600">{errors.password.message}</span>}
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-outline btn-primary">
							{loader ? <span className="loading loading-spinner text-neutral"></span> : 'Sign Up'}
						</button>
					</div>
				</form>
				<div className="">
					<h3 className="text-base text-center mt-1">
						Already have an account?{' '}
						<Link to="/login" className="text-primary link link-hover">
							Login
						</Link>
					</h3>
					<div className="divider">OR</div>
					<button onClick={handleGoogleSignUp} className="btn btn-outline btn-primary w-full">
						CONTINUE WITH GOOGLE
					</button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
