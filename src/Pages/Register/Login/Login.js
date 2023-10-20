import React, {useContext, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../../contexts/AuthProvider';
import UsePostUser from '../../../hooks/UsePostUser';

const Login = () => {
	const {userSignIn, googleSignIn, loader, setLoader} = useContext(AuthContext);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();
	const handleLogin = (data) => {
		userSignIn(data.email, data.password)
			.then((result) => {
				toast.success('Login Complete');
				navigate('/');
				setLoader(false);
				reset();
			})
			.catch((err) => {
				if (err.code === 'auth/invalid-login-credentials') {
					toast.error('Password Wrong');
				} else {
					toast.error('Login Faild');
				}
				setLoader(false);
			});
	};
	// ! sign in with google acount
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				toast.success('Sign In Complete');
				UsePostUser(result.user.displayName, result.user.email);
				navigate('/');
			})
			.catch((err) => {
				toast.error('Sign In Faild');
			});
	};

	return (
		<div className="mt-[90px] container mx-auto mb-8">
			<h3 className="text-5xl text-center mt-6 font-extrabold">Login</h3>
			<div className="xl:w-2/6 mx-10 md:mx-auto mt-7 ">
				<form onSubmit={handleSubmit(handleLogin)}>
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
							})}
							type="password"
							placeholder="password"
							className="input input-bordered"
							autoComplete="password"
						/>
						{errors.password && <span className="text-red-600">{errors.password.message}</span>}
						<label className="label">
							<Link href="#" className="label-text-alt link link-hover">
								Forgot password?
							</Link>
						</label>
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-outline btn-primary">
							{loader ? <span className="loading loading-spinner text-neutral"></span> : 'Login'}
						</button>
					</div>
				</form>
				<div className="">
					<h3 className="text-base text-center mt-1">
						New to E-ShopSpots?{' '}
						<Link to="/signup" className="text-primary link link-hover">
							Create new account
						</Link>
					</h3>
					<div className="divider">OR</div>
					<button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary w-full">
						CONTINUE WITH GOOGLE
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
