import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";


const Home = () => {
    const [user ,loading, error] = useAuthState(auth)
    const navigate = useNavigate()

  const handleLogout=()=>{
         signOut(auth).then(()=>{
            console.log("signOut")
            navigate('/login')
         }).catch((err)=>{console.log(err)})
  }
  const handleSingIn=()=>{
            navigate('/login')
     
  }

    if(loading) return <p className="text-xl border-r-amber-500 p-2">user info is Loading...</p>
    return (
        <div>
           
            {
                user ? <div>
                     <p>Wellcome.., {user?.email}</p>
                     <button 
                onClick={handleLogout}
              className="bg-orange-400 px-3 rounded py-2 text-white text-xl">Logout</button>
                </div> :<button 
              onClick={handleSingIn}
            className="bg-orange-400 px-3 py-2 rounded text-white text-xl">Sing In</button>
            }
            
        </div>
    );
};

export default Home;