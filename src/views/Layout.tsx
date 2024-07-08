import React, { Suspense, memo } from 'react'
import { Outlet } from 'react-router-dom'
const Layout = memo(() => {
  return (
    <div>
      <div>header</div>
      <Suspense fallback="loading...">
        <Outlet></Outlet>
      </Suspense>
      <div>footer</div>
    </div>
  )
})

export default Layout
