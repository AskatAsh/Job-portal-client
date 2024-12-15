import useAuthContext from './../hooks/useAuthContext';
import { PropTypes } from 'prop-types';
import Loading from './../components/common/Loading';
import { Navigate } from 'react-router-dom';
import { ROUTES } from './../shared/constants/routes';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useAuthContext();

    if(loading){
        return <Loading />;
    }

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate to={ROUTES.TOLOGIN} />
    );
};

ProtectedRoute.propTypes = {
    children: PropTypes.object.isRequired
}

export default ProtectedRoute;