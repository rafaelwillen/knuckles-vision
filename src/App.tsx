import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Sidebar from "./components/Sidebar";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/home");
    }
  }, []);

  return (
    <MainLayout>
      <Sidebar />
      <Outlet />
    </MainLayout>
  );
}

export default App;
