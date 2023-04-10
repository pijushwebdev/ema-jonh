import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import cartProductsLoader from './loaders/cartProductsLoader'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        // loader: () => fetch('products.json'),
        loader: cartProductsLoader
        
      },
      {
        path:'inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'*',
        element: <div>Not Found The Page</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
