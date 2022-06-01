import Home from "./pases/home/Home";
import Login from "./pases/login/Login";
import Profile from "./pases/profile/Profile";
import Register from "./pases/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile/:username" element={<Profile />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
