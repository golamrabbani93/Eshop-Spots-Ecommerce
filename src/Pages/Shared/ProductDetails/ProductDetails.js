import React, {useContext, useEffect, useState} from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';
import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import Loader from '../Loader/Loader';
import Rating from '../../../Components/Rating/Rating';
import {AiFillCheckCircle} from 'react-icons/ai';
import {BsPlus} from 'react-icons/bs';
import {BsSuitHeart} from 'react-icons/bs';
import {BsSuitHeartFill} from 'react-icons/bs';
import {CartWishListContext} from '../../../contexts/CartWishListProvider';
import CartSuccessModal from '../CartSuccessModal/CartSuccessModal';
const ProductDetails = () => {
	const {addDeleteWishList, wishListItems, addCart} = useContext(CartWishListContext);
	const [isWishList, setIsWishList] = useState(false);
	const [productQuantity, setProductQuantity] = useState(1);
	const {id} = useParams();
	// !get product data from server
	const {data: product = [], isLoading} = useQuery({
		queryKey: ['product', id],
		queryFn: async () => {
			const res = await fetch(`http://localhost:5000/products/${id}`);
			const data = await res.json();
			return data.data;
		},
	});
	// !Add wishlist item to local storage
	const handleWishList = (id) => {
		addDeleteWishList(id);
	};
	// !check wishlist item is in local storage
	useEffect(() => {
		const isWishList = wishListItems?.includes(product?._id);
		setIsWishList(isWishList);
	}, [product?._id, wishListItems]);

	// !add quantity
	const handleAddQuantity = (quantity) => {
		setProductQuantity(parseInt(quantity));
	};
	// ! add product to cart list
	const handleAddCart = (data) => {
		const newCartData = {...data, quantity: productQuantity};
		addCart(newCartData);
	};
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
			name: `${product?.name || 'Product Details'}`,
			path: '/product-details',
		},
	];
	if (isLoading) {
		return <Loader> </Loader>;
	}
	return (
		<div>
			<BreadCrumb items={items}></BreadCrumb>
			<div className="container mx-auto my-24">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
					<div>
						<img className="w-[500px] lg:ml-auto border" src={product?.img} alt="" />
					</div>
					<div className="product-details ml-3">
						<h2 className="text-4xl font-bold">{product?.name}</h2>
						<div className="mt-2 flex items-center">
							<Rating rating={product?.rating}></Rating>
							<h5 className="ml-1">(customer review )</h5>
						</div>
						<h2 className="text-3xl mt-3">${product?.discount_price || product?.main_price}.00</h2>
						<h5 className="mt-4">
							{product.description.length > 100
								? product?.description.slice(0, 300)
								: product?.description}
						</h5>
						<div className="divider my-10"></div>
						<h2 className="text-lg font-bold uppercase">Available Options</h2>
						<h3 className=" font-bold uppercase mt-4 flex items-center">
							<AiFillCheckCircle className="text-green-500 w-5 h-5 mr-2" />
							<span>{product?.stock} In stocks</span>
						</h3>
						<h5 className="mr-3 mt-4 text-xl">Quantity:</h5>
						<div className="flex items-center mt-3">
							<input
								onChange={(e) => handleAddQuantity(e.target.value)}
								className="border border-gray-400 px-2 py-1 w-20 h-11"
								type="number"
								defaultValue={1}
								min={1}
								max={100}
							/>
							<label
								htmlFor="success-modal"
								onClick={() => handleAddCart(product)}
								className="btn btn-primary ml-4"
							>
								<BsPlus className="w-6 h-6 text-white font-bold" />
								Add to Cart
							</label>
						</div>
						<div className="mt-4">
							{isWishList ? (
								<h4
									onClick={() => handleWishList(product?._id)}
									className="flex items-center hover:text-primary-focus transition duration-300 cursor-pointer"
								>
									<BsSuitHeartFill className="w-5 h-5 mr-2 text-primary"></BsSuitHeartFill> Remove
									to Wishlist
								</h4>
							) : (
								<h4
									onClick={() => handleWishList(product?._id)}
									className="flex items-center hover:text-primary-focus transition duration-300 cursor-pointer"
								>
									<BsSuitHeart className="w-5 h-5 mr-2"></BsSuitHeart> Add to Wishlist
								</h4>
							)}
						</div>
					</div>
				</div>
			</div>
			<CartSuccessModal modalData={product}></CartSuccessModal>
		</div>
	);
};

export default ProductDetails;
