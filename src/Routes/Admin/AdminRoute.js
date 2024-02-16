import {useContext} from 'react';
import {AuthContext} from '../../contexts/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom';
import Loader from '../../Pages/Shared/Loader/Loader';
import UseIsAdmin from '../../hooks/UseIsAdmin';

const AdminRoute = ({children}) => {
	const {user, loader} = useContext(AuthContext);
	const {userRole, userLoader} = UseIsAdmin(user?.email);
	const location = useLocation();
	if (loader || userLoader) {
		return <Loader></Loader>;
	}

	if (user && user?.uid && userRole === 'admin') {
		return children;
	}

	return <Navigate to="/login" state={{from: location}} replace />;
};

export default AdminRoute;
