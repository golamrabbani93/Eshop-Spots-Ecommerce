import React, {useContext} from 'react';
import {AuthContext} from '../../../../contexts/AuthProvider';
import UseUserDetails from '../../../../hooks/UseUserDetails';
import DashBoardLoader from '../../../Shared/DashBoardLoader/DashBoardLoader';
import toast from 'react-hot-toast';

const Address = () => {
	const {user} = useContext(AuthContext);
	const {userDetails, refetch} = UseUserDetails(user?.email);
	if (Object.keys(userDetails).length === 0) {
		return <DashBoardLoader />;
	}
	const countryName = [
		{
			name: 'Bangladesh',
			value: 'Bangladesh',
		},
		{
			name: 'India',
			value: 'India',
		},
		{
			name: 'Pakistan',
			value: 'Pakistan',
		},
		{
			name: 'Bhutan',
			value: 'Bhutan',
		},
		{
			name: 'Nepal',
			value: 'Nepal',
		},
	];

	// !User Details Edited Data
	const userDetailsEditedData = (e) => {
		e.preventDefault();
		const phone = e.target[0].value;
		const street = e.target[1].value;
		const townCity = e.target[2].value;
		const country = e.target[3].value;
		const editedData = {phone, street, townCity, country};
		const modal = document.getElementById('addressModal');
		// const url = `https://eshopspots-server.vercel.app/user?email=${user?.email}`;
		fetch(`https://eshopspots-server.vercel.app/user/${userDetails?._id}`, {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(editedData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data?.user?.modifiedCount === 1) {
					toast.success('User Details Updated Successfully');
					modal.close();
					refetch();
				}
			});
	};
	return (
		<div className="ml-5">
			<h2 className="text-xl">
				The following addresses will be used on the checkout page by default.
			</h2>
			<h1 className="text-4xl mt-3">Billing Address</h1>
			<div className="mt-4">
				<h1 className="text-3xl font-extrabold">{userDetails?.name}</h1>
				{userDetails?.phone && (
					<>
						<h1 className="text-3xl mt-2">{userDetails?.phone}</h1>
						<h2 className="text-2xl mt-2">{`${userDetails?.street},${userDetails?.townCity},${userDetails?.country}`}</h2>
					</>
				)}

				<button
					className="btn btn-link mt-3 text-2xl"
					onClick={() => document.getElementById('addressModal').showModal()}
				>
					Edit Address..
				</button>
			</div>

			<dialog id="addressModal" className="modal">
				<div className="modal-box">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<h1 className="text-4xl my-3 font-bold text-primary">Billing Address</h1>
					<form onSubmit={userDetailsEditedData}>
						<label className="form-control w-full">
							<div className="label">
								<span className="label-text">Phone</span>
							</div>
							<input
								type="text"
								defaultValue={userDetails?.phone}
								placeholder="Phone Number"
								className="input input-bordered w-full"
							/>
						</label>
						<label className="form-control w-full">
							<div className="label">
								<span className="label-text">Street Name</span>
							</div>
							<input
								type="text"
								defaultValue={userDetails?.street}
								placeholder="Street Name"
								className="input input-bordered w-full"
							/>
						</label>
						<label className="form-control w-full mt-4">
							<div className="label">
								<span className="label-text">Town/City Name</span>
							</div>
							<input
								type="text"
								defaultValue={userDetails?.townCity}
								placeholder="Town/City Name"
								className="input input-bordered w-full"
							/>
						</label>
						<label className="form-control w-full mt-4">
							<div className="label">
								<span className="label-text">Country</span>
								<span className="label-text">
									Current Country: <span className="font-bold">{userDetails?.country}</span>
								</span>
							</div>
							<select className="p-3 border border-spacing-1 outline-[#E5E7EB] rounded text-black placeholder:text-black">
								{countryName.map((country, index) => {
									return (
										<option key={index} value={country.name}>
											{country.name}
										</option>
									);
								})}
							</select>
						</label>

						<button className="btn btn-primary w-full">Submit</button>
					</form>
				</div>
			</dialog>
		</div>
	);
};

export default Address;
