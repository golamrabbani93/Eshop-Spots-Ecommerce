import React, {useContext} from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';
import EmptyCartWishList from '../../../Components/EmptyCartWishList/EmptyCartWishList';
import {CartWishListContext} from '../../../contexts/CartWishListProvider';
import Loader from '../../Shared/Loader/Loader';
import SingleCart from './SingleCart/SingleCart';
import CartTotal from './CartTotal/CartTotal';

const Cart = () => {
	const {cartListItems, loading} = useContext(CartWishListContext);
	// !breaditems list
	const breaditems = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Shop',
			path: '/shop',
		},
		{
			name: 'Cart',
			path: '/shop/cart',
		},
	];

	if (loading) {
		return <Loader></Loader>;
	}
	return (
		<div className="container mx-auto">
			<BreadCrumb items={breaditems}></BreadCrumb>
			<div className="cart-main my-10">
				{/* !Cart List Start */}
				<div className="cartlist">
					<div className="overflow-x-auto mx-20">
						{cartListItems?.length > 0 ? (
							<table className="table">
								{/* head */}
								<thead className="text-center bg-[#6c757d50] text-black">
									<tr className="text-base">
										<th>Delete</th>
										<th>Image</th>
										<th>Product</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{cartListItems?.map((cartlist) => {
										return <SingleCart key={cartlist._id} cartlist={cartlist}></SingleCart>;
									})}
								</tbody>
							</table>
						) : (
							<EmptyCartWishList name={'Cart'}></EmptyCartWishList>
						)}
					</div>
				</div>
				{/* *Cart List End */}
				<CartTotal cart={cartListItems}></CartTotal>
			</div>
		</div>
	);
};

export default Cart;
