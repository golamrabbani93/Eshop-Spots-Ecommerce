import React from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';

const Banner = () => {
	const settings = {
		dots: false,
		speed: 2000,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		pauseOnHover: false,
	};
	const banner__info = [
		{
			subTitle: 'New collection',
			title: 'Best Of NeoCon Gold Award',
			btn: 'Shop Now',
			img: 'https://i.ibb.co/4KMwTk9/hero-slider-1.jpg',
		},
		{
			subTitle: 'New collection',
			title: 'Luxy Chairs Design Award',
			btn: 'Shop Now',
			img: 'https://i.ibb.co/cvb8Cj5/hero-slider-2.jpg',
		},
		{
			subTitle: 'New collection',
			title: 'New Series of  Degital Watch ',
			btn: 'Shop Now',
			img: 'https://i.ibb.co/hM1WQ3b/hero-slider-3.jpg',
		},
		{
			subTitle: 'New collection',
			title: 'Best Of HiFi Loud Speaker',
			btn: 'Shop Now',
			img: 'https://i.ibb.co/kG8tq5f/hero-slider-4.jpg',
		},
	];
	return (
		<div className="banner z-[1]">
			<Slider {...settings}>
				{banner__info.map((banner, index) => {
					return (
						<div key={index} className={`banner-${index}`}>
							<div className="banner__image relative ">
								<img className="h-[70vh] w-full object-cover" src={banner.img} alt="" />
							</div>
							<div className="container mx-auto">
								<div className="banner__info w-[250px] sm:w-[320px] md:w-[580px] absolute top-1/2 translate-y-[-50%] pl-10 lg:pl-20">
									<div className="relative ">
										<h2 className="sm:text-xl uppercase">{banner.subTitle}</h2>

										<h2 className="text-3xl text-primary-focus sm:text-[63px] font-semibold sm:leading-[70px]">
											{banner.title}
										</h2>
										<Link to={`/shop`} className="mt-5 btn btn-primary btn-outline sm:w-52">
											Shop Now
										</Link>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default Banner;
