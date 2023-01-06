import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { logged } from '../../redux/actions/index';
import { useEffect } from 'react';

function ProtectedRoutes() {
	const isLogged = useSelector((state) => state.isAuthenticated);
	const { isAuthenticated, user } = useAuth0();

	const dispatch = useDispatch();

	if (isAuthenticated) {
		dispatch(logged(user));
	}

	if (!isLogged) return <Navigate to='/login' />;

	return <Outlet />;
}

export default ProtectedRoutes;
