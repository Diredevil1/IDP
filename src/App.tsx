import React from "react";
import "./app.css";
import WelcomePage from "./molecules/WelcomePage/WelcomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./organisms/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  { path: "/Layout", element: <Layout /> },
]);

const App = () => {
  return (
    <div className="page">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
