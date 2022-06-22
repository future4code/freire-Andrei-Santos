import React from "react"
import axios from "axios";
import styled from "styled-components"

const Button = styled.button`
margin-left:5px;
color:red;
`

export default class Usuarios extends React.Component {
    state = {
        listaUsuarios: []
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
            console.log(this.state.listaUsuarios)
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
        return (
            <div>
                <br />
                {this.state.listaUsuarios.map((usuario) => {
                    return <li>
                        {usuario.name}
                        <Button onClick={() => this.deletarUsuario(usuario.id)}>X</Button>
                    </li>
                })}
            </div>
        )
    }
}

