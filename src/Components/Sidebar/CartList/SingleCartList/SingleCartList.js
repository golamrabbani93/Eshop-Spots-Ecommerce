import React, {useContext} from 'react';
import {FaTrash} from 'react-icons/fa6';
import {CartWishListContext} from '../../../../contexts/CartWishListProvider';
const SingleCartList = ({cartList}) => {
	const {deleteCartlist} = useContext(CartWishListContext);
	const {_id, img, name, discount_price, main_price} = cartList;
	const handleDeleteCartList = (id) => {
		deleteCartlist(id);
	};
	return (
		<div className="self-stretch flex-col justify-start items-start gap-5 flex">
			<div className="self-stretch justify-between items-center inline-flex">
				<div className="justify-start items-center flex">
					<div className="w-[110px] pr-5 flex-col justify-start items-start inline-flex">
						<div className="self-stretch h-[103.25px] p-[0.80px] border border-gray-200 flex-col justify-center items-start flex">
							<img alt="" className="w-[88.40px] h-[101.65px] relative" src={img} />
						</div>
					</div>
					<div className="flex-col justify-start items-start inline-flex">
						<div className="self-stretch h-[24.50px] flex-col justify-start items-start flex">
							<h2 className="text-neutral-500 text-sm font-bold  leading-normal">{name}</h2>
						</div>
						<div className="self-stretch h-[24.50px] pr-[34.10px] flex-col justify-start items-start flex">
							<h3 className="text-neutral-500 text-sm font-normal  leading-normal">
								1 x ${discount_price || main_price}
							</h3>
						</div>
					</div>
				</div>
				<div className="w-[11px] pt-[5.60px] pb-[4.90px] flex-col justify-start items-end inline-flex">
					<button
						onClick={() => handleDeleteCartList(_id)}
						className="text-right text-red-500 hover:text-red-600 cursor-pointer"
					>
						<FaTrash />
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleCartList;
