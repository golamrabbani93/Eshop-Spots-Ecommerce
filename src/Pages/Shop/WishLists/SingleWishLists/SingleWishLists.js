import React, {useContext} from 'react';
import {FaTrash} from 'react-icons/fa';
import {CartWishListContext} from '../../../../contexts/CartWishListProvider';
import toast from 'react-hot-toast';
const SingleWishLists = ({wishList, setModalData}) => {
	const {_id, img, name, discount_price, main_price, stock} = wishList;
	// !get deleteWishList,add cart  from context
	const {addDeleteWishList, addCart} = useContext(CartWishListContext);
	// !Delete wishlist item from local storage
	const handleDeleteWishList = (id) => {
		addDeleteWishList(id);
		toast.success('Product Deleted From Wishlist');
	};

	// !Add wishlist to cart data to local storage
	const handleAddCart = (data) => {
		// !addCart Function from CartWishListProvider
		addCart(data);
		// !set modal data
		setModalData(data);
		addDeleteWishList(data._id);
	};

	return (
		<tr className="border border-spacing-3 text-center text-base">
			<td className="border border-r-3">
				<div className="text-center">
					<FaTrash
						onClick={() => handleDeleteWishList(_id)}
						className="w-5 h-5 text-center m-auto text-red-500 hover:text-red-600 cursor-pointer"
					/>
				</div>
			</td>
			<td className="border border-r-3 ">
				<div className="avatar">
					<div className="mask mask-squircle w-[100px] ">
						<img className="text-center" src={img} alt={name} />
					</div>
				</div>
			</td>
			<td className="border border-r-3">{name}</td>
			<td className="border border-r-3">${discount_price || main_price}</td>
			<td className="border border-r-3">{stock}</td>
			<td className="border border-r-3">
				<label
					onClick={() => handleAddCart(wishList)}
					className="btn btn-primary btn-outline"
					htmlFor="success-modal"
				>
					Add to Cart
				</label>
			</td>
		</tr>
	);
};

export default SingleWishLists;
