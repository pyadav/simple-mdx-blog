import React from "react"
import { ContainerWrapper } from "../elements"
import { Navigation } from "../components"

export const Container = ({ children }) => (
  <ContainerWrapper>
    <Navigation />
    {children}
  </ContainerWrapper>
)
