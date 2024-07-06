import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProfilesPage from "./pages/ProfilesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    children: [
      {
        path: "/profiles/:profileId",
        element: <ProfilePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
