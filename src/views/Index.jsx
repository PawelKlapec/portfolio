import React from 'react';
import styled from 'styled-components'
import Hero from './../components/Hero'

const StyledContainer = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh !important;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #212121;

  @media only screen and (max-width: 750px) {
    display: block;
    margin: auto;
    text-align:center;
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
  justify-content: ${(props) => props.justifyContent};
  flex-wrap: wrap;
  width: 100%;

  @media only screen and (max-width: 750px) {
    height: ${(props) => props.responsiveHeight};
    align-self: center;
  }
`

const StyledTitleContainer = styled.div`
  width: 310px;
  align-self: center;

  @media only screen and (max-width: 750px) {
    width 100%;
  }
`

const StyledTitle = styled.h1`
  color: white;
  font-family: 'Cairo', sans-serif;
  font-weight: bold;
  font-size: 52px;
  text-align: center;
  margin: 0;
`

const StyledSubTitle = styled.h2`
  color: white;
  font-family: 'Cairo', sans-serif;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  margin: 0;
`

function Index() {
  return (
    <StyledContainer>
      <StyledRow justifyContent="center" responsiveHeight="35%">
        <StyledTitleContainer>
          <StyledTitle>Paweł Kłapeć</StyledTitle>
          <StyledSubTitle>Software Engineer</StyledSubTitle>
        </StyledTitleContainer>
      </StyledRow>
      <StyledRow justifyContent="start" responsiveHeight="65%">
        <Hero />
      </StyledRow>
    </StyledContainer>
  )
}

export default Index;