import React, {createContext, useEffect, useState} from 'react';

export const CartWishListContext = createContext();

const CartWishListProvider = ({children}) => {
	const [refresh, setRefresh] = useState(false);
	const [wishListItems, setWishListItems] = useState([]);

	// !get wishlist itmes from local storage
	useEffect(() => {
		const storedCart = localStorage.getItem('Wishlist');
		setWishListItems(JSON.parse(storedCart));
	}, [refresh]);
	// !Add Wishlist id to local storage
	const addWishList = (id) => {
		let wishList = [];
		//!get the shopping cart from local storage
		const storedCart = localStorage.getItem('Wishlist');
		if (storedCart) {
			wishList = JSON.parse(storedCart);
		}
		if (wishList) {
			if (wishList.includes(id)) {
				const new_wishList = wishList.filter((item) => item !== id);
				wishList = new_wishList;
			} else {
				wishList = [...wishList, id];
			}
		} else {
			wishList.push(id);
		}
		localStorage.setItem('Wishlist', JSON.stringify(wishList));
		setRefresh(!refresh);
	};
	const cartWishListInfo = {wishListItems, addWishList};
	return (
		<CartWishListContext.Provider value={cartWishListInfo}>{children}</CartWishListContext.Provider>
	);
};

export default CartWishListProvider;
