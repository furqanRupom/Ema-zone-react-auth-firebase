import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Content from './components/Content/Content'
import Order from './components/Order/Order'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import productsCustomLoader from './customLoader/productsCustomLoader'
import Checkout from './components/Checkout/Checkout'
import SignUp from './components/SignUp/SignUp'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Content />
      },
      {
        path:"Order",
        element:<Order />,
        loader:productsCustomLoader
      },
      {
        path:"Inventory",
        element:<Inventory />
      },
      {
        path:"Login",
        element:<Login />,

      },
      {
        path:"Checkout",
        element:<Checkout />
      },{
        path:"signUp",
        element:<SignUp />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
