import React, {useContext} from 'react';
import {FaTrash} from 'react-icons/fa';
import {CartWishListContext} from '../../../../contexts/CartWishListProvider';
import toast from 'react-hot-toast';
const SingleCart = ({cartlist}) => {
	const {_id, img, name, discount_price, main_price, quantity} = cartlist;
	// !get add cart and deleteCartlist from CartWishListContext
	const {handleProductQuantity, deleteCartlist} = useContext(CartWishListContext);

	// !Add product quantity
	const handleQuantity = (e, _id) => {
		const newQuantity = e.target.value;
		handleProductQuantity(_id, newQuantity);
	};

	// !delete product from cart
	const handleDeleteProduct = (_id) => {
		deleteCartlist(_id);
		toast.success('Product Deleted From Cart');
	};

	return (
		<tr className="border border-spacing-3 text-center text-base">
			<td className="border border-r-3">
				<div className="text-center">
					<FaTrash
						onClick={() => handleDeleteProduct(_id)}
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
			<td className="border border-r-3">
				Quantity:
				<input
					type="number"
					onChange={(e) => handleQuantity(e, _id)}
					defaultValue={quantity || 0}
					min={1}
					max={100}
					className="input input-ghost w-[80px] ml-2"
				/>
			</td>
			<td className="border border-r-3">
				${discount_price > 0 ? discount_price * quantity : main_price * quantity}
			</td>
		</tr>
	);
};

export default SingleCart;
