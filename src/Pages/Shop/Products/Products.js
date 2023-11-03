import React from 'react';
import SingleProduct from '../../../Components/SingleProduct/SingleProduct';

const Products = ({products, cartModal}) => {
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
				{products?.data?.map((product) => (
					<SingleProduct key={product?._id} data={product} cartModal={cartModal}></SingleProduct>
				))}
			</div>
		</div>
	);
};

export default Products;
