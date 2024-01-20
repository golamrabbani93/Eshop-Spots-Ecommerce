import {useEffect, useState} from 'react';

const UseUserDetails = (email) => {
	const [userDetails, setUserDetails] = useState({});
	useEffect(() => {
		if (email) {
			const url = `https://eshopspots-server.vercel.app/user?email=${email}`;
			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setUserDetails(data?.user);
				});
		}
	}, [email]);
	return userDetails;
};

export default UseUserDetails;
