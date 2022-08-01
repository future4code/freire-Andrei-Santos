import styled from "styled-components";
import { goToBack, goToApplicationFormPage, goToHomePage, goToLoginPage } from "../../Routes/Cordinator";
import { useNavigate } from "react-router-dom";
import { IoMdRocket } from "react-icons/io"
import { getTrips } from "../../Services/requests";
import React, { useState, useEffect } from "react"


const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  span{
    color:#00b786;
    font-size:30px;
    font-weight:bold;
    text-shadow:2px 2px 10px #ffffff90;
    text-align:center;
  }
`
const ButtonArea = styled.div`
  display:flex;
  margin-top:50px;
  margin-bottom:50px;

  @media (max-width:315px){
      flex-direction:column;
  }

  div{
    margin:0px 25px;
    padding:10px 20px;
    border-radius:20px;
    background-color:#00b786;
    transition:0.5s;
    text-align:center;

    @media (max-width:315px){
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
  margin-top:30px;
  margin-left:20px;
  margin-right:20px;
  padding-bottom:20px;
  width:100%;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  max-width:1680px;
`
const Card = styled.div`
  background-color:#00b786;
  color:black;
  box-shadow:3px 3px 15px #ffffff90;
  border-radius:5px;
  padding:10px 20px;
  max-width: 500px;
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

const ListTripsPage = () => {

  const navigate = useNavigate()

  const [listTrips, setListTrips] = useState([])

  useEffect(() => {
    getTrips(saveTrips)
  }, [])

  const saveTrips = (data) => {
    setListTrips(data)
  }

  const trips = listTrips.map((trip) => {
    return (
      <Card>
        <p><b>Nome: </b>{trip.name}</p>
        <p><b>Descrição: </b>{trip.description}</p>
        <p><b>Planeta: </b>{trip.planet}</p>
        <p><b>Duração: </b>{trip.durationDays}</p>
        <p><b>Data: </b>{trip.date}</p>
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
      <ButtonArea>
        <div onClick={() => goToBack(navigate)}>Voltar</div>
        <div onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</div>
      </ButtonArea>
      <span>Lista de Viagens</span>
      <CardArea>
        {listTrips.length === 0 ? <div>Carregando...</div> :
          trips
        }
      </CardArea>
    </Container>
  );
}

export default ListTripsPage;