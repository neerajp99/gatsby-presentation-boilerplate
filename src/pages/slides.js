import React, { useRef, useEffect } from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/styles.scss"

const Slides = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            fileAbsolutePath
            id
          }
        }
      }
    }
  `)
  let newData = []
  data.allMarkdownRemark.edges.map((index, key) => {
    let temp = data.allMarkdownRemark.edges[key].node.fileAbsolutePath.split(
      "/"
    )
    data.allMarkdownRemark.edges[key].node.fileAbsolutePath =
      temp[temp.length - 1]
  })
  data.allMarkdownRemark.edges.sort((a, b) =>
    a.node.fileAbsolutePath > b.node.fileAbsolutePath ? 1 : -1
  )
  console.log(data)
  return (
    <Layout>
      <div className="container mx-auto my-8 slides-main-screen bg-gray-900 overflow-scroll">
        <h1 className="subpixel-antialiased text-2xl font-normal px-20 py-8 text-white">
          {" "}
          [ Index of Slides ]
        </h1>
        <div className="slides-details ">
          <ol className="slides-details-list">
            {data.allMarkdownRemark.edges.map((index, key) => (
              <li key={key} className="slides-details-list px-16 ">
                <Link to={`/slides/${key}`}>
                  <div className="slides-details-div px-4 py-4 max-w-4xl text-gray-100 mt-6">
                    <span className="text-xs bg-blue-700 px-2 py-1 rounded-full">
                      Slide : {key + 1}
                    </span>
                    <h4 className="my-4 py-1 font-light">
                      {data.allMarkdownRemark.edges[key].node.frontmatter.title}
                    </h4>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export default Slides
