import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Header from '../../Pages/Shared/Header/Header';
import './MyAccountLayout.css';
const MyAccountLayout = () => {
	// !breaditems list
	const items = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Dashboard',
			path: '/dashboard/myaccount',
		},
		{
			name: 'My Account',
			path: '/dashboard/myaccount',
		},
	];
	// !side nav items
	const sideNavItems = [
		{
			id: 1,
			name: 'Dashboard',
			path: '/dashboard/myaccount',
		},
		{
			id: 2,
			name: 'Orders',
			path: '/dashboard/myaccount/orders',
		},
		{
			id: 3,
			name: 'Downloads',
			path: '/dashboard/myaccount/downloads',
		},
		{
			id: 4,
			name: 'Addresses',
			path: '/dashboard/myaccount/addresses',
		},
		{
			id: 5,
			name: 'Account Details',
			path: '/dashboard/myaccount/accountdetails',
		},
		{
			id: 6,
			name: 'Logout',
			path: '/dashboard/myaccount/logout',
		},
	];
	return (
		<div className="mt-[80px]">
			<Header></Header>
			<BreadCrumb items={items}></BreadCrumb>
			<div className="my-[80px]">
				<div className="grid grid-cols-12 md:grid-cols-4 gap-9 mx-12">
					<div className="account">
						<ul className="">
							{sideNavItems.map((item) => (
								<NavLink
									className="block text-sm uppercase text-white hover:text-white hover:bg-primary my-2 bg-black py-2 pl-3 font-bold  transition-all duration-300 rounded-md"
									to={item.path}
									key={item.id}
									end
								>
									{item.name}
								</NavLink>
							))}
						</ul>
					</div>
					<div className="col-span-3">
						<Outlet></Outlet>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyAccountLayout;
