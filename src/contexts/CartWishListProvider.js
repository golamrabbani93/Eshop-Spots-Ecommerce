import React, {createContext, useEffect, useState} from 'react';

export const CartWishListContext = createContext();

const CartWishListProvider = ({children}) => {
	// !use for useeffect refresh
	const [refresh, setRefresh] = useState(false);
	// !use Loading for website Loader
	const [loading, setLoading] = useState(true);
	// !store and set wishlist and cart list
	const [wishListItems, setWishListItems] = useState([]);
	const [cartListItems, setCartListItems] = useState([]);

	// !get wishlist itmes from local storage and set to state
	useEffect(() => {
		const wishList = localStorage.getItem('Wishlist');
		const cartList = localStorage.getItem('Cart');
		setCartListItems(JSON.parse(cartList));
		setWishListItems(JSON.parse(wishList));
		setLoading(false);
	}, [refresh]);
	// !Add and Delete Wishlist id to local storage
	const addDeleteWishList = (id) => {
		let wishList = [];
		//!get the shopping cart from local storage
		const storedCart = localStorage.getItem('Wishlist');
		if (storedCart) {
			wishList = JSON.parse(storedCart);
		}
		// !when first time click add id and second time click delete this id
		if (wishList.includes(id)) {
			const new_wishList = wishList.filter((item) => item !== id);
			wishList = new_wishList;
		} else {
			wishList = [...wishList, id];
		}

		localStorage.setItem('Wishlist', JSON.stringify(wishList));
		setRefresh(!refresh);
	};

	// ! cart data to local storage
	const addCart = (data) => {
		let cart = [];

		//!get the cart from local storage
		const storedCart = localStorage.getItem('Cart');
		if (storedCart) {
			cart = JSON.parse(storedCart);
		}
		const existingProduct = cart.find((item) => item._id === data._id);
		if (existingProduct) {
			// !if product already exist then increase quantity
			existingProduct.quantity = existingProduct.quantity + 1;
		} else {
			// !if product not exist then add product
			cart = [...cart, data];
		}

		localStorage.setItem('Cart', JSON.stringify(cart));
		setRefresh(!refresh);
	};
	// !add only product Quantity with Product id
	const handleProductQuantity = (_id, quantity) => {
		let cart = [];

		//!get the cart from local storage
		const storedCart = localStorage.getItem('Cart');
		if (storedCart) {
			cart = JSON.parse(storedCart);
		}
		const existingProduct = cart.find((item) => item._id === _id);
		if (existingProduct) {
			existingProduct.quantity = parseInt(quantity);
		}

		localStorage.setItem('Cart', JSON.stringify(cart));
		setRefresh(!refresh);
	};

	// !detete cart list with id
	const deleteCartlist = (id) => {
		let cart = [];
		//!get the  cart from local storage
		const storedCart = localStorage.getItem('Cart');
		if (storedCart) {
			cart = JSON.parse(storedCart);
		}
		// !filter cart list with id and
		const newCart = cart.filter((item) => item._id !== id);
		localStorage.setItem('Cart', JSON.stringify(newCart));
		setRefresh(!refresh);
	};
	const cartWishListInfo = {
		loading,
		wishListItems,
		addDeleteWishList,
		addCart,
		handleProductQuantity,
		cartListItems,
		deleteCartlist,
	};
	return (
		<CartWishListContext.Provider value={cartWishListInfo}>{children}</CartWishListContext.Provider>
	);
};

export default CartWishListProvider;
