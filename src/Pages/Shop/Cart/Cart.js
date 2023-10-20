import React, {useContext} from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';
import EmptyCartWishList from '../../../Components/EmptyCartWishList/EmptyCartWishList';
import {CartWishListContext} from '../../../contexts/CartWishListProvider';
import Loader from '../../Shared/Loader/Loader';

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
		<div>
			<BreadCrumb items={breaditems}></BreadCrumb>
			<div className="wishlist-main my-10">
				<div className="container mx-auto">
					<div className="overflow-x-auto mx-20">
						{cartListItems.length > 0 ? (
							<table className="table">
								{/* head */}
								<thead className="text-center bg-[#6c757d50] text-black">
									<tr className="text-base">
										<th>Delete</th>
										<th>Image</th>
										<th>Product</th>
										<th>Price</th>
										<th>Stock</th>
										<th>Add To Cart</th>
									</tr>
								</thead>
								<tbody>
									{/* {newWishLists?.map((wishList) => {
										return (
											<SingleWishLists
												key={wishList._id}
												wishList={wishList}
												setModalData={setModalData}
											></SingleWishLists>
										);
									})} */}
								</tbody>
							</table>
						) : (
							<EmptyCartWishList name={'Cart'}></EmptyCartWishList>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
