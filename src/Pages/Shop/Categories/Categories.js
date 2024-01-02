import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {Link} from 'react-router-dom';

const Categories = ({CateGories}) => {
	// !load cateGories
	const {data: cateGories} = useQuery({
		queryKey: ['category'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/category');
			const data = await res.json();
			return data.data;
		},
	});
	return (
		<div>
			<h2 className="text-xl uppercase font-bold">Categories</h2>
			<div className="divider mt-5"></div>

			<div>
				<ul>
					{cateGories?.map((category) => (
						<li key={category?._id} className="my-2">
							<Link
								className="text-xl font-bold hover:text-primary transition duration-300"
								to={`/shop/category/${category?.name.toLowerCase()}`}
							>
								{category?.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Categories;
