import styled from "styled-components"
import React from "react"
import Cadastro from "./Cadastro";
import Usuarios from "./Usuarios";
import axios from "axios";


const Container = styled.div`
  padding:20px;
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
        <button onClick={this.onClickTrocarTela}>Trocar de tela</button><br />
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

