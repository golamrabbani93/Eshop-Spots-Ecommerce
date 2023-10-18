import React, {createContext, useEffect, useState} from 'react';

export const CartWishListContext = createContext();

const CartWishListProvider = ({children}) => {
	const [refresh, setRefresh] = useState(false);
	const [wishListItems, setWishListItems] = useState([]);
	const [cartListItems, setCartListItems] = useState([]);

	// !get wishlist itmes from local storage
	useEffect(() => {
		const wishList = localStorage.getItem('Wishlist');
		const cartList = localStorage.getItem('Cart');
		setCartListItems(JSON.parse(cartList));
		setWishListItems(JSON.parse(wishList));
	}, [refresh]);
	// !Add and Delete Wishlist id to local storage
	const addDeleteWishList = (id) => {
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

	// ! cart data to local storage
	const addCart = (id) => {
		let cart = [];

		//get the shopping cart from local storage
		const storedCart = localStorage.getItem('Cart');
		if (storedCart) {
			cart = JSON.parse(storedCart);
		}

		const existingProduct = cart.find((item) => item.id === id);
		if (existingProduct) {
			existingProduct.quantity = existingProduct.quantity + 1;
		} else {
			cart = [...cart, {id: id, quantity: 1}];
		}

		localStorage.setItem('Cart', JSON.stringify(cart));
		setRefresh(!refresh);
	};
	const cartWishListInfo = {wishListItems, addDeleteWishList, addCart, cartListItems};
	return (
		<CartWishListContext.Provider value={cartWishListInfo}>{children}</CartWishListContext.Provider>
	);
};

export default CartWishListProvider;
