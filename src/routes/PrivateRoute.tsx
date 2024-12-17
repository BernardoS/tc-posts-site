import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Componente para rotas privadas
const PrivateRoute = ({ children }: { children: React.ReactNode}) => {
    
    const {isLoggedIn} = useAuth();

    console.log(isLoggedIn);

    return isLoggedIn ? children : <Navigate to="/login" />;
  
};

  export default PrivateRoute;