import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword, signInWithGoogle } from "../../firebase/firebase";


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

 
const handleLogin=async(e)=>{
    e.preventDefault()
    try{
        const response = await loginWithEmailAndPassword(email,password)
          console.log("login" , response)
          navigate("/home")
    }catch(error){console.log(error)}

}
  
    return (
        <div className="flex flex-col p-4 justify-center items-center">
            <h1 className="text-3xl my-2">Login</h1>
            <form className="flex flex-col justify-center items-center">
                <div className="my-1">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email address"
                        className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                        className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
                    />
                </div>
                <div>
                    <button className="bg-black text-white p-1 rounded-md mx-2" onClick={handleLogin}>Login</button>

                    <button 
                      onClick={()=>{
                        signInWithGoogle()
                        navigate("/home")
                    }}
                    className="bg-blue-500 text-white p-1 rounded-md">Login With Google</button>
                </div>
            </form>
            <p className="my-2">
              No Account? {' '}
              <NavLink to="/register" className="underline">
                Register
              </NavLink>
            </p>
            <p className="my-2">
              Forgot Password? {' '}
              <NavLink to="/reset" className="underline">
                Reset Your Password
              </NavLink>
            </p>
        </div>
    );
};

export default Login