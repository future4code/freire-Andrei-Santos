import React from "react"
import styled from "styled-components"

const Input = styled.input`
  padding:20px 100px;
  font-size:20px;
  width:500px;
  margin-bottom:50px;
  box-shadow:5px 5px 5px #333;
  display:block;
`
const Button = styled.button`
  padding:20px 100px;
  display:block;
  margin:auto;
  font-size:20px;
  box-shadow:5px 5px 5px #333;
  :hover{
    cursor:pointer;
    background-color:#444;
    color:white;
    box-shadow:5px 5px 5px #222;
  }
`

export default class Cadastro extends React.Component {
    render() {
        return (
            <div>
                <Input placeholder="Nome" value={this.props.valueNome} onChange={this.props.onChangeName} />
                <Input placeholder="E-mail" value={this.props.valueEmail} onChange={this.props.onChangeEmail} />
                <Button onClick={this.props.onClickCriarUsuario}>Criar Usuário</Button>
            </div>
        );
    }
}

