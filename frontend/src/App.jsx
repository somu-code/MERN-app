import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import ForgotPassword from "./components/forgot_password/ForgotPassword";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
