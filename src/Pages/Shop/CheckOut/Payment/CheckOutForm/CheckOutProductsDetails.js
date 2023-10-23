import React from 'react';
import UseCartTotal from '../../../../../hooks/UseCartTotal';
import OrderDetails from '../../OrderDetails/OrderDetails';

const CheckOutProductsDetails = ({cartListItems}) => {
	// !get Total Products Price
	const subTotal = UseCartTotal(cartListItems);

	let total = 0;
	const shipping = 5;
	// !calculate total Products price +shipping
	if (subTotal) {
		total += subTotal + shipping;
	}
	return (
		<div className="order-details">
			<div className="cupon">
				<h2 className="bg-black text-white p-4 text-xl font-bold uppercase">Order details</h2>
				<OrderDetails cartLists={cartListItems}></OrderDetails>

				<div className="cart-subtotal">
					<div className="mx-5 my-5 font-bold">
						<div>
							<div className="flex justify-between mb-2 ">
								<h2 className="uppercase">Subtotal</h2>
								<h2>${subTotal}</h2>
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
								<h2 className="uppercase">Total</h2>
								<h2>${total}</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckOutProductsDetails;
