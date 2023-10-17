import React from 'react';
import Slider from 'react-slick';
import SingleProduct from '../../../Components/SingleProduct/SingleProduct';
import {useQuery} from '@tanstack/react-query';

const NewArrivals = () => {
	const {data: NewArrivalsData = [], isLoading} = useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/products');
			const data = await res.json();
			return data;
		},
	});

	// !Slider Settings
	var settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		initialSlide: 0,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1301,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSlide: 3,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<section className="container mx-auto mb-14">
			<div className="mx-5 md:mx-16">
				<div className="">
					<h2 className="text-2xl font-bold uppercase">The New Arrivals</h2>
				</div>

				{NewArrivalsData.data.length > 0 && (
					<Slider {...settings}>
						{NewArrivalsData.data?.map((item, index) => {
							return <SingleProduct key={index} data={item} index={index}></SingleProduct>;
						})}
					</Slider>
				)}
			</div>
		</section>
	);
};

export default NewArrivals;
