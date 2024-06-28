import { ReactNode, ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps): ReactElement | null => {
    return (localStorage.getItem('authToken') === null) && (sessionStorage.getItem('authToken') === null) ? <Navigate to="/" /> : <>{children}</>;
};

export default PrivateRoute;
