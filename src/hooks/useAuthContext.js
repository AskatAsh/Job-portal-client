import { useContext } from "react";
import AuthContext from './../context/AuthContext';

const useAuthContext = () => {
    const authInfo = useContext(AuthContext);
    return authInfo;
};

export default useAuthContext;