import React, {useContext} from 'react';
import Header from '../../Pages/Shared/Header/Header';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const AdminLayout = () => {
	const {logOut} = useContext(AuthContext);
	const navigate = useNavigate();
	// !breaditems list
	const items = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Dashboard',
			path: '/dashboard/admin',
		},
		{
			name: 'Admin',
			path: '/dashboard/admin',
		},
	];
	// !side nav items
	const sideNavItems = [
		{
			id: 1,
			name: 'Dashboard',
			path: '/dashboard/admin',
		},
		{
			id: 2,
			name: 'All Users',
			path: '/dashboard/admin/allusers',
		},
		{
			id: 3,
			name: 'All Orders',
			path: '/dashboard/admin/allorders',
		},
		{
			id: 7,
			name: 'Logout',
		},
	];
	const handleLogout = () => {
		navigate('/');
		logOut();
		toast.success('Logged out');
	};
	return (
		<div>
			<div className="mt-[80px]">
				<Header></Header>
				<BreadCrumb items={items}></BreadCrumb>
				<div className="my-[80px]">
					<div className="grid sm:grid-cols-12 md:grid-cols-4 gap-9 md:mx-12">
						<div className="account w-[250px]  md:w-full">
							<ul className="">
								{sideNavItems.map((item) =>
									item.name === 'Logout' ? (
										<button
											key={item.id}
											className="block text-sm uppercase text-white hover:text-white hover:bg-primary my-2 bg-black py-2 pl-3 font-bold text-left  transition-all duration-300 rounded-md w-full"
											onClick={() => handleLogout()}
										>
											{item.name}
										</button>
									) : (
										<NavLink
											className="block text-sm uppercase text-white hover:text-white hover:bg-primary my-2 bg-black py-2 pl-3 font-bold  transition-all duration-300 rounded-md"
											to={item.path}
											key={item.id}
											end={item.id === 1 ? true : false}
										>
											{item.name}
										</NavLink>
									),
								)}
							</ul>
						</div>
						<div className="md:col-span-3 overflow-scroll md:overflow-hidden">
							<Outlet></Outlet>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
