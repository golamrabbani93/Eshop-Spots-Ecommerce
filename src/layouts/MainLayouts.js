import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import {Outlet} from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayouts = () => {
	return (
		<div>
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default MainLayouts;
