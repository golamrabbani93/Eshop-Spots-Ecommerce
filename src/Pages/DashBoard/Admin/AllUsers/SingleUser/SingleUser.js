import React from 'react';
import toast from 'react-hot-toast';

const SingleUser = ({user, index, refetch}) => {
	// !Make Admin
	const makeAdmin = async (id) => {
		const res = await fetch(`http://localhost:5000/user/makeAdmin/${id}`, {
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
				<div className="text-center">{user?.userRole}</div>
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
						onClick={() => console.log('Delete User' + user?._id)}
						className="btn btn-sm bg-red-500 hover:bg-red-600 text-white mr-3"
					>
						Delete User
					</button>
				</div>
			</td>
		</tr>
	);
};

export default SingleUser;
