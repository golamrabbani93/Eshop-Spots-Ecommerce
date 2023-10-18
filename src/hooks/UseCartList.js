import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';

const UseCartList = (items) => {
	const [newCartLists, setNewCartLists] = useState([]);

	// !get all products from database
	const {data: products = [], isLoading} = useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/products');
			const data = await res.json();
			return data;
		},
	});

	useEffect(() => {
		if (!isLoading) {
			const filteredCartList = products.data?.filter((product) => {
				//! Check if product.id exists in cartListItems array
				return items?.find((cart) => cart.id === product._id);
			});
			setNewCartLists(filteredCartList);
		}
	}, [items, isLoading, products]);
	return newCartLists;
};

export default UseCartList;
