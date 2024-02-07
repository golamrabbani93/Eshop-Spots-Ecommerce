import React from 'react';
import toast from 'react-hot-toast';

const SingleUser = ({user, index, refetch}) => {
	// !Make Admin
	const makeAdmin = async (id) => {
		const res = await fetch(`https://eshopspots-server.vercel.app/user/makeAdmin/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();
		if (data.message === 'Update success') {
			refetch();
			toast.success('User Role Updated');
		} else {
			toast.error('Something Went Wrong');
		}
	};
	// !Delete User
	const deleteUser = async (id) => {
		const res = await fetch(`https://eshopspots-server.vercel.app/user/delete/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();
		if (data.message === 'Delete success') {
			refetch();
			toast.success('User Deleted');
		} else {
			toast.error('Something Went Wrong');
		}
	};

	return (
		<tr className="border border-spacing-3 text-center text-base">
			<td className="border border-r-3">
				<div className="text-center">{index + 1}</div>
			</td>
			<td className="border border-r-3">
				<div className="text-center">{user?.name}</div>
			</td>
			<td className="border border-r-3">
				<div className="text-center">{user?.email}</div>
			</td>
			<td className="border border-r-3">
				<div className="text-center capitalize">{user?.userRole}</div>
			</td>
			<td className="border border-r-3">
				<div className="text-center">
					<button
						onClick={() => makeAdmin(user?._id)}
						className="btn btn-sm bg-green-500 hover:bg-green-600 text-white mr-3"
						disabled={user?.userRole === 'admin'}
					>
						Make Admin
					</button>
					<button
						onClick={() => deleteUser(user?._id)}
						className="btn btn-sm bg-red-500 hover:bg-red-600 text-white mr-3"
						disabled={user?.userRole === 'admin'}
					>
						Delete User
					</button>
				</div>
			</td>
		</tr>
	);
};

export default SingleUser;
