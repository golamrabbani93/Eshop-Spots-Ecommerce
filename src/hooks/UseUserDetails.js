import {useQuery} from '@tanstack/react-query';
import {useContext, useState} from 'react';
import {AuthContext} from '../contexts/AuthProvider';

const UseUserDetails = (email) => {
	const {logOut} = useContext(AuthContext);
	const [userDetails, setUserDetails] = useState({});
	const [userRole, setUserRole] = useState('');
	const [userLoader, setUserLoader] = useState(true);

	const {refetch} = useQuery({
		queryKey: ['user', email],
		queryFn: async () => {
			const res = await fetch(`https://eshopspots-server.vercel.app/user?email=${email}`, {
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			});
			if (res.status === 403) {
				setTimeout(() => {
					logOut();
				}, 3000);
			}
			const data = await res.json();
			if (data.message === 'success') {
				setUserDetails(data?.user);
				setUserRole(data?.user?.userRole);
				setUserLoader(false);
			}

			return data;
		},
	});

	return {userDetails, refetch, userRole, userLoader};
};

export default UseUserDetails;
