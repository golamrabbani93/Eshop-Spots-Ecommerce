import React, {useEffect, useState} from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';
import {useQuery} from '@tanstack/react-query';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import Loader from '../../Shared/Loader/Loader';
import CartSuccessModal from '../../Shared/CartSuccessModal/CartSuccessModal';
import {useParams} from 'react-router-dom';
import UseScrollTop from '../../../hooks/UseScrollTop';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import FilterByPrize from '../FilterByPrize/FilterByPrize';

const Shop = () => {
	// !Scroll to top
	UseScrollTop();
	// !Set Cart data
	const [modalData, setModalData] = useState({});

	// !set Cart modal data
	const cartModal = (data) => {
		setModalData(data);
	};
	// !pagination
	const [page, setPage] = useState(0);
	const [productsSize, setProductsSize] = useState(0);
	const perPage = 9;
	const totalPages = Math.ceil(productsSize / perPage);
	//!get Params
	const categoryName = useParams();
	const {name} = useParams();
	//!Filter by prize
	const [minValue, setMinValue] = useState(60);
	const [maxValue, setMaxValue] = useState(750);
	const handleInputPrize = (e) => {
		setMinValue(e.minValue);
		setMaxValue(e.maxValue);
	};
	// !set page to 0 when category changes
	useEffect(() => {
		setPage(0);
	}, [name]);

	const url = `https://eshopspots-server.vercel.app/products?categoryName=${
		categoryName?.name
	}&page=${page}&limit=${9}&minPrice=${minValue}&maxPrice=${maxValue}`;
	// !get all products
	const {data: products = [], isLoading} = useQuery({
		queryKey: ['products', categoryName, page, minValue, maxValue],
		queryFn: async () => {
			const res = await fetch(url);
			const data = await res.json();
			setProductsSize(data.total);
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
						<FilterByPrize
							minValue={minValue}
							maxValue={maxValue}
							handleInputPrize={handleInputPrize}
						></FilterByPrize>
					</div>
					{/* !right side bar */}
					<div className="right-sid md:col-start-2 md:col-end-5">
						<Products products={products} cartModal={cartModal}></Products>
					</div>
				</div>
				{
					<div className="text-center mt-12">
						<button
							className="text-black p-2 m-2 rounded-md w-10 hover:text-primary transition-all disabled:opacity-50"
							onClick={() => setPage(page - 1)}
							disabled={page === 0}
						>
							<FaArrowLeft />
						</button>
						{[...Array(totalPages).keys()].map((pg) => (
							<button
								onClick={() => setPage(pg)}
								key={pg}
								className={`${
									page === pg ? 'bg-primary text-white' : ' bg-black text-white'
								} p-2 m-2 rounded-md w-10 hover:bg-primary hover:text-white transition-all`}
							>
								{pg + 1}
							</button>
						))}
						<button
							onClick={() => setPage(page + 1)}
							className="text-black p-2 m-2 rounded-md w-10 hover:text-primary transition-all disabled:opacity-50"
							disabled={totalPages - 1 === page || page === totalPages}
						>
							<FaArrowRight />
						</button>
					</div>
				}
			</div>
			<CartSuccessModal modalData={modalData}></CartSuccessModal>
		</div>
	);
};

export default Shop;
