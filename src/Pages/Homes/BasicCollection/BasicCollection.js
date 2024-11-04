import React from 'react';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
const BasicCollection = () => {
	return (
		<div className="container mx-auto mt-12">
			<div className="banner-animation relative my-3 md:w-[800px] mx-auto">
				<div className="image">
					<img src="https://i.ibb.co/jyDrzWs/banner-style-3-img-1.jpg" alt="Basic" />
				</div>
				<div
					className=" ml-4 md:ml-0 z-[1] content md:w-[425px] absolute top-1/2 translate-y-[-50%]
				 md:right-16"
				>
					<h2 className="text-3xl md:text-5xl mb-3 text-primary">
						Modern Furniture Basic Collection
					</h2>
					<h4 className="md:text-base text-[#777777]">WE DESIGN YOUR HOME MORE BEAUTIFUL</h4>
					<Link
						to={`/shop`}
						className="mt-4 md:mt-9 btn hover:bg-transparent hover:text-primary hover:border-rose-500 text-xs sm:text-sm btn-outline w-3/4 sm:w-1/2"
					>
						discover now <BsArrowRight />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BasicCollection;
