import React from 'react';
import MultiRangeSlider from 'multi-range-slider-react';
import {Link} from 'react-router-dom';
const FilterByPrize = ({minValue, maxValue, handleInputPrize}) => {
	return (
		<div className="mt-10">
			<h2 className="text-xl uppercase font-bold">FILTER BY PRICE</h2>
			<div className="relative">
				<div className="divider mt-5"></div>
				<div className="w-14 h-[0.125rem] bg-primary-focus absolute top-[7px]"></div>
			</div>
			<div>
				<MultiRangeSlider
					min={0}
					max={1500}
					step={5}
					minValue={minValue}
					maxValue={maxValue}
					onChange={(e) => {
						handleInputPrize(e);
					}}
					barLeftColor="white"
					barInnerColor="#ff365d"
					barRightColor="white"
					thumbLeftColor="white"
					thumbRightColor="white"
					style={{border: 'none', boxShadow: 'none'}}
					label={false}
					ruler={false}
				/>
				<div className="flex justify-between">
					<h2 className="text-neutral-500 text-sm font-normal font-['Open Sans'] leading-normal">
						Price range:
					</h2>
					<h2 className="text-right text-black text-sm font-normal font-['Open Sans'] leading-normal">
						${minValue} - ${maxValue}
					</h2>
				</div>
			</div>
			{/* // !filter by category */}
			<div>
				<h2 className="text-xl uppercase font-bold mt-10">FILTER BY PRICE</h2>
				<div className="relative">
					<div className="divider mt-5"></div>
					<div className="w-14 h-[0.125rem] bg-primary-focus absolute top-[7px]"></div>
				</div>
				<div className="w-[270px] h-[149.50px] relative">
					<div className="px-[15.67px] py-[7.67px] left-[5px] top-0 absolute rounded-[30px] border border-gray-200 justify-start items-start inline-flex">
						<div className="text-neutral-500 text-sm font-semibold font-['Open Sans'] leading-normal">
							asian
						</div>
					</div>
					<div className="px-[15.67px] py-[7.67px] left-[80.84px] top-0 absolute rounded-[30px] border border-gray-200 justify-start items-start inline-flex">
						<div className="text-neutral-500 text-sm font-semibold font-['Open Sans'] leading-normal">
							brown
						</div>
					</div>
					<div className="px-[15.67px] py-[7.67px] left-[164.43px] top-0 absolute rounded-[30px] border border-gray-200 justify-start items-start inline-flex">
						<div className="text-neutral-500 text-sm font-semibold font-['Open Sans'] leading-normal">
							euro
						</div>
					</div>
					<div className="px-[15.67px] py-[7.67px] left-[5px] top-[49.83px] absolute rounded-[30px] border border-gray-200 justify-start items-start inline-flex">
						<div className="text-neutral-500 text-sm font-semibold font-['Open Sans'] leading-normal">
							fashion
						</div>
					</div>
					<div className="px-[15.67px] py-[7.67px] left-[95.22px] top-[49.83px] absolute rounded-[30px] border border-gray-200 justify-start items-start inline-flex">
						<div className="text-neutral-500 text-sm font-semibold font-['Open Sans'] leading-normal">
							hat
						</div>
					</div>
					<div className="px-[15.67px] py-[7.67px] left-[157.75px] top-[49.83px] absolute rounded-[30px] border border-gray-200 justify-start items-start inline-flex">
						<div className="text-neutral-500 text-sm font-semibold font-['Open Sans'] leading-normal">
							t-shirt
						</div>
					</div>
					<div className="px-[15.67px] py-[7.67px] left-[5px] top-[99.67px] absolute rounded-[30px] border border-gray-200 justify-start items-start inline-flex">
						<div className="text-neutral-500 text-sm font-semibold font-['Open Sans'] leading-normal">
							teen
						</div>
					</div>
					<div className="px-[15.67px] py-[7.67px] left-[75.55px] top-[99.67px] absolute rounded-[30px] border border-gray-200 justify-start items-start inline-flex">
						<div className="text-neutral-500 text-sm font-semibold font-['Open Sans'] leading-normal">
							travel
						</div>
					</div>
					<div className="px-[15.67px] py-[7.67px] left-[154.68px] top-[99.67px] absolute rounded-[30px] border border-gray-200 justify-start items-start inline-flex">
						<div className="text-neutral-500 text-sm font-semibold font-['Open Sans'] leading-normal">
							white
						</div>
					</div>
				</div>
			</div>
			{/* //* Side banner  */}
			<Link to={'/shop'} className="mt-10">
				<img
					alt=""
					className="w-[270px] h-[369.29px] relative"
					src="https://i.ibb.co/X7TKQXR/side-banner-jpg.png"
				/>
			</Link>
		</div>
	);
};

export default FilterByPrize;
