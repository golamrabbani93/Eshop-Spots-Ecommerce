import React from 'react';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';

const AdsProduct = () => {
	const adsProduct = [
		{
			title: 'Kitchen utensils',
			img: 'https://i.ibb.co/hXGrsDR/banner-style-2-img-1.jpg',
		},
		{
			title: 'Sofas and Armchairs',
			img: 'https://i.ibb.co/XJQXW1L/banner-style-2-img-2.jpg',
		},
		{
			title: 'Chair & Bar stools',
			img: 'https://i.ibb.co/qpJJ988/banner-style-2-img-3.jpg',
		},
		{
			title: 'Interior lighting',
			img: 'https://i.ibb.co/1QzN2Wf/banner-style-2-img-4.jpg',
		},
	];
	return (
		<section className="mt-12 mb-14">
			<div className="grid lg:grid-cols-2 gap-5">
				<div>
					<div className="banner-animation relative mx-3  my-3">
						<div className="image ">
							<img src="https://i.ibb.co/4PXRYX7/banner-style-1-img-1.jpg" alt="" />
						</div>
						<div className="z-[1] content absolute top-1/2 translate-y-[-50%] w-[70%] sm:w-2/4 right-[10px] sm:right-[30px]">
							<h4 className="text-[23px] sm:text-[34px] leading-5 sm:leading-10 font-bold mb-3 text-primary">
								Mini rechargeable Table Lamp - E216
							</h4>
							<h5 className="mb-3 sm:mb-6 text-[#777] uppercase">We design your home</h5>
							<Link
								to={`/shop`}
								className="btn hover:bg-transparent hover:text-primary hover:border-rose-500 text-xs sm:text-sm btn-outline w-3/4"
							>
								discover now <BsArrowRight />
							</Link>
						</div>
					</div>
				</div>
				<div>
					<div className="grid lg:grid-cols-2">
						{adsProduct.map((item, index) => (
							<div key={index} className="banner-animation relative mx-3 my-3">
								<div className="image ">
									<img src={item.img} alt="" />
								</div>
								<div className=" z-[1] content absolute top-1/2 translate-y-[-50%] w-[70%] sm:w-2/4 right-[10px] sm:right-[20px]">
									<h4 className="text-primary sm:text-3xl leading-5 sm:leading-10 font-bold mb-3">
										{item.title}
									</h4>
									<Link
										to={`/shop`}
										className="ml-2 font-bold hover:text-primary transition duration-300 ease-in-out"
									>
										Shop Now
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AdsProduct;
