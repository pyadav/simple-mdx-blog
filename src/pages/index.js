import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

export default function IndexPage() {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="March 22, 2000"
          title="Uses of pipe function in javascript"
          excerpt="A pipe is a form of redirection that is used to send the output of one program to another program for further processing."
          slug="/uses-of-pipe-function"
        />
      </Content>
    </Container>
  )
}
