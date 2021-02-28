import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <BrandContainer>
      <h5>2021 - feito por </h5><a> chagretes</a>
    </BrandContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: inline-flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`

export default Footer
