import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './routes/routes';

import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
