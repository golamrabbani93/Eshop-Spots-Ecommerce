import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';

const UseUserDetails = (email) => {
	const [userDetails, setUserDetails] = useState({});
	const [userRole, setUserRole] = useState('');
	const [userLoader, setUserLoader] = useState(true);

	const {refetch} = useQuery({
		queryKey: ['user', email],
		queryFn: async () => {
			const res = await fetch(`https://eshopspots-server.vercel.app/user?email=${email}`);
			const data = await res.json();
			if (data.message === 'success') {
				setUserDetails(data?.user);
				setUserRole(data?.user?.userRole);
			}
			setUserLoader(false);
			return data;
		},
	});
	return {userDetails, refetch, userRole, userLoader};
};

export default UseUserDetails;
