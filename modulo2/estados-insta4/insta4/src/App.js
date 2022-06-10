import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const FormContainer = styled.div`
  display: flex;
  padding:10px;
  margin:10px;
  justify-content:center;
  background-color:#ccc;
`
const InputContainer = styled.input`
  border-bottom:2px solid #555;
  margin:5px;
`

class App extends React.Component {
  state = {
    posts: [
        {
        nomeUsuario: "paulinha",
        fotoUsuario: 'https://picsum.photos/id/210/50/50',
        fotoPost: 'https://picsum.photos/id/257/200/150'
        },
        {nomeUsuario: "pedro",
        fotoUsuario: 'https://picsum.photos/id/210/50/50',
        fotoPost: 'https://picsum.photos/id/257/200/150'
        },
        {nomeUsuario: "joão",
        fotoUsuario: 'https://picsum.photos/id/230/50/50',
        fotoPost: 'https://picsum.photos/id/237/200/150'
        }
    ],
    valorInputNome: "",
    valorInputFtUsuario: "",
    valorInputFtPost: ""
  }

  addPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFtUsuario,
      fotoPost: this.state.valorInputFtPost
    };

    const novoPosts = [novoPost, ...this.state.posts];

    this.setState({ posts: novoPosts });
    this.setState({valorInputNome: ""});
    this.setState({valorInputFtUsuario: ""});
    this.setState({valorInputFtPost: ""});
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };
  onChangeInputFtUsuario = (event) => {
    this.setState({ valorInputFtUsuario: event.target.value });
  };
  onChangeInputFtPost = (event) => {
    this.setState({ valorInputFtPost: event.target.value });
  };




  render() {
    const listaDeComponentes = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })
    return (
      <MainContainer>
        <FormContainer>
            <InputContainer
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome"}
            />
            <InputContainer
              value={this.state.valorInputFtUsuario}
              onChange={this.onChangeInputFtUsuario}
              placeholder={"Foto Usuario"}
            />
            <InputContainer
              value={this.state.valorInputFtPost}
              onChange={this.onChangeInputFtPost}
              placeholder={"Foto Post"}
            />
          <button onClick={this.addPost}>Adicionar</button>
        </FormContainer>
        {listaDeComponentes}
      </MainContainer>
    );
  }
}

export default App;
