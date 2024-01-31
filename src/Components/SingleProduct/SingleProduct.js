import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Rating from '../Rating/Rating';
import {CartWishListContext} from '../../contexts/CartWishListProvider';
import {BsSuitHeart, BsSuitHeartFill} from 'react-icons/bs';
import UseScrollTop from '../../hooks/UseScrollTop';
const SingleProduct = ({data, cartModal}) => {
	UseScrollTop();
	// !import from CartWishListProvider
	const {addDeleteWishList, wishListItems, addCart} = useContext(CartWishListContext);
	// !change icon for add wishListItem
	const [isWishList, setIsWishList] = useState(false);
	// !add WishList item to local storage
	const handleWishList = (id) => {
		addDeleteWishList(id);
	};
	// !set active wishlist product Icon
	useEffect(() => {
		const isWishList = wishListItems?.includes(data?._id);
		setIsWishList(isWishList);
	}, [data?._id, wishListItems]);

	// !Add Cart Data id to local storage
	const handleAddCart = (data) => {
		// !addCart Function from CartWishListProvider
		addCart(data);
		// // !cart Modal success
		cartModal(data);
	};

	return (
		<div>
			<div className="flex justify-center">
				<div className="new-card card-compact !w-56 md:!w-72 mt-8  mx-3">
					<div className="relative overflow-hidden">
						<Link to={`/shop/product/${data?._id}`}>
							<img className=" md:h-[300px]" src={data?.img} alt={data?.name} />
						</Link>

						<div className="action-link">
							<div>
								<label
									onClick={() => handleAddCart(data)}
									className="text-white hover:text-primary font-bold uppercase transition duration-500 cursor-pointer"
									htmlFor="success-modal"
								>
									Add to Cart
								</label>
							</div>
							<div>
								<Link
									onClick={() => handleWishList(data?._id)}
									className={`${
										isWishList ? 'text-primary' : ' text-white hover:text-primary'
									} tooltip tooltip-left mx-2 transition duration-500 text-xl`}
									data-tip={`${isWishList ? 'Remove from' : 'Add to'} wishlist`}
								>
									{isWishList ? (
										//
										<BsSuitHeartFill></BsSuitHeartFill>
									) : (
										<BsSuitHeart></BsSuitHeart>
									)}
									{/* <i className="icon-heart"></i> */}
								</Link>
							</div>
						</div>
						{data?.best_seller && (
							<h2 className="text-xs font-bold py-[2px] px-1 absolute top-[10px] left-[10px] text-primary-focus uppercase bg-[#ff386033]">
								Best Seller
							</h2>
						)}
					</div>
					<div className="mt-3">
						<Link
							to={`/shop/product/${data?._id}`}
							className="hover:text-primary transiti duration-300"
						>
							<h2 className="card-title">{data?.name}</h2>
						</Link>
					</div>
					<div className="price-rating flex justify-between">
						<Rating rating={data?.rating}></Rating>
						<div className="price mr-3">
							<span className="font-bold text-primary">
								{data.discount_price > 0 ? (
									<>
										<del>${data.main_price}</del> - ${data.discount_price}
									</>
								) : (
									<span>${data.main_price}</span>
								)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
