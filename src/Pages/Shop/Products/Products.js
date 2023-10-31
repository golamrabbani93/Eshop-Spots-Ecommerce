import React from 'react';
import SingleProduct from '../../../Components/SingleProduct/SingleProduct';

const Products = ({products}) => {
	console.log('🚀🚀: Products -> products ', products?.data);
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
				{products?.data?.map((product) => (
					<SingleProduct data={product} cartModal={''}></SingleProduct>
				))}
			</div>
		</div>
	);
};

export default Products;
