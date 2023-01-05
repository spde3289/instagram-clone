import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './page/LoginPage';
import MainPage from "./page/MainPage";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
    }]
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;