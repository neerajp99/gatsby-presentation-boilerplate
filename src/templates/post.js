import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { CSSTransition } from "react-transition-group"

// Fetching the content of a single slide and passing as props
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
      excerpt
    }
  }
`

const Post = props => {
  return (
    <div className="container mx-auto my-8 main-screen bg-gray-900 slide-main">
      {/*<h1>{props.data.markdownRemark.frontmatter.title}</h1>*/}
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.markdownRemark.html,
        }}
      ></div>
    </div>
  )
}

export default Post
