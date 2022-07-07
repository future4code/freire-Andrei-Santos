import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`
const Container = styled.div`
  background-color:#ccc;
  display:flex;
  height:100vh;
  justify-content:center;
  align-items:center;
`
const AppMainBox = styled.div`
  border:1px solid black;
  background-color:#fff;
  height:600px;
  width:400px;
`
const Head = styled.div`
  display:flex;
  justify-content:space-between;
  padding:20px 15px;
  border-bottom:1px solid #ccc;
  span{
    font-size:20px;
    font-weight:bold;
  }
`

 const App  = () => {
  return (
    <Container>
      <GlobalStyle/>
      <AppMainBox>
        <Head>
          <div>img1</div>
          <span>AstroMatch</span>
          <div>img2</div>
        </Head>
      </AppMainBox>
    </Container>
  );
}

export default App

