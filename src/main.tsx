import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./routes/Home";
import { RoutesEnum } from "./routes/RoutesEnum";
import VideoPlayer from "./routes/VideoPlayer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Root} element={<App />}>
          <Route path={RoutesEnum.Home} element={<Home />} />
          <Route path={RoutesEnum.VideoPlayer} element={<VideoPlayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
