import useAuthContext from './../hooks/useAuthContext';
import { PropTypes } from 'prop-types';
import Loading from './../components/common/Loading';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from './../shared/constants/routes';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useAuthContext();
    const location = useLocation();

    if(loading){
        return <Loading />;
    }

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate to={ROUTES.TOLOGIN} state={location?.pathname} />
    );
};

ProtectedRoute.propTypes = {
    children: PropTypes.object.isRequired
}

export default ProtectedRoute;