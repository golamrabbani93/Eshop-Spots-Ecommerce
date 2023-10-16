import React from 'react';
import Slider from 'react-slick';
import SingleProduct from '../../../Components/SingleProduct/SingleProduct';

const NewArrivals = () => {
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
	// https://i.ibb.co/gZS1jGn/default-1.jpg
	// https://i.ibb.co/sVjd6zc/default-2.jpg
	// https://i.ibb.co/zrCky5T/default-3.jpg
	// https://i.ibb.co/PzJHCCY/default-4.jpg
	// https://i.ibb.co/PhdPCFx/default-5.jpg
	// https://i.ibb.co/Zd75VhC/default-6.jpg
	// https://i.ibb.co/Q9RfHPF/default-7.jpg
	// https://i.ibb.co/dfnFNrR/default-8.jpg
	// https://i.ibb.co/wcksQ9K/default-9.jpg
	// https://i.ibb.co/2Wq1T2r/default-10.jpg
	// https://i.ibb.co/zZmtnF2/default-11.jpg
	// https://i.ibb.co/vqr1x90/default-12.jpg
	const NewArrivalsData = [
		{
			img: 'https://i.ibb.co/gZS1jGn/default-1.jpg',
			name: 'ALIQUAM LOBORTIS',
			rating: 4,
			main_price: 75,
			discount_price: 0,
		},
		{
			img: 'https://i.ibb.co/sVjd6zc/default-2.jpg',
			name: 'Condimentum Posuere',
			rating: 4,
			main_price: 89,
			discount_price: 70,
		},
		{
			img: 'https://i.ibb.co/zrCky5T/default-3.jpg',
			name: 'Cras neque metus',
			rating: 4,
			main_price: 70,
			discount_price: 60,
		},
		{
			img: 'https://i.ibb.co/PzJHCCY/default-4.jpg',
			name: 'Donec eu libero ac',
			rating: 4,
			main_price: 74,
			discount_price: 0,
		},
		{
			img: 'https://i.ibb.co/PhdPCFx/default-5.jpg',
			name: 'Epicuri per lobortis',
			rating: 4,
			main_price: 68,
			discount_price: 0,
		},
		{
			img: 'https://i.ibb.co/Zd75VhC/default-6.jpg',
			name: 'Kaoreet lobortis sagit',
			rating: 5,
			main_price: 95,
			discount_price: 0,
		},
	];
	return (
		<section className="container mx-auto mb-14">
			<div className="mx-5 md:mx-16">
				<div className="">
					<h2 className="text-2xl font-bold uppercase">The New Arrivals</h2>
				</div>

				<Slider {...settings}>
					{NewArrivalsData.map((item, index) => {
						return <SingleProduct key={index} data={item} index={index}></SingleProduct>;
					})}
				</Slider>
			</div>
		</section>
	);
};

export default NewArrivals;
