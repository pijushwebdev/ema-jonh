import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import cartProductsLoader from './loaders/cartProductsLoader'
import Checkout from './components/Checkout/Checkout'
import AuthProvider from './components/providers/AuthProvider'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import PrivateRoute from './routes/PrivateRoute'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'sign-up',
        element: <SignUp></SignUp>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        // loader: () => fetch('products.json'),
        loader: cartProductsLoader

      },
      {
        path: 'inventory',
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path: 'checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: '*',
        element: <div>Not Found The Page</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
