import React, {useState} from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';
import {useQuery} from '@tanstack/react-query';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import Loader from '../../Shared/Loader/Loader';
import CartSuccessModal from '../../Shared/CartSuccessModal/CartSuccessModal';
import {useParams} from 'react-router-dom';
import UseScrollTop from '../../../hooks/UseScrollTop';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';

const Shop = () => {
	// !Scroll to top
	// UseScrollTop();
	// !Set Cart data
	const [modalData, setModalData] = useState({});

	// !set Cart modal data
	const cartModal = (data) => {
		setModalData(data);
	};
	//!get Params
	const categoryName = useParams();
	const url = `https://eshopspots-server.vercel.app/products?categoryName=${categoryName?.name}`;
	// !get all products
	const {data: products = [], isLoading} = useQuery({
		queryKey: ['products', categoryName],
		queryFn: async () => {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		},
	});
	// !pagination
	const [page, setPage] = useState(1);
	console.log('🚀🚀: page', page);
	const productsSize = products?.data?.length;
	const perPage = 10;
	const totalPages = Math.ceil(productsSize / perPage);

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
		categoryName?.name?.length > 0 && {
			name: categoryName?.name,
			path: `/shop/category/${categoryName?.name}`,
		},
	];
	if (isLoading) {
		return <Loader></Loader>;
	}
	return (
		<div>
			<BreadCrumb items={items}></BreadCrumb>
			<div className="container m-auto my-[100px]">
				<div className="shop-main grid grid-cols-1 md:grid-cols-4 gap-4 mx-8 md:mx-12 xl:mx-20">
					{/* !left side bar */}
					<div className="left-side">
						<Categories categoryName={categoryName}></Categories>
					</div>
					{/* !right side bar */}
					<div className="right-sid md:col-start-2 md:col-end-5">
						<Products products={products} cartModal={cartModal}></Products>
					</div>
				</div>
				<div className="text-center mt-12">
					<button className="text-black p-2 m-2 rounded-md w-10 hover:text-primary transition-all">
						<FaArrowLeft />
					</button>
					{[...Array(totalPages).keys()].map((pg) => (
						<button
							onClick={() => setPage(pg + 1)}
							key={pg}
							className={`${
								page === pg + 1 ? 'bg-primary text-white' : ' bg-black text-white'
							} p-2 m-2 rounded-md w-10 hover:bg-primary hover:text-white transition-all`}
						>
							{pg + 1}
						</button>
					))}
					<button className="text-black p-2 m-2 rounded-md w-10 hover:text-primary transition-all">
						<FaArrowRight />
					</button>
				</div>
			</div>
			<CartSuccessModal modalData={modalData}></CartSuccessModal>
		</div>
	);
};

export default Shop;
