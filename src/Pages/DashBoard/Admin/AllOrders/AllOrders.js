import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {Link} from 'react-router-dom';
import DashBoardLoader from '../../../Shared/DashBoardLoader/DashBoardLoader';

const AllOrders = () => {
	const {data: allOrders, isLoading} = useQuery({
		queryKey: ['allOrders', 'booking'],
		queryFn: async () => {
			const response = await fetch('http://localhost:5000/booking');
			const data = await response.json();
			return data.data;
		},
	});

	if (isLoading) {
		return <DashBoardLoader />;
	}
	let newOrders = allOrders?.reduce((accObj, currentObj) => {
		accObj[currentObj?.email] = accObj[currentObj?.email] || [];
		accObj[currentObj?.email]?.push(currentObj);
		return accObj;
	}, []);

	newOrders = Object?.values(newOrders);
	if (newOrders.length === 0) {
		return <DashBoardLoader />;
	}
	return (
		<div>
			{newOrders?.length > 0 ? (
				<>
					<h2 className="bg-black text-white p-4 text-xl font-bold uppercase">Orders</h2>
					<table className="table">
						{/* head */}
						<thead className="text-center bg-[#6c757d50] text-black">
							<tr className="text-base">
								<th>No</th>
								<th>Name</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Total Order</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{newOrders?.map((order, index) => (
								<tr key={index} className="border border-spacing-3 text-center text-base">
									<td className="border border-r-3">
										<div className="text-center">
											<>{index + 1}</>
										</div>
									</td>

									<td className="border border-r-3">{order[0]?.name}</td>
									<td className="border border-r-3">{order[0]?.email}</td>

									<td className="border border-r-3">{order[0]?.phone}</td>
									<td>{order?.length}</td>
									<td className="border border-r-3">
										<Link
											to={`/dashboard/admin/orders/${order[0]?.email}`}
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

export default AllOrders;
