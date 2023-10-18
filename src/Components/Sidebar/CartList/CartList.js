import React, {useContext} from 'react';
import {RxCross1} from 'react-icons/rx';
import {Link} from 'react-router-dom';
import {CartWishListContext} from '../../../contexts/CartWishListProvider';
import SingleCartList from './SingleCartList/SingleCartList';
import UseCartTotal from '../../../hooks/UseCartTotal';
const CartList = ({cartList, setCartList}) => {
	// !get cartList itmes from local storage
	const {cartListItems} = useContext(CartWishListContext);
	// !get Total products Price
	const totalProductsPrice = UseCartTotal(cartListItems);
	return (
		<div
			id="offcanvas"
			className={` ${
				cartList ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'
			} offcanvas-rightside fixed z-10 top-0 right-0 w-[320px]   md:w-[400px] h-[100%] px-5 pt-5 mb-10  bg-white transition duration-1000 overflow-auto overflow-x-hidden`}
		>
			<div className="self-stretch h-10 pl-[275px] md:pl-[324.26px] pr-[5.74px] pt-[5.80px] pb-[4.20px] flex-col justify-start items-end flex">
				<div
					onClick={() => setCartList(!cartList)}
					className="hover:text-red-600 transition cursor-pointer text-center text-black text-3xl font-normal  leading-[30px]"
				>
					<RxCross1 />
				</div>
			</div>
			<div className="self-stretch flex-col justify-start items-start gap-10 flex">
				<div className="self-stretch h-[25.20px]  flex-col justify-start items-start flex">
					<h2 className="text-xl font-bold uppercase text-primary">Shopping Cart</h2>
				</div>

				{/* !single Cart List */}
				{cartListItems?.length > 0 ? (
					cartListItems?.map((cartList) => (
						<SingleCartList key={cartList._id} cartList={cartList}></SingleCartList>
					))
				) : (
					<h2 className="font-bold uppercase text-primary">No Items Found</h2>
				)}
			</div>

			{cartListItems?.length > 0 && (
				<div className="flex justify-between mx-2 mt-6">
					<h2 className="uppercase text-2xl text-primary font-bold">Subtotal:</h2>
					<h2 className="uppercase text-2xl text-primary font-bold">${totalProductsPrice}</h2>
				</div>
			)}

			{cartListItems?.length > 0 ? (
				// ! if  cart List items found then show this button
				<>
					<Link className={`mt-10 w-[100%] btn btn-primary text-white self-stretch h-[35.60px]`}>
						View cart
					</Link>
					<Link
						className={`mt-3 mb-10 w-[100%] btn btn-primary text-white self-stretch h-[35.60px]`}
					>
						Checkout
					</Link>
				</>
			) : (
				// ! if No cart List items found then show this button
				<Link
					onClick={() => setCartList(!cartList)}
					className={`mt-10 mb-10 w-[100%] btn btn-primary text-white self-stretch h-[35.60px]`}
					to={'/shop'}
				>
					Visit Shop
				</Link>
			)}
		</div>
	);
};

export default CartList;
