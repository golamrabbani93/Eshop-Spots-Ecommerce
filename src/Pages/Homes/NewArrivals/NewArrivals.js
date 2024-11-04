import React from 'react';
import Slider from 'react-slick';
import SingleProduct from '../../../Components/SingleProduct/SingleProduct';
import {useQuery} from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';

const NewArrivals = ({cartModal}) => {
	const {data: NewArrivalsData = [], isLoading} = useQuery({
		queryKey: ['products', 'status'],
		queryFn: async () => {
			const res = await fetch('https://eshopspots-server.vercel.app/products?status=new');
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
					slidesToShow: 4,
					slidesToScroll: 1,
					initialSlide: 4,
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
		return <Loader></Loader>;
	}

	return (
		<section className="container mx-auto mb-14 overflow-hidden mt-10">
			<div className="mx-5 md:mx-16">
				<div className="">
					<h2 className="text-2xl font-bold uppercase text-primary">The New Arrivals</h2>
				</div>

				{NewArrivalsData.data?.length > 0 && (
					<Slider {...settings}>
						{NewArrivalsData.data?.map((item, index) => {
							return <SingleProduct key={index} data={item} cartModal={cartModal}></SingleProduct>;
						})}
					</Slider>
				)}
			</div>
		</section>
	);
};

export default NewArrivals;
