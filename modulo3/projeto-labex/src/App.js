import HomePage from "./pages/HomePage/HomePage"
import ListTripsPage from "./pages/ListTripsPage/ListTripsPage"
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage"
import TripDetailsPage from "./pages/TripDetailsPage/TripDetailsPage"
import CreateTripPage from "./pages/CreateTripPage/CreateTripPage"
import { createGlobalStyle } from "styled-components"
import React, { useState, useEffect } from "react"
import styled from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding:0px;
    font-family: 'Open Sans', sans-serif;
  }
  body{
    background-color:black;
    color:white;
  }
`

const ButtonArea = styled.div`
  background-color:white;
  height:100px;
  display:flex;
  align-items:center;

  div{
    margin:auto;
    margin-bottom:25px;
    margin-top:25px;
    max-width:900px;
    height:50px;
    background-color:#ccc;
    display:flex;
    justify-content:center;
  }


  button{
    margin:10px;

    :hover{
      cursor:pointer;
    }
  }
`
const Header = styled.div`
  height:100px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  border-bottom:1px solid #00b786;
  color:#00b786;
`
const Logo = styled.div`
  font-size:50px;
  text-shadow:2px 2px 10px #ffffff90;
`

const User = styled.div`
  font-size:20px;
  text-shadow:2px 2px 10px #ffffff90;
`


const App = () => {
  
  const [currentScreen, setCurrentScreen] = useState("HomePage")

  const changeScreen = () => {
    switch (currentScreen){
      case "HomePage":
        return <HomePage/>
      case "ListTripsPage":
        return <ListTripsPage/>
      case "ApplicationFormPage":
        return <ApplicationFormPage/>
      case "LoginPage":
        return <LoginPage/>
      case "AdminHomePage":
        return <AdminHomePage/>
      case "TripDetailsPage":
        return <TripDetailsPage/>
      case "CreateTripPage":
        return <CreateTripPage/>
      default:
        return <HomePage/>
    }
  }

  const onClickHomePage = () => {
    setCurrentScreen("HomePage")
  }
  const onClickListTripsPage = () => {
    setCurrentScreen("ListTripsPage")
  }
  const onClickApplicationFormPage = () => {
    setCurrentScreen("ApplicationFormPage")
  }
  const onClickLoginPage = () => {
    setCurrentScreen("LoginPage")
  }
  const onClickAdminHomePage = () => {
    setCurrentScreen("AdminHomePage")
  }
  const onClickTripDetailsPage = () => {
    setCurrentScreen("TripDetailsPage")
  }
  const onClickCreateTripPage = () => {
    setCurrentScreen("CreateTripPage")
  }


  return (
    <div className="App">
      <GlobalStyle/>
      <ButtonArea>
        <div>
          <button onClick={onClickHomePage}>HomePage</button>
          <button onClick={onClickListTripsPage}>ListTripsPage</button>
          <button onClick={onClickApplicationFormPage}>ApplicationFormPage</button>
          <button onClick={onClickLoginPage}>LoginPage</button>
          <button onClick={onClickAdminHomePage}>AdminHomePage</button>
          <button onClick={onClickTripDetailsPage}>TripDetailsPage</button>
          <button onClick={onClickCreateTripPage}>CreateTripPage</button>
        </div>
      </ButtonArea>

      <div>
        <Header>
          <Logo>LabeX</Logo>
          <User>Login</User>
        </Header>
        {changeScreen()}

      </div>
    </div>
  );
}

export default App;
