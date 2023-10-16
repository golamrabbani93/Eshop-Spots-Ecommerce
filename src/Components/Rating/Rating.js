import React from 'react';

const Rating = ({rating}) => {
	return (
		<div className="rating">
			{[1, 2, 3, 4, 5].map((r) => (
				<input
					key={r}
					disabled={true}
					type="radio"
					name={`rating-${r}`}
					className={`cursor-default mask mask-star w-[15px] mx-[1px]  ${
						r <= rating && 'bg-primary'
					}`}
				/>
			))}
		</div>
	);
};

export default Rating;
