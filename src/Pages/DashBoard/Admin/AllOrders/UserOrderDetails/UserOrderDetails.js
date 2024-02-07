import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {Link, useParams} from 'react-router-dom';
import DashBoardLoader from '../../../../Shared/DashBoardLoader/DashBoardLoader';
import {FaCheck, FaXmark} from 'react-icons/fa6';

const UserOrderDetails = () => {
	const email = useParams().email;
	// !get user order data from database
	const {
		data: orders,
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ['booking', 'all', email],
		queryFn: async () => {
			const res = await fetch(`https://eshopspots-server.vercel.app/booking/all/${email}`);
			const data = await res.json();
			return data?.data;
		},
	});
	const changeStatus = async (status, id) => {
		fetch(`http://localhost:5000/booking/status/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({status}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.data.modifiedCount > 0) {
					refetch();
				}
			});
	};

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
								<th>Change Status</th>
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
									<td className="border border-r-3">{order?.status}</td>
									<td className="w-[200px]">
										<select
											name=""
											id=""
											className="w-[200px]"
											onChange={(e) => changeStatus(e.target.value, order._id)}
										>
											<option value="Processing">Processing</option>
											<option value="Shipped">Shipped</option>
											<option value="Delivered">Delivered</option>
											<option value="Cancelled">Cancelled</option>
										</select>
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
											to={`http://localhost:3000/dashboard/admin/allorders/order/${order?._id}`}
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

export default UserOrderDetails;
