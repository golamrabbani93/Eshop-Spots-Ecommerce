import React from 'react';
import MultiRangeSlider from 'multi-range-slider-react';
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
					<h2 class="text-neutral-500 text-sm font-normal font-['Open Sans'] leading-normal">
						Price range:
					</h2>
					<h2 class="text-right text-black text-sm font-normal font-['Open Sans'] leading-normal">
						${minValue} - ${maxValue}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default FilterByPrize;
