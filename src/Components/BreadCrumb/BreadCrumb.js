import React from 'react';
import {Link} from 'react-router-dom';
import {GrLinkNext} from 'react-icons/gr';

const BreadCrumb = ({items}) => {
	// !Get only true value from items array
	const filteredItems = items.filter(Boolean);
	const breadHeadName = filteredItems.slice(-1)[0].name;
	return (
		<div className="text-center bg-secondary w-full h-96 flex justify-center items-center flex-col">
			<div>
				<h2 className="text-5xl uppercase">{breadHeadName}</h2>
			</div>
			<div className="flex justify-items-center mt-3">
				{filteredItems.map((item, index) => (
					<Link
						className={`hover:text-primary transition duration-500 capitalize ${
							index === filteredItems.length - 1 && 'text-[#6C757D] btn-disabled'
						}`}
						key={index}
						to={item.path}
					>
						<span className={`flex items-center`}>
							{item.name}
							{index !== filteredItems.length - 1 && <GrLinkNext className="mx-2" />}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default BreadCrumb;
