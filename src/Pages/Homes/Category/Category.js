import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {BsArrowRight} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import './Category.css';
const Category = () => {
	const {data: cateGories} = useQuery({
		queryKey: ['category'],
		queryFn: async () => {
			const res = await fetch('https://eshopspots-server.vercel.app/category');
			const data = await res.json();
			return data.data;
		},
	});

	return (
		<div className="my-24">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{cateGories?.map((category) => (
					<Link
						to={`/shop/category/${category?.name.toLowerCase()}`}
						className="category-item"
						key={category?._id}
					>
						<div className="banner-animation relative">
							<img src={category?.img} alt="" />
							<div className="absolute top-3 left-0 w-full">
								<div className="flex justify-between items-center mx-4">
									<h3 className="text-2xl font-bold uppercase">{category?.name}</h3>
									<button className="w-12 h-12 bg-white rounded-full">
										<BsArrowRight className="m-auto" />
									</button>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Category;
