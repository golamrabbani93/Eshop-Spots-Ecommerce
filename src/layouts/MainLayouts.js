import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import {Outlet} from 'react-router-dom';

const MainLayouts = () => {
	return (
		<div>
			<Header></Header>
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayouts;
