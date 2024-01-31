import React from 'react';
import {Link} from 'react-router-dom';

const DashBoard = () => {
	return (
		<div>
			<h2 className="text-3xl mb-3 font-bold text-primary uppercase">Dashboard</h2>
			<h3 className="text-2xl ">
				From your account dashboard. you can easily check & view your{' '}
				<Link to={'/dashboard/myaccount/orders'} className="link text-primary">
					{' '}
					recent orders
				</Link>
				, manage your{' '}
				<Link to={'/dashboard/myaccount/address'} className="link text-primary">
					shipping and billing addresses
				</Link>{' '}
				and Edit your
				<Link to={'/dashboard/myaccount/accountdetails'} className="link text-primary">
					{' '}
					password and account details.
				</Link>
			</h3>
		</div>
	);
};

export default DashBoard;
