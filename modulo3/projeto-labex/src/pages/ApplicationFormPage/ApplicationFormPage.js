import styled from "styled-components";
import { IoMdRocket } from "react-icons/io"
import { goToBack, goToHomePage, goToLoginPage } from "../../Routes/Cordinator";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display:flex;
  flex-direction:column;
`
const ButtonArea = styled.div`
  display:flex;
  margin-top:20px;
  justify-content:space-around;

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

  span{
    color:#00b786;
    font-size:30px;
    font-weight:bold;
    text-align:center;
    padding-left:10px;
    padding-right:10px;
  }

  form{
    display:flex;
    flex-direction:column;
    align-items:center;
    width:500px;
    margin-top:20px;

    @media (max-width:550px){
      width:250px;
    }
  }

  input{
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border:1px solid #343434;
    margin: 0px 0px 15px;
    background-color:#232323;
    color:white;

    ::placeholder{
      color:#777;
    }
  }

  select{
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border:1px solid #343434;
    margin: 0px 0px 15px;
    background-color:#232323;
    color:white;

    @media (max-width:550px){
      width:270px;
    }

    ::placeholder{
      color:#777;
    }
  }
`

const ApplicationFormPage = () => {

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
        <span>Inscreva-se para uma viagem</span>
        <form>
          <select>
            <option disabled selected>Escolha uma Viagem</option>
            <option>opcao 1</option>
            <option>opcao 2</option>
            <option>opcao 3</option>
            <option>opcao 4</option>
            <option>opcao 5</option>
            <option>opcao 6</option>
            <option>opcao 7</option>
          </select>
          <input placeholder="Nome"></input>
          <input placeholder="Idade"></input>
          <input placeholder="Texto de Candidatura"></input>
          <input placeholder="Profissao"></input>
          <select>
            <option disabled selected>Escolha um Pais</option>
            <option>opcao 1</option>
            <option>opcao 2</option>
            <option>opcao 3</option>
            <option>opcao 4</option>
            <option>opcao 5</option>
            <option>opcao 6</option>
            <option>opcao 7</option>
          </select>
          <ButtonArea>
            <div onClick={() => goToBack(navigate)}>Voltar</div>
            <div>Enviar</div>
          </ButtonArea>
        </form>
      </Content>
    </Container>
  );
}

export default ApplicationFormPage;