import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireLogin = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
            auth?.accessToken ? <Navigate to="/" state={{ from: location }} replace /> :<Outlet/>
                
    );
}

export default RequireLogin;
