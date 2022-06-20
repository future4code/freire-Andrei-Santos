import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-top:50px;
  height:50px;
  cursor:pointer;
  border-radius:10px;
  margin-right:20px;
  &:hover{
    background-color:#282c34;
    color:white;
    border-color:white;
  }
`
const Input = styled.input`
  width:300px;
  height:30px;
`
const Select = styled.select`
  width:300px;
  height:30px;
`
const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`


export default class Etapa2 extends Component {
  render() {
    return (
      <Container>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <p>5. Qual curso?</p>
        <Input type="text"></Input>
        <p>6. Qual a unidade de ensino?</p>
        <Input type="text"></Input>
        <div>
            <Button onClick={this.props.anterior}>Voltar</Button>
            <Button onClick={this.props.proximo}>Próxima etapa</Button>
        </div>
      </Container>
    );
  };
};

