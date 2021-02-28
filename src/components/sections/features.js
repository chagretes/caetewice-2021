import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="tabela">
    <StyledContainer>
      <Subtitle>Tabela</Subtitle>
      <SectionTitle>Caetéwice 2021</SectionTitle>
      <FeaturesGrid>
        <p></p><p>Time</p>
        <p>P</p><p>J</p><p>V</p><p>D</p>

        <p>1</p><Time><img></img><p>Victor</p></Time>
        <p>2</p><p>3</p><p>2</p><p>1</p>

        <p>2</p><Time><img></img><p>Erick</p></Time>
        <p>1</p><p>1</p><p>1</p><p>0</p>

        <p>3</p><Time><img></img><p>Cobblestoners</p></Time>
        <p>1</p><p>1</p><p>1</p><p>0</p>

        <p>4</p><Time><img></img><p>Junin</p></Time>
        <p>2</p><p>3</p><p>2</p><p>1</p>

        <p>5</p><Time><img></img><p>Greg</p></Time>
        <p>2</p><p>3</p><p>2</p><p>1</p>

        <p>6</p><Time><img></img><p>Xandão</p></Time>
        <p>2</p><p>3</p><p>2</p><p>1</p>

        <p>7</p><Time><img></img><p>Zoi de Gato</p></Time>
        <p>2</p><p>3</p><p>2</p><p>1</p>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 30px auto 30px 30px 30px 30px;
  margin: 0px auto;
  align-items: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 0 64px;
  }
`

const Time = styled.div`
  display: flex;
  align-items: center;
`
