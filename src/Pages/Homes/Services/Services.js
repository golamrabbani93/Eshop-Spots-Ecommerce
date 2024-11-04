import React from 'react';

const Services = () => {
	const services__info = [
		{
			img: 'https://i.ibb.co/KmqDgdB/service-promo-1.png',
			title: 'FREE SHIPPING',
			description: 'Get 10% cash back, free shipping, free returns, and 1000+ top retailers!',
		},
		{
			img: 'https://i.ibb.co/wYrRZtQ/service-promo-2.png',
			title: '30 DAYS MONEY BACK',
			description: '100% satisfaction guaranteed, or get your money back within 30 days!',
		},
		{
			img: 'https://i.ibb.co/YQTwbnB/service-promo-3.png',
			title: 'SAFE PAYMENT',
			description: 'Pay with the world’s most popular and secure payment methods.',
		},
		{
			img: 'https://i.ibb.co/Synm4rn/service-promo-4.png',
			title: 'LOYALTY CUSTOMER',
			description: 'Card for the other 30% of their purchases at a rate of 1% cash back.',
		},
	];
	return (
		<section className="container m-auto mt-14">
			<div className="mx-5 md:mx-16">
				<h2 className="text-2xl font-bold uppercase text-primary">Why choose us</h2>
			</div>
			<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center gap-3 mx-5">
				{services__info.map((service, index) => {
					return (
						<div key={index} className="card w-[310px] md:w-[340px]">
							<figure className="px-10 pt-10">
								<img src={service.img} alt={service.title} className="rounded-xl w-24" />
							</figure>
							<div className="card-body items-center text-center">
								<h2 className="card-title">{service.title}</h2>
								<p>{service.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
