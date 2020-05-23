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
  NEXT = [13, 32, 39]
  PREV = 37
  I = 1

  navigate = ({ keyCode }) => {
    console.log()

    if (this.I) {
      if (keyCode === this.PREV && this.I === 0) {
        return false
      } else if (
        this.NEXT.indexOf(keyCode) !== -1 &&
        this.I === this.props.totalCount
      ) {
        return false
      } else if (this.NEXT.indexOf(keyCode) !== -1) {
        navigate(`/slides/${this.I + 1}`)
        this.I = this.I + 1
    } else if (keyCode === this.PREV && this.I >= 2) {
        navigate(`/slides/${this.I - 1}`)
          this.I = this.I - 1
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
      <Layout totalCount={data.allMarkdownRemark.totalCount} {...props} />
    )}
  />
)
