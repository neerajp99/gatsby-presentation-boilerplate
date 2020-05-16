import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          event
          twitter
        }
      }
    }
  `)

  let tagList = data.site.siteMetadata.event.trim().split("@")
  tagList.shift()

  return (
    <div className="grid grid-cols-2 divide-gray-400 my-3 bg-gray-900 h-10">
      <div className="site_title text-white p-2 sm:text-base md:text-l lg:text-sm xl:text-sx ">
        <span className="ml-3 flex -ml-2">
          {tagList.map(content => (
            <div className="flex-grow-0 ml-4">#{content}</div>
          ))}
        </span>
      </div>
      <div className="site_title text-l text-white p-2">
        <span className="float-right sm:text-base md:text-l lg:text-sm xl:text-sx mx-3">
          {data.site.siteMetadata.twitter}
        </span>
      </div>
    </div>
  )
}
export default Footer
