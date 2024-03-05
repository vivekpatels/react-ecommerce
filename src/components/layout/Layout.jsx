import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        <div className="content">
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout