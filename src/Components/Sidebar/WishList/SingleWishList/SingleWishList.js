import React, {useContext} from 'react';
import {FaTrash} from 'react-icons/fa6';
import {CartWishListContext} from '../../../../contexts/CartWishListProvider';

const SingleWishList = ({wishList}) => {
	const {addDeleteWishList} = useContext(CartWishListContext);
	const {_id, img, name, discount_price, main_price} = wishList;
	// !Delete wishlist item from local storage
	const handleDeleteWishList = (id) => {
		addDeleteWishList(id);
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
							<div className="text-neutral-500 text-sm font-bold font-['Open Sans'] leading-normal">
								{name}
							</div>
						</div>
						<div className="self-stretch h-[24.50px] pr-[34.10px] flex-col justify-start items-start flex">
							<div className="text-neutral-500 text-sm font-normal font-['Open Sans'] leading-normal">
								1 x ${discount_price || main_price}
							</div>
						</div>
					</div>
				</div>
				<div className="w-[11px] pt-[5.60px] pb-[4.90px] flex-col justify-start items-end inline-flex">
					<div
						onClick={() => handleDeleteWishList(_id)}
						className="text-right text-red-500 hover:text-red-600 cursor-pointer"
					>
						<FaTrash />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleWishList;
