import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import {BsFillCartCheckFill} from 'react-icons/bs';
import {CartWishListContext} from '../../../contexts/CartWishListProvider';
import UseCartTotal from '../../../hooks/UseCartTotal';
const CartSuccessModal = ({modalData}) => {
	// !get cartlist item from local storage
	const {cartListItems} = useContext(CartWishListContext);
	// !get Total products Price
	const totalProductsPrice = UseCartTotal(cartListItems);
	return (
		<div>
			<input type="checkbox" id="success-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box w-11/12 max-w-5xl">
					<label htmlFor="success-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
						✕
					</label>
					<div className=" md:flex flex-wrap">
						<div className="product-details md:flex flex-wrap md:w-1/2">
							<img
								className="w-60 md:w-[135px] border border-spacing-1 mr-2"
								src={modalData?.img}
								alt=""
							/>
							<div className="ml-4">
								<h2 className="font-bold text-primary">{modalData?.name}</h2>
								<div className=" flex my-4 items-center">
									<BsFillCartCheckFill className="text-primary w-5 h-5"></BsFillCartCheckFill>
									<span className=" ml-2">Added To Your Cart Successfully</span>
								</div>
								<div>
									<Link
										to={`/shop/cart`}
										className="btn hover:bg-transparent hover:text-primary hover:border-rose-500 text-xs sm:text-sm btn-outline"
									>
										View Cart
										<BsArrowRight />
									</Link>
									<Link
										to={`/shop/checkout`}
										className="ml-2 mt-2 btn hover:bg-transparent hover:text-primary hover:border-rose-500 text-xs sm:text-sm btn-outline"
									>
										Checkout
										<BsArrowRight />
									</Link>
								</div>
							</div>
						</div>
						<div className="divider divider-vertical md:divider-horizontal"></div>
						<div className="cart-details ml-3">
							<h1 className="uppercase font-bold">
								There are total{' '}
								<span className="text-2xl text-primary font-extrabold">
									{cartListItems?.length}
								</span>{' '}
								items in your Cart
							</h1>
							<h1 className="uppercase my-5 font-bold">
								Total Price:{' '}
								<span className="text-2xl text-primary font-extrabold">${totalProductsPrice}</span>
							</h1>
							<Link
								to={`/shop`}
								className="ml-2 font-bold hover:text-primary transition duration-300 ease-in-out link"
							>
								CONTINUE SHOPPING
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartSuccessModal;
