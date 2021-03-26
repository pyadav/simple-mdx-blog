import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcon,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcon>
          <a href="/" rel="noopener noreferrer">
            <img src={data.facebook.publicURL} alt="facebook" />
          </a>
          <a href="/" rel="noopener noreferrer">
            <img src={data.instagram.publicURL} alt="instagram" />
          </a>
          <a href="/" rel="noopener noreferrer">
            <img src={data.linkedin.publicURL} alt="linkedin" />
          </a>
          <a href="/" rel="noopener noreferrer">
            <img src={data.twitter.publicURL} alt="twitter" />
          </a>
        </FooterSocialIcon>
        <p>© 2021 Missing stack. All rights reserved</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
