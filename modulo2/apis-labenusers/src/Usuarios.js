import React from "react"
import axios from "axios";
import styled from "styled-components"
import DetalhesUsuario from "./DetalhesUsuario";

const Li = styled.li`
    font-size:40px;
    display:flex;
    align-items: center;
    margin-bottom:5px;
    height:50px;
    line-height:0px;
    span{
    :hover{
        cursor:pointer;
        text-shadow:2px 2px 2px #555;
    }
    }

    button{
        margin-left:5px;
        height:30px;
        width:30px;
        color:red;
    :hover{
        background-color:red;
        color:white;
        cursor:pointer;
    }
    }
`
const Load = styled.div`
  font-size:100px;
  color:white;
  padding:20px;
  background-color:#555;
  border-radius:10px;
`


export default class Usuarios extends React.Component {
    state = {
        listaUsuarios: [],
        idAtual: [],
        telaAtual: "usuarios"
    }

    onClickTrocarTela = (id) => {
        if (this.state.telaAtual === "usuarios") {
            this.setState({ telaAtual: "detalhesUsuario" })
        } else {
            this.setState({ telaAtual: "usuarios" })
        }
        this.setState({idAtual: id})
    }

    mostrarUsuarioPorId = Id => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:${Id}`, {
            headers: {
                Authorization: 'andrei-freire'
            }
        }).then(response => {
            alert(response)
        }).catch((error) => {
            alert(error.message)
        })
    }

    componentDidMount() {
        this.mostrarUsuarios()
    }

    mostrarUsuarios = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: 'andrei-freire'
            }
        }).then(response => {
            this.setState({ listaUsuarios: response.data })
        }).catch((error) => {
            alert("Erro ao apagar o usuário")
        })
    }

    deletarUsuario = userId => {
        if (window.confirm("Tem certeza que deseja apagar o usuário?")) {
            axios
                .delete(
                    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
                    headers: {
                        Authorization: 'andrei-freire'
                    }
                })
                .then(() => {
                    alert("Usuário apagado com sucesso!");
                    this.mostrarUsuarios();
                })
                .catch(e => {
                    alert("ERRO AO APAGAR USUARIO");
                });
        }
    };


    render() {
        console.log(this.state.idAtual)
        return (
            <div>
                <br />
                {this.state.listaUsuarios.length === 0 && <Load>Carregando...</Load>}

                {this.state.telaAtual === "usuarios" ? this.state.listaUsuarios.map((usuario) => {
                    return <Li key={usuario.id}>
                        <span onClick={() => this.onClickTrocarTela(usuario.id)}>{usuario.name}</span>
                        <button onClick={() => this.deletarUsuario(usuario.id)}>X</button>
                    </Li>
                }) :
                    <DetalhesUsuario
                        onClick={this.onClickTrocarTela}
                        id={this.state.idAtual}
                    />
                }
            </div>
        )
    }
}

