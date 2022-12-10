// import React, { Children } from 'react';
// import { createRoot } from "react-dom/client";
// import { Outlet } from 'react-router-dom';
// import { createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
// import Home from "./Home";
// import Article from "./Article";
// import Toppicks from "./Toppicks";
// import Navbar from './Navbar';
// import ErrorPage from './ErrorPage';
// import Genre from './Genre';
// const AppLayout=()=>{
//   return(
//     <>
//     <Navbar/>
//     <Outlet/>
//     </>
//   );
  
// };
// const router=createBrowserRouter([
// {
//   element:<AppLayout/>,
//   errorElement: <ErrorPage/>,
//   children:[
// {
//   path: "/",
//   element: <Home/>,
// },
// {
//   path:"article",
//   element:<Article/>,
// },
// {
//   path:"genre",
//   element:<Genre/>,
// },
// {
//   path:"toppicks",
//   element:<Toppicks/>,
// },
// ],
// },
// ]);
// createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router}/>
// );
import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();