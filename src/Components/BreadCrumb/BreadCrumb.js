import React from 'react';
import {Link} from 'react-router-dom';
import {GrLinkNext} from 'react-icons/gr';

const BreadCrumb = ({items}) => {
	const breadHeadName = items.slice(-1)[0].name;
	return (
		<div className="text-center bg-secondary w-full h-96 flex justify-center items-center flex-col">
			<div>
				<h2 className="text-5xl">{breadHeadName}</h2>
			</div>
			<div className="flex justify-items-center mt-3">
				{items.map((item, index) => (
					<Link
						className={`hover:text-primary transition duration-500 ${
							index === items.length - 1 && 'text-[#6C757D] btn-disabled'
						}`}
						key={index}
						to={item.path}
					>
						<span className={`flex items-center`}>
							{item.name}
							{index !== items.length - 1 && <GrLinkNext className="mx-2" />}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default BreadCrumb;
