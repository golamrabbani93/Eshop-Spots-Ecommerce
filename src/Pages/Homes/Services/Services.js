import React from 'react';

const Services = () => {
	const services__info = [
		{
			img: 'https://i.ibb.co/KmqDgdB/service-promo-1.png',
			title: 'FREE SHIPPING',
			description:
				'Get 10% cash back, free shipping, free returns, and more at 1000+ top retailers!',
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
		<section className="container m-auto">
			<div className="mt-14 flex flex-wrap justify-center">
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
