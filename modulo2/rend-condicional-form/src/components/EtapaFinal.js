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


export default class EtapaFinal extends Component {
  render() {
    return (
      <Container>
        <h2>O FORMULÁRIO ACABOU</h2>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
        <Button onClick={this.props.anterior}>Voltar</Button>
      </Container>
    );
  };
};

