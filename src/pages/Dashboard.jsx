import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthDispatch } from "../context/authContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();
  const logOutHandler = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login", { replace: true });
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div className="p-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-3">Welcome to the Dashboard</h1>
        <div
          className="logoutButton px-3 py-2 bg-green-700 text-white cursor-pointer"
          onClick={logOutHandler}
        >
          Log out
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
