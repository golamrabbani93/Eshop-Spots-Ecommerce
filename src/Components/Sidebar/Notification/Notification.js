import React from 'react';
import {RxCross1} from 'react-icons/rx';
import UseNotification from '../../../hooks/UseNotification';
import productImage from '../../../images/new-product.png';
import {FaExternalLinkAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import toast from 'react-hot-toast';
const Notification = ({notification, setNotification}) => {
	const {notificationData, refetch} = UseNotification();
	const deleteNotification = async () => {
		const res = await fetch('https://eshopspots-server.vercel.app/notification', {
			method: 'DELETE',
		});
		const data = await res.json();
		if (data.message === 'success') {
			refetch();
			toast.success('Notification Marked as Read');
			setNotification(!notification);
		}
	};
	return (
		<div
			id="offcanvas"
			className={` ${
				notification ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'
			} offcanvas-rightside fixed z-10 top-0 right-0 w-[320px]   md:w-[400px] lg:w-[500px] h-[100%] px-5 pt-5 mb-10  bg-white transition duration-1000 overflow-auto overflow-x-hidden`}
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
				<div className="self-stretch h-[25.20px] flex-col justify-start items-start flex">
					<h2 className="text-xl font-bold uppercase text-primary">Recent Order Notification</h2>
				</div>

				{notificationData?.length > 0 ? (
					<div>
						{notificationData?.map((data, index) => {
							return (
								<div key={index} className="flex justify-center items-center mb-2">
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
						})}
						<div>
							<button
								onClick={deleteNotification}
								className={`mt-10 mb-10 w-[100%] btn btn-primary text-white self-stretch h-[35.60px]`}
							>
								Mark as all Read
							</button>
						</div>
					</div>
				) : (
					<h2 className="font-bold uppercase text-primary">No Recent Orer Found</h2>
				)}
			</div>
		</div>
	);
};

export default Notification;
