import React, {useContext} from 'react';
import {RxCross1} from 'react-icons/rx';
import {Link} from 'react-router-dom';
import {CartWishListContext} from '../../../contexts/CartWishListProvider';
import SingleWishList from './SingleWishList/SingleWishList';
import UseWishListProduct from '../../../hooks/UseWishListProduct';
const WishList = ({wishlist, setWishlist}) => {
	// !!get wishlist itmes from local storage
	const {wishListItems} = useContext(CartWishListContext);
	// !!get Filterd product from database with local storage IDS
	const {newWishLists} = UseWishListProduct(wishListItems);

	return (
		<div
			id="offcanvas"
			className={` ${
				wishlist ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'
			} offcanvas-rightside fixed z-10 top-0 right-0 w-[320px]   md:w-[400px] h-[100%] px-5 pt-5 mb-10  bg-white transition duration-1000 overflow-auto overflow-x-hidden`}
		>
			<div className="self-stretch h-10 pl-[275px] md:pl-[324.26px] pr-[5.74px] pt-[5.80px] pb-[4.20px] flex-col justify-start items-end flex">
				<div
					onClick={() => setWishlist(!wishlist)}
					className="hover:text-red-600 transition cursor-pointer text-center text-black text-3xl font-normal  leading-[30px]"
				>
					<RxCross1 />
				</div>
			</div>
			<div className="self-stretch flex-col justify-start items-start gap-10 flex">
				<div className="self-stretch h-[25.20px] pr-[284px] flex-col justify-start items-start flex">
					<h2 className="text-xl font-bold uppercase text-primary">Wishlist</h2>
				</div>
				{newWishLists?.length > 0 ? (
					newWishLists?.map((wishList) => (
						<SingleWishList key={wishList._id} wishList={wishList}></SingleWishList>
					))
				) : (
					<h2 className="font-bold uppercase text-primary">No Items Found</h2>
				)}
			</div>
			{newWishLists?.length > 0 ? (
				// ! if  wishList items found then show this button
				<Link
					onClick={() => setWishlist(!wishlist)}
					to={'/shop/wishlist'}
					className={`mt-10 mb-10 w-[100%] btn btn-primary text-white self-stretch h-[35.60px]`}
				>
					View wishlist
				</Link>
			) : (
				// ! if No wishList items found then show this button
				<Link
					onClick={() => setWishlist(!wishlist)}
					className={`mt-10 mb-10 w-[100%] btn btn-primary text-white self-stretch h-[35.60px]`}
					to={'/shop'}
				>
					Visit Shop
				</Link>
			)}
		</div>
	);
};

export default WishList;
