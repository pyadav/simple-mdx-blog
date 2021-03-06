import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonWrapper = styled(props => <Link {...props} />)`
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
  width: fit-content;
  transition: filter 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    filter: brightness(110%);
  }
`
