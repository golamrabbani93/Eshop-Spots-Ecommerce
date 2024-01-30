import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';

const UseUserDetails = (email) => {
	const [userDetails, setUserDetails] = useState({});

	const {refetch} = useQuery({
		queryKey: ['user', email],
		queryFn: async () => {
			const res = await fetch(`https://eshopspots-server.vercel.app/user?email=${email}`);
			const data = await res.json();
			setUserDetails(data?.user);
			return data?.user;
		},
	});
	return {userDetails, refetch};
};

export default UseUserDetails;
