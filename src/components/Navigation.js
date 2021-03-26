import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavigationWrapper } from "../elements"

export const Navigation = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        publicURL
      }
    }
  `)
  return (
    <NavigationWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="logo" />
      </Link>
    </NavigationWrapper>
  )
}
