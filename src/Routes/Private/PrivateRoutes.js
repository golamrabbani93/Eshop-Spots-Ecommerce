import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom';
import Loader from '../../Pages/Shared/Loader/Loader';

const PrivateRoutes = ({children}) => {
	const {user, loader} = useContext(AuthContext);
	const location = useLocation();
	if (loader) {
		return <Loader></Loader>;
	}
	if (!user) {
		return <Navigate to="/login" state={{from: location}} replace />;
	}
	return children;
};

export default PrivateRoutes;
