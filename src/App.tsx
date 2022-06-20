import React from "react";
import MainLayout from "./components/Layout/MainLayout";
import Sidebar from "./components/Sidebar";
import VideoPlayer from "./pages/VideoPlayer";

function App() {
  return (
    <MainLayout>
      <Sidebar />
      <VideoPlayer />
    </MainLayout>
  );
}

export default App;
