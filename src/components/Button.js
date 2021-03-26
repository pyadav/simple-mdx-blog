import React from "react"
import { ButtonWrapper } from "../elements"

export const Button = ({ children, href }) => (
  <ButtonWrapper to={href}>{children}</ButtonWrapper>
)
