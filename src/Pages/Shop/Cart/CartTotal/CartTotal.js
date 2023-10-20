import React from 'react';

const CartTotal = ({cart}) => {
	console.log('🚀🚀: CartTotal -> cart', cart);
	return (
		<div className="cart-total grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 mx-40">
			<div className="cupon border border-spacing-1 h-min">
				<h2 className="bg-black text-white p-4 text-xl font-bold">COUPON</h2>
				<div className="ml-5 mt-5">
					<h4>Enter your coupon code if you have one.</h4>
					<div className="my-5">
						<input
							type="text"
							placeholder="Cuppon Code"
							className="p-3  outline-[#E5E7EB] rounded text-black placeholder:text-black"
						/>
						<button className="btn btn-primary btn-outline ml-5">Apply Cuppon</button>
					</div>
				</div>
			</div>
			<div className="cupon border border-spacing-1 ">
				<h2 className="bg-black text-white p-4 text-xl font-bold">CART TOTALS</h2>
				<div className="mx-5 my-5 font-bold">
					<div>
						<div className="flex justify-between mb-2">
							<h2 className="uppercase">Subtotal</h2>
							<h2>$99</h2>
						</div>
						<div className="flex justify-between mb-2">
							<h2 className="uppercase">Shipping</h2>
							<h2>$5</h2>
						</div>
						<div className="flex justify-between mb-2">
							<h2 className="uppercase">Tax</h2>
							<h2>0</h2>
						</div>
					</div>
					<div className="divider"></div>
					<div>
						<div className="flex justify-between mb-2">
							<h2 className="uppercase">Subtotal</h2>
							<h2>$99</h2>
						</div>
						<div className="text-right">
							<button className="btn btn-primary btn-outline mt-5 text-right">
								Proceed to Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
