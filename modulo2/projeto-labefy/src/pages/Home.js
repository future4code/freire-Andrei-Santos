import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  justify-content: center;
  width:100%;
  font-size:100px;
  padding-top:100px;
  padding-left:50px;
  padding-right:50px;
`

export default class Home extends React.Component {
  render(){
    return (
      <Container>
        <span>Seja Bem-vindo ao Labefy!</span>
      </Container>
    )
  }
}
