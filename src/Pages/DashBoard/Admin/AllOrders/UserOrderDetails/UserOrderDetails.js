import React from 'react';
import {useParams} from 'react-router-dom';

const UserOrderDetails = () => {
	const email = useParams().email;
	console.log('🚀🚀: UserOrderDetails -> email', email);
	return (
		<div>
			<h2>UserOrderDetails</h2>
		</div>
	);
};

export default UserOrderDetails;
