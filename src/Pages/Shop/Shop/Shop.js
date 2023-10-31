import React from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';
import {useQuery} from '@tanstack/react-query';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';

const Shop = () => {
	// !load cateGories
	const {data: cateGories} = useQuery({
		queryKey: ['category'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/category');
			const data = await res.json();
			return data.data;
		},
	});
	const items = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Shop',
			path: '/shop',
		},
	];
	return (
		<div>
			<BreadCrumb items={items}></BreadCrumb>
			<div className="container mx-auto">
				<div className="shop-main grid grid-cols-1 md:grid-cols-4 gap-4 mx-16">
					{/* !left side bar */}
					<div className="left-side bg-red-500  col-start-1 col-end-2">
						<Categories></Categories>
					</div>
					{/* !right side bar */}
					<div className="right-side bg-purple-600 w-full col-start-2 col-end-5">
						<Products></Products>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
