import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {Link} from 'react-router-dom';

const Categories = ({categoryName}) => {
	// !load cateGories
	const {data: cateGories} = useQuery({
		queryKey: ['category'],
		queryFn: async () => {
			const res = await fetch('https://eshopspots-server.vercel.app/category');
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
					<li className="my-2">
						<Link
							className={`text-xl font-bold hover:text-primary transition duration-300 ${
								Object.keys(categoryName).length === 0 && 'text-primary'
							}`}
							to={`/shop`}
						>
							All
						</Link>
					</li>
					{cateGories?.map((category) => (
						<li key={category?._id} className="my-2">
							<Link
								className={`text-xl font-bold hover:text-primary transition duration-300 ${
									categoryName?.name?.toLowerCase() === category?.name?.toLowerCase() &&
									'text-primary'
								}`}
								to={`/shop/category/${category?.name.toLowerCase()}`}
								// onClick={() => active(category?.name)}
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
