import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import { useAuth, useAuthDispatch } from "../context/authContext";

const Router = () => {
  const user = useAuth();
  // console.log(user);
  return (
    <Routes>
      <Route path="/" element={user.isLoggedin ? <Dashboard /> : <Login />} />
      <Route
        path="/login"
        element={user.isLoggedin ? <Dashboard /> : <Login />}
      />
      <Route
        path="/signup"
        element={user.isLoggedin ? <Dashboard /> : <Signup />}
      />
      <Route
        path="/dashboard"
        element={
          user.isLoggedin ? <Dashboard /> : <Navigate replace to={"/login"} />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
