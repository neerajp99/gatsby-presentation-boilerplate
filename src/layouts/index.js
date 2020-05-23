/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 */
import React, { Component } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/layout.css"
import layoutStyles from "../styles/layout.module.scss"
import Transition from "../transitions/transition"
import PropTypes from "prop-types"
import { navigate, StaticQuery, graphql } from "gatsby"

class Layout extends Component {
  I = 1
  PREV = 37
  NEXT = [13, 32, 39]

  navigate = ({ keyCode }) => {
    let current
    if (typeof this.props.pageContext != "undefined") {
      current = parseInt(this.props.pageContext.slug)
    } else {
      current = this.I
    }

    if (current) {
      if (keyCode === this.PREV && current === 0) {
        return false
      } else if (
        this.NEXT.indexOf(keyCode) !== -1 &&
        current === this.props.totalCount
      ) {
        return false
      } else if (this.NEXT.indexOf(keyCode) !== -1) {
        navigate(`/slides/${current + 1}`)
        current = current + 1
      } else if (keyCode === this.PREV && current >= 2) {
        navigate(`/slides/${current - 1}`)
        current = current - 1
      }
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.navigate)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.navigate)
  }
  render() {
    console.log(this.props)
    const { location, children, totalCount } = this.props
    return (
      <>
        <div className={layoutStyles.containers}>
          {" "}
          <div className={layoutStyles.content}>
            <Header siteTitle="The Joy of Creating Art with Code" />
            <Transition location={location}> {children}</Transition>
          </div>
          <Footer />
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              frontmatter {
                title
                date
              }
              html
              excerpt
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout
        totalCount={data.allMarkdownRemark.totalCount}
        slug={data.allMarkdownRemark.edges}
        {...props}
      />
    )}
  />
)
