import { Navigate } from 'react-router-dom'
import Layout from '../views/Layout'
import Home from '../views/home'
import Login from '../views/login'

export const routes = [
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Navigate to={'/home'}></Navigate>
      },
      {
        path: '/home',
        element: <Home></Home>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  }
]
