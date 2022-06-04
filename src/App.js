import Home from "./pases/home/Home";
import Login from "./pases/login/Login";
import Profile from "./pases/profile/Profile";
import Register from "./pases/register/Register";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./state/AuthContext";
import { useContext } from "react";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home/> : <Register />}/>
        <Route path="/profile/:username" element={<Profile />}/>
        <Route path="/login" element={ user ? <Navigate to="/"/> : <Login /> }/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
