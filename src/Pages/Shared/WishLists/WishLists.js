import React, {useContext} from 'react';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb';
import {CartWishListContext} from '../../../contexts/CartWishListProvider';
import UseWishListProduct from '../../../hooks/UseWishListProduct';
import SingleWishLists from './SingleWishLists/SingleWishLists';
const WishLists = () => {
	const {wishListItems} = useContext(CartWishListContext);
	const {newWishLists, isLoading} = UseWishListProduct(wishListItems);

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
			name: 'WishList',
			path: '/shop/wishlist',
		},
	];
	if (isLoading) {
		return (
			<h2 className="mt-[300px] font-bold uppercase text-primary flex justify-center items-center">
				Loading...
			</h2>
		);
	}
	return (
		<div>
			<BreadCrumb items={breaditems}></BreadCrumb>
			<div className="wishlist-main my-10">
				<div className="container mx-auto">
					<div className="overflow-x-auto mx-20">
						{newWishLists.length > 0 ? (
							<table className="table">
								{/* head */}
								<thead className="text-center bg-[#6c757d50] text-black">
									<tr className="text-xl">
										<th>Delete</th>
										<th>Image</th>
										<th>Product</th>
										<th>Price</th>
										<th>Stock</th>
										<th>Add To Cart</th>
									</tr>
								</thead>
								<tbody>
									{newWishLists?.map((wishList) => {
										return (
											<SingleWishLists key={wishList._id} wishList={wishList}></SingleWishLists>
										);
									})}
								</tbody>
							</table>
						) : (
							'no items found'
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WishLists;
