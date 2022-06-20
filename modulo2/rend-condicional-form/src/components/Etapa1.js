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


export default class Etapa1 extends Component {

  render() {
    return (
      <Container>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <p>1. Qual o seu nome?</p>
        <Input type="text"></Input>
        <p>2. Qual sua idade?</p>
        <Input type="text"></Input>
        <p>3. Qual seu email?</p>
        <Input type="text"></Input>
        <p>4. Qual a sua escolaridade?</p>
        <Select>
            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
            <option value="Ensino médio completo">Ensino médio completo</option>
            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
            <option value="Ensino superior completo">Ensino superior completo</option>
        </Select>
        <div>
            <Button onClick={this.props.proximo}>Próxima etapa</Button>
        </div>
      </Container>
    );
  };
};

