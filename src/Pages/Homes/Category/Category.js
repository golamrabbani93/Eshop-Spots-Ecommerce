import {useQuery} from '@tanstack/react-query';
import React from 'react';

const Category = () => {
	const {data: cateGories} = useQuery({
		queryKey: ['category'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/category');
			const data = await res.json();
			return data.data;
		},
	});

	return (
		<div className="my-24">
			<div className="grid grid-cols-4">
				{cateGories?.slice(0, 4)?.map((category) => (
					// <div className="banner-animation">
					<div className="banner-animation relative cursor-pointer" key={category?._id}>
						<img src={category?.img} alt="" />
						<div className="absolute top-3 left-0 w-full">
							<div className="flex justify-between mx-4">
								<h3 className="text-2xl font-bold uppercase">{category?.name}</h3>
								<button className="">Link</button>
							</div>
						</div>
					</div>
					// </div>
				))}
			</div>
		</div>
	);
};

export default Category;
