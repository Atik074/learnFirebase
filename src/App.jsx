import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Reset from "./pages/reset/Reset";
import PrivateRoute from "./route/PrivateRoute";


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route element={<PrivateRoute/>}>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} exact />
            </Route>
             
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset" element={<Reset />} />
          
        </Routes>
      </div>
    </Router>
  );
}
