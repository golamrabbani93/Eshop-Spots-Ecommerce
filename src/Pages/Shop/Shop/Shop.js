import React, {useState} from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';
import {useQuery} from '@tanstack/react-query';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import Loader from '../../Shared/Loader/Loader';
import CartSuccessModal from '../../Shared/CartSuccessModal/CartSuccessModal';

const Shop = () => {
	// !Set Cart data
	const [modalData, setModalData] = useState({});

	// !set Cart modal data
	const cartModal = (data) => {
		setModalData(data);
	};
	// !get all products
	const {data: products = [], isLoading} = useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/products');
			const data = await res.json();
			return data;
		},
	});

	// !breaditems list
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

	if (isLoading) {
		return <Loader></Loader>;
	}
	return (
		<div>
			<BreadCrumb items={items}></BreadCrumb>
			<div className="container mx-auto my-[100px]">
				<div className="shop-main grid grid-cols-1 md:grid-cols-4 gap-4 mx-20">
					{/* !left side bar */}
					<div className="left-side">
						<Categories></Categories>
					</div>
					{/* !right side bar */}
					<div className="right-sid col-start-2 col-end-5">
						<Products products={products} cartModal={cartModal}></Products>
					</div>
				</div>
			</div>
			<CartSuccessModal modalData={modalData}></CartSuccessModal>
		</div>
	);
};

export default Shop;
