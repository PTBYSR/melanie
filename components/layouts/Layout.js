import React from 'react'
import Footer from '../common/Footer/Footer'
import TopNav from '../common/TopNav/TopNav'

const Layout = ({ children }) => {
  return (
    <>
        <TopNav />
        {children}
        <Footer />
    </>
  )
}

export default Layout