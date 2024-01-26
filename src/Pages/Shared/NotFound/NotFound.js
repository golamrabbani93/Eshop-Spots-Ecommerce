import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';
import {Link} from 'react-router-dom';

const NotFound = () => {
	const breadItems = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: '404 Not Found',
			path: '/notfound',
		},
	];
	return (
		<div>
			<Header></Header>
			<BreadCrumb items={breadItems}></BreadCrumb>
			<div className="my-[80px] text-center">
				<h2 className="text-9xl my-3 text-primary-focus font-extrabold">404</h2>
				<h3 className="text-black my-3">OPPS! PAGE NOT BE FOUND</h3>
				<p className="w-1/3 m-auto my-3">
					Sorry but the page you are looking for does not exist, have been removed, name changed or
					is temporarily unavailable.
				</p>
				<Link
					to={`/`}
					className="block text-sm uppercase text-white hover:text-white hover:bg-primary my-2 bg-black py-2 font-bold  transition-all duration-300 rounded-md w-60 m-auto"
				>
					Back to Home Page
				</Link>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default NotFound;
