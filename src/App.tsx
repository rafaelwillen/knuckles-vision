import React from "react";
import MainLayout from "./components/Layout/MainLayout";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <MainLayout>
      <Sidebar />
      <Home />
    </MainLayout>
  );
}

export default App;
