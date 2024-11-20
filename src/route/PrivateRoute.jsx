import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import {Outlet, Navigate} from "react-router-dom";


const PrivateRoute = () => {
    const [user , loading,error]= useAuthState(auth)
   

    if(loading) return <p className="text-xl bg-red-700 text-white p-2">Loading</p>
    if(error) return <p className="text-xl bg-red-700 text-white p-2">Error:{error.message}</p>

    return (
        <div>
            
        { user ? <Outlet /> : <Navigate to="/login" />}
            
            
        </div>
    );
};

export default PrivateRoute;