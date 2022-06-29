import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import "./index.css";
import Account from "./routes/Account";
import CreateGroup from "./routes/CreateGroup";
import Home from "./routes/Home";
import Login from "./routes/Login";
import MusicPlayer from "./routes/MusicPlayer";
import ProtectedRoute from "./routes/ProtectedRoute";
import Radio from "./routes/Radio";
import { RoutesEnum } from "./routes/RoutesEnum";
import SignUp from "./routes/SignUp";
import VideoPlayer from "./routes/VideoPlayer";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path={RoutesEnum.Root} element={<App />}>
              {/* Public Routes */}
              <Route path={RoutesEnum.Home} element={<Home />} />
              <Route path={RoutesEnum.VideoPlayer} element={<VideoPlayer />} />
              <Route path={RoutesEnum.MusicPlayer} element={<MusicPlayer />} />
              <Route path={RoutesEnum.Login} element={<Login />} />
              <Route path={RoutesEnum.SignUp} element={<SignUp />} />
              <Route path={RoutesEnum.Radio} element={<Radio />} />
              {/* Protected Routes */}
              <Route
                path={RoutesEnum.Account}
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route
                path={RoutesEnum.CreateGroup}
                element={
                  <ProtectedRoute>
                    <CreateGroup />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
