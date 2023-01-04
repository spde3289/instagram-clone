import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './page/LoginPage';
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage  />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;