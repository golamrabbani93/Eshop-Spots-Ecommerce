import {useQuery} from '@tanstack/react-query';
import React, {useContext} from 'react';
import DashBoardLoader from '../../../Shared/DashBoardLoader/DashBoardLoader';
import SingleUser from './SingleUser/SingleUser';
import {AuthContext} from '../../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const AllUsers = () => {
	const {logOut} = useContext(AuthContext);
	const {
		data: users,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const res = await fetch(`https://eshopspots-server.vercel.app/user`, {
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
			return data.data;
		},
	});

	if (isLoading) {
		return <DashBoardLoader />;
	}
	return (
		<div>
			{users?.length > 0 ? (
				<>
					<h2 className="bg-black text-white p-4 text-xl font-bold uppercase">All Users</h2>
					<table className="table">
						{/* head */}
						<thead className="text-center bg-[#6c757d50] text-black">
							<tr className="text-base">
								<th>User</th>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<SingleUser key={index} user={user} index={index} refetch={refetch} />
							))}
						</tbody>
					</table>
				</>
			) : (
				<h1 className="text-center text-2xl">No Users Found</h1>
			)}
		</div>
	);
};

export default AllUsers;
