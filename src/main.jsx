import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home/Home';
import ListedBook from './Pages/LIstedBook/ListedBook';
import PagesRead from './Pages/PagesRead/PagesRead';
import MainLayout from './Layout/MainLayout/MainLayout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "listedBook",
        element: <ListedBook></ListedBook>
      },
      {
        path: "pagesRead",
        element: <PagesRead></PagesRead>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
