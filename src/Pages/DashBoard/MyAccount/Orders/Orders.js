import React, {useContext} from 'react';
import {AuthContext} from '../../../../contexts/AuthProvider';
import {useQuery} from '@tanstack/react-query';

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
	console.log('🚀🚀: Orders -> orders', orders);
	return (
		<div>
			{
				<table className="table">
					{/* head */}
					<thead className="text-center bg-[#6c757d50] text-black">
						<tr className="text-base">
							<th>Order</th>
							<th>Date</th>
							<th>Status</th>
							<th>Total</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{orders?.length > 0 ? (
							orders.map((order, index) => (
								<tr key={order._id} className="border border-spacing-3 text-center text-base">
									<td className="border border-r-3">
										<div className="text-center">
											<h2>{index + 1}</h2>
										</div>
									</td>
									<td className="border border-r-3 ">
										<h2>date</h2>
									</td>
									<td className="border border-r-3">procceing</td>
									<td className="border border-r-3">{`${orders?.length} for $${order?.total}`}</td>
									<td className="border border-r-3">
										<button className="btn btn-sm btn-link">View</button>
									</td>
								</tr>
							))
						) : (
							<h2>No orders Found</h2>
						)}
					</tbody>
				</table>
			}
		</div>
	);
};

export default Orders;
