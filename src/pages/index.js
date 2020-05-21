import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"

import "../styles/styles.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/main.css"
import Layout from "../components/layout"

const IndexPage = () => {
  // useEffect(() => {
  //   navigate(`/slides/01`, { replace: true })
  // }, [])
  return (
    <Layout>
      <div className="container mx-auto my-8 main-screen bg-gray-900 slide-main">
        <h1>The Joy of creating art with code.</h1>
        <pre>
          <code>Neeraj Pandey.</code>
        </pre>
      </div>
    </Layout>
  )
}

export default IndexPage
