import React, {useState} from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import AdsProduct from '../AdsProduct/AdsProduct';
import NewArrivals from '../NewArrivals/NewArrivals';
import BasicCollection from '../BasicCollection/BasicCollection';
import BestSellers from '../BestSellers/BestSellers';
import CartSuccessModal from '../../Shared/CartSuccessModal/CartSuccessModal';
import Category from '../Category/Category';
import UseScrollTop from '../../../hooks/UseScrollTop';

const Home = () => {
	// !Scroll to top
	UseScrollTop();
	// !Set Cart data
	const [modalData, setModalData] = useState({});

	// !set Cart modal data
	const cartModal = (data) => {
		setModalData(data);
	};
	return (
		<div className="mt-[70px]">
			<Banner></Banner>
			<Services></Services>
			<AdsProduct></AdsProduct>
			<NewArrivals cartModal={cartModal}></NewArrivals>
			<BasicCollection></BasicCollection>
			<BestSellers cartModal={cartModal}></BestSellers>
			<Category></Category>
			<CartSuccessModal modalData={modalData} cartModal={cartModal}></CartSuccessModal>
		</div>
	);
};

export default Home;
