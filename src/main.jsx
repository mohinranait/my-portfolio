import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRoutes from './routes/Routes'
import AuthProvider from './providers/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myRoutes} />
      <Toaster />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
