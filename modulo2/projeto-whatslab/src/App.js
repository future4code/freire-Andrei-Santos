import React, { Component } from "react";
import styled from "styled-components";

const ContainerChat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background-color:#41706D;
  height: 100vh;
  min-width:450px;
  margin:auto;
  padding-left:20px;
  padding-right:20px;
`;
const ChatArea = styled.div`
  background-color: #ccc;
  height: 100vh;
  max-width: 600px;
  margin:auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;



`;
const TextoArea = styled.div`
  background-color: #A9AFB6;
  padding: 20px;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:flex-start;
`;
const Balao = styled.div`
  background-color:white;
  margin-bottom:10px;
  max-width: 60%;
  min-width: 8%;
  word-wrap: break-word;
  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`
const Remetente = styled.div`
    color: #FF5B77;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
`
const InputArea = styled.div`
    display:flex;
    height:50px;
    padding:10px;
`
const InputUser = styled.input`
    border-radius:10px;
    margin-right:5px;
    width:100px;
    color:#FF5B77;
`
const InputMsg = styled.input`
    border-radius:10px;
    margin-right:5px;
    width:200px;

`
const InputAdd = styled.button`
    border-radius:10px;
    width:80px;

    &:hover{
      cursor:pointer;
      background-color:#A9AFB6;
      box-shadow:1px 1px 2px black;
    }
`

class App extends Component {
  state = {
    mensagens: [
      {
        remetente: "",
        mensagem: "",
      },
    ],
    valorInputUser: "",
    valorInputMsg: "",
    enviado: false
  };

  addMsg = () => {
    const novaMsg = {
      remetente: this.state.valorInputUser,
      mensagem: this.state.valorInputMsg,
    };

    const novasMensagens = [...this.state.mensagens, novaMsg];

    this.setState({ mensagens: novasMensagens });
    this.setState({ valorInputMsg: "" });
    this.setState({ enviado: true});
  };

  onChangeInputUser = (event) => {
    this.setState({ valorInputUser: event.target.value });
  };

  onChangeInputMsg = (event) => {
    this.setState({ valorInputMsg: event.target.value });
  };

  render() {
      const listaDeComponentes = this.state.mensagens.map((msg) => {
        if(msg.mensagem !== ""){
          return (
              <Balao>
                <Remetente>{msg.remetente}<br/></Remetente> {msg.mensagem}
              </Balao>
          );
        }
        
      });

    return (
      <ContainerChat className="App">
        <ChatArea>
          <TextoArea>{listaDeComponentes}</TextoArea>
          <InputArea>
            <InputUser
              value={this.state.valorInputUser}
              onChange={this.onChangeInputUser}
              placeholder={"Usuário"}
            />
            <InputMsg
              value={this.state.valorInputMsg}
              onChange={this.onChangeInputMsg}
              placeholder={"Mensagem"}
            />
            <InputAdd onClick={this.addMsg}>Adicionar</InputAdd>
          </InputArea>
        </ChatArea>
      </ContainerChat>
    );
  }
}

export default App;
