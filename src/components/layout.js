/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 */
import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import layoutStyles from "../styles/layout.module.scss"
import Transition from "../transitions/transition"
import PropTypes from "prop-types"

const Layout = ({ children, location }) => {
  return (
    <>
      <div className={layoutStyles.containers}>
        {" "}
        <div className={layoutStyles.content}>
          <Header siteTitle="The Joy of Creating Art with Code" />
          <Transition location={location}>{children}</Transition>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
