import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';

const UseWishListProduct = (wishListItems) => {
	// !!get Filterd product from database
	const [newWishLists, setNewWishLists] = useState([]);

	// !!get all products from database
	const {data: products = [], isLoading} = useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const res = await fetch('https://eshopspots-server.vercel.app/products');
			const data = await res.json();
			return data;
		},
	});

	useEffect(() => {
		if (!isLoading && products?.data) {
			const newWishList = products?.data?.filter((product) =>
				wishListItems?.includes(product?._id),
			);
			setNewWishLists(newWishList);
		}
	}, [products, wishListItems, isLoading]);
	return {newWishLists, isLoading};
};

export default UseWishListProduct;
