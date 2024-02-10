import React from 'react';
import {RxCross1} from 'react-icons/rx';
import UseNotification from '../../../hooks/UseNotification';

const Notification = ({notification, setNotification}) => {
	const {notificationData} = UseNotification();
	console.log('🚀🚀: Notification -> notificationData', notificationData);
	return (
		<div
			id="offcanvas"
			className={` ${
				notification ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'
			} offcanvas-rightside fixed z-10 top-0 right-0 w-[320px]   md:w-[400px] lg:w-[500px] xl:w-[700px] h-[100%] px-5 pt-5 mb-10  bg-white transition duration-1000 overflow-auto overflow-x-hidden`}
		>
			<div className="self-stretch h-10 pl-[275px] md:pl-[324.26px] pr-[5.74px] pt-[5.80px] pb-[4.20px] flex-col justify-start items-end flex">
				<div
					onClick={() => setNotification(!notification)}
					className="hover:text-red-600 transition cursor-pointer text-center text-black text-3xl font-normal  leading-[30px]"
				>
					<RxCross1 />
				</div>
			</div>
			<div className="self-stretch flex-col justify-start items-start gap-10 flex">
				<div className="self-stretch h-[25.20px] pr-[284px] flex-col justify-start items-start flex">
					<h2 className="text-xl font-bold uppercase text-primary">Wishlist</h2>
				</div>
				notification
			</div>
			{/* {newWishLists?.length > 0 ? (
				// ! if  wishList items found then show this button
				<Link
					onClick={() => setWishlist(!wishlist)}
					to={'/shop/wishlist'}
					className={`mt-10 mb-10 w-[100%] btn btn-primary text-white self-stretch h-[35.60px]`}
				>
					View wishlist
				</Link>
			) : (
				// ! if No wishList items found then show this button
				<Link
					onClick={() => setWishlist(!wishlist)}
					className={`mt-10 mb-10 w-[100%] btn btn-primary text-white self-stretch h-[35.60px]`}
					to={'/shop'}
				>
					Visit Shop
				</Link>
			)} */}
		</div>
	);
};

export default Notification;
