import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom';
import Loader from '../../Pages/Shared/Loader/Loader';
import toast from 'react-hot-toast';

const PrivateRoutes = ({children}) => {
	const {user, loader} = useContext(AuthContext);
	const location = useLocation();
	if (loader) {
		return <Loader></Loader>;
	}

	if (user && user?.uid) {
		return children;
	}

	return (
		toast.error('Please Login First'), (<Navigate to="/login" state={{from: location}} replace />)
	);
};

export default PrivateRoutes;
