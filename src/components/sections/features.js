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

        <Number>1</Number><Time>
        <img src="https://static.gamersclub.com.br/players/avatar/734347/734347_medium.jpg" height="50px" width="auto"></img>
        <p>Cobblestoners</p></Time>
        <p>1</p><p>1</p><p>1</p><p>0</p>

        <p>1</p><Time>
        <img src="https://static.gamersclub.com.br/players/avatar/357754/357754_medium.jpg" height="50px" width="auto"></img>
        <p>Sou Passivo</p></Time>
        <p>2</p><p>3</p><p>2</p><p>1</p>

        <p>2</p><Time>
        <img src="https://static.gamersclub.com.br/players/avatar/1272690/1272690_medium.jpg" height="50px" width="auto"></img>
        <p>Pantera Negra</p></Time>
        <p>1</p><p>1</p><p>1</p><p>0</p>

        <p>4</p><Time>
        <img src="https://static.gamersclub.com.br/players/avatar/1716405/1716405_medium.jpg" height="50px" width="auto"></img>
        <p>passosGG</p></Time>
        <p>2</p><p>3</p><p>2</p><p>1</p>

        <p>5</p><Time>
        <img src="https://static.gamersclub.com.br/teams/avatar/220767/220767.png" height="50px" width="auto"></img>
        <p>Não tem Cobble</p></Time>
        <p>2</p><p>3</p><p>2</p><p>1</p>

        <p>6</p><Time>
        <img src="https://static.gamersclub.com.br/players/avatar/460948/460948_medium.jpg" height="50px" width="auto"></img>
        <p>KOTN</p></Time>
        <p>2</p><p>3</p><p>2</p><p>1</p>

        <p>7</p><Time>
        <img src="https://static.gamersclub.com.br/players/avatar/773929/773929_medium.jpg" height="50px" width="auto"></img>
        <p>Z0iDeGato</p></Time>
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
  
  >img {
    padding-right: 10px;
  }
`

const Number = styled.div`
  color: green;
  font-weight: 900;
`