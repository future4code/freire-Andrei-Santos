import styled from "styled-components"
import React from "react"
import Cadastro from "./Cadastro";
import Usuarios from "./Usuarios";
import axios from "axios";


const Container = styled.div`
  box-sizing: border-box;
  padding:20px;
  display:flex;
  flex-direction: column;
  background-color:#ccc;
  min-height:100vh;
  align-items: center;
`
const Button = styled.button`
  padding:20px 100px;
  background-color:#555;
  color:white;
  font-size:20px;
  width:400px;
  align-self: flex-start;
  margin-bottom:150px;
  box-shadow:5px 5px 5px #333;
  :hover{
    cursor:pointer;
    background-color:#444;
    box-shadow:5px 5px 5px #222;
  }
`


export default class App extends React.Component {
  state = {
    valueNome: "",
    valueEmail: "",
    telaAtual: "cadastro",
  }

  criarUsuario = () => {
    const body = {
      name: this.state.valueNome,
      email: this.state.valueEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: 'andrei-freire'
      }
    }).then((response) => {
      alert(`Usuário ${this.state.valueNome} criado com sucesso!`)
      this.setState({name: ""})
      this.setState({email: ""})
    }).catch((error) => {
      alert("Erro ao criar o usuário")
    })
  }

  onChangeName = (event) => {
    this.setState({ valueNome: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ valueEmail: event.target.value })
  }
  onClickTrocarTela = () => {
    if (this.state.telaAtual === "cadastro") {
      this.setState({ telaAtual: "usuarios" })
    } else {
      this.setState({ telaAtual: "cadastro" })
    }
  }

  render() {
    return (
      <Container>
        <Button onClick={this.onClickTrocarTela}>Trocar de tela</Button>
        {this.state.telaAtual === "cadastro" ?
          <Cadastro
            valueNome={this.state.valueNome}
            valueEmail={this.state.valueEmail}
            onChangeName={this.onChangeName}
            onChangeEmail={this.onChangeEmail}
            onClickCriarUsuario={this.criarUsuario}
          />
          :
          <Usuarios
          />
        }
      </Container>
    );
  }
}

