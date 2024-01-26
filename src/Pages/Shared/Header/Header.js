import React, {useContext, useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Header.css';
import WishList from '../../../Components/Sidebar/WishList/WishList';
import CartList from '../../../Components/Sidebar/CartList/CartList';
import {CartWishListContext} from '../../../contexts/CartWishListProvider';
import {MdLogin} from 'react-icons/md';
import {AuthContext} from '../../../contexts/AuthProvider';
import {FaUserCircle} from 'react-icons/fa';
import toast from 'react-hot-toast';
const Header = () => {
	// !cart Context
	const {wishListItems, cartListItems} = useContext(CartWishListContext);
	// !Auth Context
	const {user, logOut} = useContext(AuthContext);
	// *Display Wishlist and cart list show/hidden Start
	const [wishlist, setWishlist] = useState(false);
	const [cartList, setCartList] = useState(false);
	// !wishlist && !cartList
	useEffect(() => {
		if (!wishlist) {
			document.getElementById('page').classList.remove('body-opacity');
		} else {
			document.getElementById('page').classList.add('body-opacity');
		}
	}, [wishlist]);
	useEffect(() => {
		if (!cartList) {
			document.getElementById('page').classList.remove('body-opacity');
		} else {
			document.getElementById('page').classList.add('body-opacity');
		}
	}, [cartList]);
	// *Display Wishlist and cart list show/hidden End

	// *Sticky Header Start
	window.addEventListener('scroll', () => {
		var header = document.querySelector('.navigation');
		if (header) {
			header.classList.toggle('shadow', window.scrollY > 20);
		}
	});
	// *Sticky Header End

	// !Handle Log Out
	const handleLogOut = () => {
		logOut();
		toast.success('Logout Successfull');
	};
	// *navlink
	const navlink = (
		<>
			<li className="hover:text-primary mx-[20px] font-bold transition-colors">
				<NavLink className="" to="/" end>
					Home
				</NavLink>
			</li>
			<li className="hover:text-primary mx-[20px] font-bold transition-colors">
				<NavLink to="/shop">Shop</NavLink>
			</li>
			<li className="hover:text-primary mx-[20px] font-bold transition-colors">
				<NavLink to="/blog">Blog</NavLink>
			</li>
		</>
	);
	return (
		<div className="relative">
			<div className=" sticky z-[2] top-0 dark:text-black">
				<div className="bg-secondary navigation fixed  top-0 w-[100%]">
					<div className="relative container mx-auto navbar h-[80px]">
						<div className="navbar-start">
							<div className="dropdown">
								<label tabIndex={0} className="btn btn-ghost lg:hidden">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h8m-8 6h16"
										/>
									</svg>
								</label>
								<div
									tabIndex={0}
									className="menu-sm dropdown-content mt-3 z-[1] p-2  bg-black rounded-box w-52 text-white uppercase"
								>
									<ul>{navlink}</ul>
									<div className="flex mt-4">
										<div className="wishlist mx-6">
											<div
												onClick={() => setWishlist(!wishlist)}
												className="indicator cursor-pointer transition-colors hover:text-primary"
											>
												<span className="indicator-item badge bg-primary text-white  font-bold">
													{wishListItems?.length || 0}
												</span>
												<span className="icon-heart text-2xl"></span>
											</div>
										</div>
										<div className="cart mr-8">
											<div
												onClick={() => setCartList(!cartList)}
												className="indicator cursor-pointer transition-colors hover:text-primary"
											>
												<span className="indicator-item badge bg-primary text-white  font-bold">
													{cartListItems?.length || 0}
												</span>
												<span className="icon-bag text-2xl"></span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<Link to={'/'} className="text-primary text-xl lg:text-2xl font-extrabold">
								E-ShopSpots
							</Link>
						</div>
						<div className="navbar-center hidden lg:flex">
							<ul className="menu-horizontal px-1 uppercase">{navlink}</ul>
						</div>
						<div className="navbar-end transition-colors">
							<div className="hidden lg:flex">
								<div className="wishlist mx-6">
									<div
										onClick={() => setWishlist(!wishlist)}
										className="indicator cursor-pointer transition-colors hover:text-primary"
									>
										<span className="indicator-item badge bg-primary text-white  font-bold">
											{wishListItems?.length || 0}
										</span>
										<span className="icon-heart text-2xl"></span>
									</div>
								</div>
								<div className="cart mr-8">
									<div
										onClick={() => setCartList(!cartList)}
										className="indicator cursor-pointer transition-colors hover:text-primary"
									>
										<span className="indicator-item badge bg-primary text-white  font-bold">
											{cartListItems?.length || 0}
										</span>
										<span className="icon-bag text-2xl"></span>
									</div>
								</div>
							</div>
							<div>
								{user?.uid ? (
									<div className="dropdown dropdown-end">
										<label tabIndex={0} className="btn btn-ghost btn-circle avatar mt-0">
											<div className="w-10 rounded-full">
												{user?.photoURL ? (
													<img src={user?.photoURL} alt="" />
												) : (
													<FaUserCircle className="w-10 h-10" />
												)}
											</div>
										</label>
										<ul
											className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 font-bold`}
										>
											<li>
												<Link
													to="/dashboard/myaccount"
													className="justify-between hover:text-primary focus:!text-white"
												>
													My Account
												</Link>
											</li>
											<li>
												<Link
													onClick={() => handleLogOut()}
													className="justify-between hover:text-primary focus:!text-white"
												>
													Logout
												</Link>
											</li>
										</ul>
									</div>
								) : (
									<Link
										className=" border border-primary px-4 py-2 rounded flex items-center hover:text-primary mx-[20px] font-bold transition-colors uppercase"
										to="/login"
									>
										Login <MdLogin className="ml-1 w-6 h-6" />
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* 
             Side wishlist start 
            */}
			<WishList wishlist={wishlist} setWishlist={setWishlist}></WishList>
			<CartList cartList={cartList} setCartList={setCartList}></CartList>
			{/* 
			 Side wishlist end 
			*/}
		</div>
	);
};

export default Header;
