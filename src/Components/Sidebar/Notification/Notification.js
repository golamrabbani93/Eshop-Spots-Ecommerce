import React from 'react';
import {RxCross1} from 'react-icons/rx';
import UseNotification from '../../../hooks/UseNotification';
import productImage from '../../../images/new-product.png';
import {FaExternalLinkAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Notification = ({notification, setNotification}) => {
	const {notificationData} = UseNotification();
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
					<h2 className="text-xl font-bold uppercase text-primary">Recent Order Notification</h2>
				</div>

				{notificationData?.length > 0 ? (
					notificationData?.map((data, index) => {
						return (
							<div key={index} className="flex justify-center items-center">
								<div className="flex justify-center items-center mr-4">
									<img className="w-[50px] mr-2" src={productImage} alt="" />
									<h2>You have a new order from {data?.name}</h2>
								</div>
								<Link
									onClick={() => setNotification(!notification)}
									to={`/dashboard/admin/allorders/${data?.email}`}
									className="btn btn-primary btn-sm text-white"
								>
									View Order <FaExternalLinkAlt />
								</Link>
							</div>
						);
					})
				) : (
					<h2>No Notification Found</h2>
				)}
			</div>
		</div>
	);
};

export default Notification;
