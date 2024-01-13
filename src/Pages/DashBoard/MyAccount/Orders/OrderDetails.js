import {useQuery} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const OrderDetails = () => {
	// !get id from url
	const id = useParams()?.id;
	// !Set OrderDetails
	const [OrderDetailsData, setOrderDetailsData] = useState(0);
	console.log('🚀🚀: OrderDetails -> OrderDetailsData', OrderDetailsData);

	const {data: OrderDetails} = useQuery({
		queryKey: ['booking', id],
		queryFn: async () => {
			const res = await fetch(`https://eshopspots-server.vercel.app/booking/${id}`);
			const data = await res.json();
			return data?.data;
		},
	});

	// !get all products from database by ids
	const ids = OrderDetails?.products?.map((product) => product?._id);
	useEffect(() => {
		if (ids && OrderDetailsData === 0) {
			fetch('https://eshopspots-server.vercel.app/booking/products/all', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(ids),
			})
				.then((res) => res.json())
				.then((data) => {
					setOrderDetailsData(data?.data);
				});
		}
	}, [ids, OrderDetailsData]);

	return (
		<div>
			<h2>This is a order details page</h2>
		</div>
	);
};

export default OrderDetails;
