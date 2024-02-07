import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {useParams} from 'react-router-dom';

const ProductList = () => {
	const bookingId = useParams().id;
	const {
		data: productList,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['booking', bookingId],
		queryFn: async () => {
			const res = await fetch(`https://eshopspots-server.vercel.app/booking/${bookingId}`);
			const data = await res.json();
			return data?.data.products;
		},
	});
	console.log('🚀🚀: ProductList -> productList', productList);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return <div>Product LIst</div>;
};

export default ProductList;
