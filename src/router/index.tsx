import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { lazy } from 'react'

import Layout from '../views/Layout'
import Home from '../views/home'
import Login from '../views/login'
import NotFound from '../views/NotFound/NotFound'
const Base = lazy(() => import('@/views/base'))

export const routes: RouteObject[] = [
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
      },
      {
        path: '/workend',
        element: <Base></Base>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]
