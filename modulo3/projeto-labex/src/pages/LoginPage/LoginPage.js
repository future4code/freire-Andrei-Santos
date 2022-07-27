import styled from "styled-components";
import { IoMdRocket } from "react-icons/io"
import { goToHomePage } from "../../Routes/Cordinator";
import { useNavigate } from "react-router-dom";
import { login } from "../../Services/requests";
import React, { useState } from "react"

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  span{
    color:#00b786;
    font-size:30px;
    font-weight:bold;
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
  }
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
`

const LoginPage = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const handdleInputEmail = (event) => {
    setEmail(event.target.value)
  }

  const handdleInputPassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <Container>
      <Header>
        <LogoHeader onClick={() => goToHomePage(navigate)}>
          <IoMdRocket />
          LabeX
        </LogoHeader>
        <User onClick={() => goToHomePage(navigate)}>
          Voltar
        </User>
      </Header>
      <Content>
        <span>Login</span>
        <form>
          <input value={email} onChange={handdleInputEmail} placeholder="E-mail"></input>
          <input value={password} onChange={handdleInputPassword} placeholder="Senha" type="password"></input>
          <ButtonArea>
            <div onClick={() => goToHomePage(navigate)}>Voltar</div>
            <div onClick={() => login(email, password, navigate)}>Entrar</div>
          </ButtonArea>
        </form>
      </Content>
    </Container>
  );
}

export default LoginPage;