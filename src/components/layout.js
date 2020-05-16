/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 */
import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import layoutStyles from "../styles/layout.module.scss"

const Layout = ({ children }) => {

  return (
    <>
      <div className={layoutStyles.containers}>
        {" "}
        <div className={layoutStyles.content}>
          <Header siteTitle="The Joy of Creating Art with Code" />
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
