import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/210/50/50'}
          fotoPost={'https://picsum.photos/id/257/200/150'}
        />

        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/220/50/50'}
          fotoPost={'https://picsum.photos/id/227/200/150'}
        />

        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/230/50/50'}
          fotoPost={'https://picsum.photos/id/237/200/150'}
        />

        
      </MainContainer>
    );
  }
}

export default App;
