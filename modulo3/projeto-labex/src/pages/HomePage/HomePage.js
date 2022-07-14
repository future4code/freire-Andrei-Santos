import styled from "styled-components";
import { IoMdRocket } from "react-icons/io"
import { goToListTripsPage, goToAdminHomePage, goToHomePage, goToLoginPage } from "../../Routes/Cordinator";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`
const ButtonArea = styled.div`
  display:flex;

  @media (max-width:450px){
    flex-direction:column;
  }

  div{
    margin:0px 30px;
    font-size:20px;
    padding:10px 20px;
    border-radius:20px;
    background-color:#00b786;
    transition:0.5s;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;

    @media (max-width:450px){
      margin-top:10px;
    }


    :hover{
      cursor:pointer;
      box-shadow:2px 2px 10px #ffffff90;
      background-color:#7bf7d4;
      color:black;
    }
  }
`
const Logo = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  color:#00b786;
  margin-bottom:50px;

  #title{
    font-size:100px;
    font-weight:bold;
  }

  #sub-title{
    font-size:16px;
    font-weight:bold;
    text-align:center;
  }

  svg{
    font-size:250px;
  }
`
const Header = styled.div`
  height:100px;
  width:100%;
  display:flex;
  justify-content:space-around;
  align-items:center;
  border-bottom:1px solid #00b78640;
  color:black;
  background-color:#00b786;
`
const LogoHeader = styled.div`
  font-size:40px;
  text-shadow:2px 2px 10px #ffffff90;
  display:flex;
  align-items:center;
  transition:0.5s;
  font-weight:bold;

  svg{
    font-size:70px;
    text-shadow:2px 2px 10px #ffffff90;
  }

  :hover{
      cursor:pointer;
      color:#7bf7d4;
    }
`
const User = styled.div`
  font-size:20px;
  text-shadow:2px 2px 10px #ffffff90;
  font-weight:bold;

  :hover{
      cursor:pointer;
      color:#7bf7d4;
    }
`
const Content = styled.div`
  min-height:calc(100vh - 160px);
  margin-top:20px;
  margin-bottom:20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const HomePage = () => {

  const navigate = useNavigate()

  return (
    <Container>
      <Header>
        <LogoHeader onClick={() => goToHomePage(navigate)}>
          <IoMdRocket />
          LabeX
        </LogoHeader>
        <User onClick={() => goToLoginPage(navigate)}>
          Login
        </User>
      </Header>
      <Content>
        <Logo>
          <IoMdRocket />
          <span id="title">LabeX</span>
          <span id="sub-title">Encontre as melhores viagens espaciais!</span>
        </Logo>
        <ButtonArea>
          <div onClick={() => goToListTripsPage(navigate)}>Ver Viagens</div>
          <div onClick={() => goToAdminHomePage(navigate)}>Area de Admin</div>
        </ButtonArea>
      </Content>
    </Container>
  );
}

export default HomePage;