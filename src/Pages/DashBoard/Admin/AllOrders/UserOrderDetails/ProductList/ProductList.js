import React from 'react';
import {useParams} from 'react-router-dom';

const ProductList = () => {
	const id = useParams().id;
	console.log('🚀🚀: ProductList -> id', id);
	return <div>Product LIst</div>;
};

export default ProductList;
