import React from "react"

export default class Cadastro extends React.Component {
    render() {
        return (
            <div>
                <input placeholder="Nome" value={this.props.valueNome} onChange={this.props.onChangeName} />
                <input placeholder="E-mail" value={this.props.valueEmail} onChange={this.props.onChangeEmail} />
                <button onClick={this.props.onClickCriarUsuario}>Criar Usuário</button>
            </div>
        );
    }
}

