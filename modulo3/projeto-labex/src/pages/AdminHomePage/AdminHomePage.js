import styled from "styled-components";
import { IoMdTrash } from "react-icons/io"
import { IoMdRocket } from "react-icons/io"
import { goToCreateTripPage, goToHomePage, goToLoginPage, goToTripDetailsPage } from "../../Routes/Cordinator";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout, getTrips } from "../../Services/requests"

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  span{
    color:#00b786;
    font-size:30px;
    font-weight:bold;
    text-shadow:2px 2px 10px #ffffff90;
  }
`
const ButtonArea = styled.div`
  display:flex;
  margin-top:50px;
  margin-bottom:50px;

  @media (max-width:550px){
    flex-direction:column;
    margin-top:10px;
    margin-bottom:20px;
  }

  div{
    margin:0px 25px;
    padding:10px 20px;
    border-radius:20px;
    background-color:#00b786;
    transition:0.5s;
    display:flex;
    justify-content:center;

    @media (max-width:550px){
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
const CardArea = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:500px;

    @media (max-width:550px){
      width:250px;
    }
`
const Card = styled.div`
  background-color:#00b786;
  color:black;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-shadow:3px 3px 15px #ffffff90;
  border-radius:5px;
  padding:10px 20px;
  width: 100%;
  margin:10px;
  transition:0.5s;

  p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  :hover{
    background-color:#7bf7d4;
    cursor:pointer;
  }

  div{
    padding:2px;
    border-radius:50px;
    height:50px;
    width:50px;
    font-size:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    :hover{
      background-color:#ffffff70;
      cursor:pointer;
      color:#840202;
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

const AdminHomePage = () => {
  
  const navigate = useNavigate()

  const [listTrips, setListTrips] = useState([])

  useEffect(() => {
    getTrips(saveTrips)
    const token = localStorage.getItem("token")

    if(token  === null){
      navigate("/login")
    }
  }, [])

  const saveTrips = (data) => {
    setListTrips(data)
  }

  const card = listTrips.map((trip)=> {
    return (
      <Card key={trip.id} onClick={() => goToTripDetailsPage(navigate, trip.id)}>
      <p>{trip.name}</p>
      <div><IoMdTrash /></div>
      </Card>
    )
  })

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
        <span>Painel Administrativo</span>
        <ButtonArea>
          <div onClick={() => goToHomePage(navigate)}>Voltar</div>
          <div onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</div>
          <div onClick={() => logout(navigate)}>Logout</div>
        </ButtonArea>
        <CardArea>
          {card}
        </CardArea>
      </Content>
    </Container>
  );
}

export default AdminHomePage;