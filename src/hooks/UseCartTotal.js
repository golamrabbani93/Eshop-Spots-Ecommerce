import {useEffect, useState} from 'react';

const UseCartTotal = (items) => {
	const [total, setTotal] = useState(0);
	useEffect(() => {
		const totalCartPrice = items?.reduce((total, product) => {
			total += product.discount_price || product.main_price * product.quantity;
			return total;
		}, 0);
		setTotal(totalCartPrice);
	}, [items]);
	return total;
};

export default UseCartTotal;
