import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import AdsProduct from '../AdsProduct/AdsProduct';
import NewArrivals from '../NewArrivals/NewArrivals';

const Home = () => {
	return (
		<div className="mt-[70px]">
			<Banner></Banner>
			<Services></Services>
			<AdsProduct></AdsProduct>
			<NewArrivals></NewArrivals>
		</div>
	);
};

export default Home;
