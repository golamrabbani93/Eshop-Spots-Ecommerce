import React from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';

const ProductDetails = () => {
	const items = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Shop',
			path: '/shop',
		},
		{
			name: 'Product Details',
			path: '/product-details',
		},
	];
	return (
		<div>
			<BreadCrumb items={items}></BreadCrumb>
		</div>
	);
};

export default ProductDetails;
