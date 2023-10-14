import React from 'react';
import {Link} from 'react-router-dom';

const Banner = () => {
	return (
		<div className="banner z-[1]">
			<div className="banner__image relative ">
				<img
					className="h-[100vh] w-full object-cover"
					src="https://i.ibb.co/4KMwTk9/hero-slider-1.jpg"
					alt=""
				/>
			</div>
			<div className="container mx-auto">
				<div className="banner__info absolute top-1/2 translate-y-[-50%] pl-10 lg:pl-20">
					<div class="relative ">
						<h2 class="sm:text-xl uppercase">New collection</h2>

						<h2 class="text-3xl sm:text-[63px] font-semibold sm:leading-[70px]">
							Best Of NeoCon
							<br />
							Gold Award
						</h2>
						<Link className="mt-5 btn btn-secondary btn-outline sm:w-52">Shop Now</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
