import React, {useContext} from 'react';
import {AuthContext} from '../../../../contexts/AuthProvider';
import {useQuery} from '@tanstack/react-query';
import {FaCheck} from 'react-icons/fa';
import {FaXmark} from 'react-icons/fa6';
import {Link} from 'react-router-dom';
import DashBoardLoader from '../../../Shared/DashBoardLoader/DashBoardLoader';
import toast from 'react-hot-toast';

const Orders = () => {
	// !get user email
	const {user, logOut} = useContext(AuthContext);
	const userEmail = user?.email;
	// !get user order data from database
	const {data: orders, isLoading} = useQuery({
		queryKey: ['booking', 'all', userEmail],
		queryFn: async () => {
			const res = await fetch(`https://eshopspots-server.vercel.app/booking/all/${userEmail}`, {
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			});
			const data = await res.json();
			if (data.message === 'Token Expired') {
				toast.error('Token Expired');
				logOut();
			}
			return data?.data;
		},
	});
	if (isLoading) {
		return <DashBoardLoader />;
	}
	return (
		<div>
			{orders?.length > 0 ? (
				<>
					<h2 className="bg-black text-white p-4 text-xl font-bold uppercase">Order</h2>
					<table className="table">
						{/* head */}
						<thead className="text-center bg-[#6c757d50] text-black">
							<tr className="text-base">
								<th>Order</th>
								<th>Date</th>
								<th>Status</th>
								<th>Total</th>
								<th>Payment Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order, index) => (
								<tr key={order._id} className="border border-spacing-3 text-center text-base">
									<td className="border border-r-3">
										<div className="text-center">
											<>{index + 1}</>
										</div>
									</td>
									<td className="border border-r-3 ">
										<>{order?.date}</>
									</td>
									<td
										className={`border border-r-  text-white font-bold text-xl ${
											order?.status === 'Processing' && 'bg-yellow-400'
										} ${order?.status === 'Shipped' && 'bg-cyan-400'} ${
											order?.status === 'Delivered' && 'bg-green-500'
										} ${order?.status === 'Cancelled' && 'bg-red-500'}`}
									>
										{order?.status}
									</td>
									<td className="border border-r-3">{`${order?.products?.length} for $${order?.total}`}</td>
									<td>
										{order?.paymentStatus ? (
											<FaCheck className="text-green-500 m-auto text-2xl" />
										) : (
											<FaXmark className="text-red-500 m-auto text-2xl" />
										)}
									</td>
									<td className="border border-r-3">
										<Link
											to={`/dashboard/myaccount/orders/${order?._id}`}
											className="btn btn-sm btn-link"
										>
											View
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			) : (
				<h1 className="text-center text-2xl">No Orders Found</h1>
			)}
		</div>
	);
};

export default Orders;
