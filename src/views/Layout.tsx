import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
const Layout = memo(() => {
  return (
    <div>
      <div>header</div>
      <Outlet></Outlet>
      <div>footer</div>
    </div>
  )
})

export default Layout
