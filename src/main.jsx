import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Login } from './Pages/Login.jsx';
import { Usuario } from './Pages/Usuario.jsx';
// import { Cadastrar } from './Pages/Cadastrar.jsx';
import { Contato } from './Pages/Contato.jsx';
import { Cadastrar } from './Pages/Cadastrar.jsx';
import { Home } from './Pages/Home.jsx';
// import './index.css'

const router = createBrowserRouter([

    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/usuario",
          element: <Usuario/>,
          
        },
        {
          path: "/contato",
          element: <Contato/>,
      },
        {
          path: "/home",
          element: <Home/>,
      },
        {
          path: "/cadastrar",
          element: <Cadastrar/>,
      },

      ]
    },
    

    {
        path: "/login",
        element: <Login/>,
    },

    
    
  ]);
// const router = createBrowserRouter([

//     {
//       path: "/",
//       element: <App/>,
//     },
//     {
//       path: "/home",
//       element: <App/>,
//     },

//     {
//         path: "/login",
//         element: <Login/>,
//     },

//     {
//         path: "/usuario",
//         element: <Usuario/>,
//     },
//     {
//         path: "/cadastrar",
//         element: <Cadastrar/>,
//     },
//     {
//         path: "/contato",
//         element: <Contato/>,
//     },
//   ]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router={router}/>
 </React.StrictMode>
)
