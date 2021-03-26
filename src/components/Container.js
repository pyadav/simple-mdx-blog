import React from "react"
import { ContainerWrapper } from "../elements"
import { Navigation, Footer } from "../components"

export const Container = ({ children }) => (
  <ContainerWrapper>
    <Navigation />
    {children}
    <Footer />
  </ContainerWrapper>
)
