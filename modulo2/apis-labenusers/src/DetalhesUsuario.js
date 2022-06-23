import React from "react"
import styled from "styled-components"
import axios from "axios"

const Button = styled.button`
  padding:20px 100px;
  display:block;
  margin:auto;
  margin-top:20px;
  font-size:20px;
  box-shadow:5px 5px 5px #333;
  :hover{
    cursor:pointer;
    background-color:#444;
    color:white;
    box-shadow:5px 5px 5px #222;
  }
`
const Span = styled.span`
    font-size: 50px;
    display:block;
`
const Load = styled.div`
  font-size:100px;
  color:white;
  padding:20px;
  background-color:#555;
  border-radius:10px;
`

export default class DetalhesUsuario extends React.Component {
    state = {
        usuarioDetalhes: []
    }

    componentDidMount() {
        this.mostrarUsuario()
    }

    mostrarUsuario = () => {
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.id}`, {
                headers: {
                    Authorization: 'andrei-freire'
                }
            }
            )
            .then(response => {
                this.setState({ usuarioDetalhes: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                {this.state.usuarioDetalhes.length === 0 ? 
                <Load>Carregando...</Load>
                :
                <div>
                    <Span>{this.state.usuarioDetalhes.name}</Span>
                    <Span>{this.state.usuarioDetalhes.email}</Span>
                    <Button onClick={this.props.onClick}>Voltar</Button>
                </div>
                }
            </div>
        );
    }
}

