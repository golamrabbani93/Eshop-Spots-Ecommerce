import {useEffect, useState} from 'react';

const UseCartTotal = (items) => {
	const [total, setTotal] = useState(0);
	useEffect(() => {
		const totalCartPrice = items?.reduce((total, product) => {
			if (product?.discount_price > 0) {
				// !if discount_price found
				total += product.discount_price * product.quantity;
				return total;
			} else {
				// !if discount_price not found or 0
				total += product.main_price * product.quantity;
				return total;
			}
		}, 0);
		setTotal(totalCartPrice);
	}, [items]);
	return total;
};

export default UseCartTotal;
