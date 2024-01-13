import React, {useContext} from 'react';
import {AuthContext} from '../../../../contexts/AuthProvider';
import {useQuery} from '@tanstack/react-query';
import {FaCheck} from 'react-icons/fa';
import {FaXmark} from 'react-icons/fa6';
import {Link} from 'react-router-dom';
const Orders = () => {
	// !get user email
	const {user} = useContext(AuthContext);
	const userEmail = user?.email;
	// !get user order data from database
	const {data: orders} = useQuery({
		queryKey: ['booking', 'all', userEmail],
		queryFn: async () => {
			const res = await fetch(`http://localhost:5000/booking/all/${userEmail}`);
			const data = await res.json();
			return data?.data;
		},
	});
	return (
		<div>
			{orders?.length > 0 ? (
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
								<td className="border border-r-3">procceing</td>
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
			) : (
				<h1 className="text-center text-2xl">No Orders Found</h1>
			)}
		</div>
	);
};

export default Orders;
