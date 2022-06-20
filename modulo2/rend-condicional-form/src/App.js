import React, { Component } from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import EtapaFinal from "./components/EtapaFinal"

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

export default class App extends Component {
  state = {
    pagAtual: 1,
    option: ""
  }

  passarPagina = () => {
      this.setState({pagAtual: this.state.pagAtual+1})
  }

  voltarPagina = () => {
      this.setState({pagAtual: this.state.pagAtual-1})
  }




  render() {
    let pagina

    if(this.state.pagAtual === 1){
      pagina = <Etapa1 proximo={this.passarPagina}/>
    }else if(this.state.pagAtual === 2){
      pagina = <Etapa2 proximo={this.passarPagina} anterior={this.voltarPagina}/>
    }
    else if(this.state.pagAtual === 3){
      pagina = <Etapa3 proximo={this.passarPagina} anterior={this.voltarPagina}/>
    }
    else if(this.state.pagAtual === 4){
      pagina = <EtapaFinal anterior={this.voltarPagina}/>
    }

    return (
      <Container>
        {pagina}
      </Container>
    );
  };
};

