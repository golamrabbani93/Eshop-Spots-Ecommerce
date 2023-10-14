import React from 'react';
import {RxCross1} from 'react-icons/rx';
import {FaTrash} from 'react-icons/fa6';
import {Link} from 'react-router-dom';
const WishList = ({wishlist, setWishlist}) => {
	return (
		<div
			id="offcanvas"
			className={` ${
				wishlist ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'
			} offcanvas-rightside fixed z-10 top-0 right-0 w-[320px]   md:w-[400px] h-[100%] px-5 pt-5 mb-10  bg-white transition duration-1000 overflow-auto overflow-x-hidden`}
		>
			<div
				onClick={() => setWishlist(!wishlist)}
				className="self-stretch h-10 pl-[275px] md:pl-[324.26px] pr-[5.74px] pt-[5.80px] pb-[4.20px] flex-col justify-start items-end flex"
			>
				<div className="hover:text-red-600 transition cursor-pointer text-center text-black text-3xl font-normal  leading-[30px]">
					<RxCross1 />
				</div>
			</div>
			<div className="self-stretch flex-col justify-start items-start gap-10 flex">
				<div className="self-stretch h-[25.20px] pr-[284px] flex-col justify-start items-start flex">
					<div className="text-xl font-bold uppercase text-secondary">Wishlist</div>
				</div>
				<div className="self-stretch flex-col justify-start items-start gap-5 flex">
					<div className="self-stretch justify-between items-center inline-flex">
						<div className="justify-start items-center flex">
							<div className="w-[110px] pr-5 flex-col justify-start items-start inline-flex">
								<div className="self-stretch h-[103.25px] p-[0.80px] border border-gray-200 flex-col justify-center items-start flex">
									<img
										alt=""
										className="w-[88.40px] h-[101.65px] relative"
										src="https://via.placeholder.com/88x102"
									/>
								</div>
							</div>
							<div className="flex-col justify-start items-start inline-flex">
								<div className="self-stretch h-[24.50px] flex-col justify-start items-start flex">
									<div className="text-neutral-500 text-sm font-bold font-['Open Sans'] leading-normal">
										Shock Absorber
									</div>
								</div>
								<div className="self-stretch h-[24.50px] pr-[34.10px] flex-col justify-start items-start flex">
									<div className="text-neutral-500 text-sm font-normal font-['Open Sans'] leading-normal">
										1 x $350.00
									</div>
								</div>
							</div>
						</div>
						<div className="w-[11px] pt-[5.60px] pb-[4.90px] flex-col justify-start items-end inline-flex">
							<div className="text-right text-red-500 hover:text-red-600 cursor-pointer">
								<FaTrash />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link className="mt-10 w-[100%] btn btn-secondary text-white self-stretch h-[35.60px]  py-[6.80px]">
				View wishlist
			</Link>
		</div>
	);
};

export default WishList;
