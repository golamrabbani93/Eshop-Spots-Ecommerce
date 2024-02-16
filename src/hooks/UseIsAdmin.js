import {useEffect, useState} from 'react';

const UseIsAdmin = (email) => {
	const [userRole, setUserRole] = useState('');
	const [userLoader, setUserLoader] = useState(true);
	useEffect(() => {
		if (email) {
			fetch(`https://eshopspots-server.vercel.app/user?email=${email}`)
				.then((res) => res.json())
				.then((data) => {
					if (data.message === 'success') {
						setUserRole(data?.user?.userRole);
						setUserLoader(false);
					}
				});
		}
		setTimeout(() => {
			setUserLoader(false);
		}, 4000);
	}, [email]);
	return {userRole, userLoader};
};

export default UseIsAdmin;
