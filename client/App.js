import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Chat1 from "./pages/Chat1/Chat1";
import VideoChat from "./components/VideoChat/VideoChat";
const AppLayout = () => {
  return (
    <React.Fragment>
     <Navbar/>
     <Outlet/>
  </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <AppLayout />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [
        // show children component for routing
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path:"/Chat1",
          element:<Chat1/>
        },
        {
          path:"/video",
          element:<VideoChat/>
        }
      ],
    },
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />); 
