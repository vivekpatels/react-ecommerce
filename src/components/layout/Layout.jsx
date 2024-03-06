import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <div className="content">
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout