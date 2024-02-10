import {useQuery} from '@tanstack/react-query';

const UseNotification = () => {
	const {data: notificationData, refetch} = useQuery({
		queryKey: ['notification'],
		queryFn: async () => {
			const res = await fetch('https://eshopspots-server.vercel.app/notification');
			const data = await res.json();
			return data.data;
		},
	});
	return {notificationData, refetch};
};

export default UseNotification;
