import styled from "styled-components";

const Container = styled.div`
  height:calc(100vh - 200px);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  span{
    color:#00b786;
    font-size:35px;
    font-weight:bold;
  }
`
const ButtonArea = styled.div`
  display:flex;
  margin-top:20px;

  div{
    margin:0px 10px;
    padding:10px 20px;
    border-radius:20px;
    background-color:#00b786;
    transition:0.5s;

    :hover{
      cursor:pointer;
      box-shadow:2px 2px 10px #ffffff90;
      background-color:#7bf7d4;
      color:black;
    }
  }
`

const HomePage = () => {
    return (
      <Container>
        <span>LabeX</span>
        <ButtonArea>
          <div>Ver Viagens</div>
          <div>Area de Admin</div>
        </ButtonArea>
      </Container>
    );
  }
  
  export default HomePage;