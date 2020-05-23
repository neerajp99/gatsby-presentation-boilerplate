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
    <Layout>
      <div className="mx-auto my-8 main-screen bg-blue-500">
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.markdownRemark.html,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export default Post
