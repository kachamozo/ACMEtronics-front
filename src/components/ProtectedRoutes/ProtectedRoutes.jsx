import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
	const isLogged = useSelector((state) => state.isAuthenticated);

	if (!isLogged) return <Navigate to='/login' />;

	return <Outlet />;
}

export default ProtectedRoutes;
