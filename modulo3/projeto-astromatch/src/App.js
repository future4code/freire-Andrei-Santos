import styled, { createGlobalStyle } from "styled-components";
import axios from "axios"
import React, { useState, useEffect } from "react";
import Choice from "./pages/Choice/Choice.js";
import Chat from "./pages/Chat/Chat.js";
import Location from "./pages/Location/Location.js";
import Profile from "./pages/Profile/Profile.js";
import { BsChatDots } from "react-icons/bs";
import { RiHeartsLine } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { GoAlert } from "react-icons/go";


const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  *::-webkit-scrollbar {
    width: 14px;
    height: 14px;
  }

  *::-webkit-scrollbar-track {
    background: #bbb;
    border-radius: 14px;
    border:1px solid #aaa;
  }

  *::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 14px;
    border:1px solid #aaa;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: #efefef;
  }
`;
const Container = styled.div`
  background-color: #ccc;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
  color:#2836B5;
  span {
    font-size: 25px;
    font-weight: bold;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 660px;
  width: 400px;
  margin: 20px;
  position:relative;
`;
const ContentButton = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:flex-end;
  position:absolute;
  height:60px;
  bottom:10px;
  left:0px;
  right:0px;
  color:#555;
  font-size:25px;
  svg{
    :hover{
      cursor:pointer;
    }
  }
  ${(props) => {
      if(props.screen === "choice"){
        return '#choice{color:#2836B5;}'
      }
      else if(props.screen === "chat"){
        return '#chat{color:#2836B5;}'
      }
      else if(props.screen === "location"){
        return '#location{color:#2836B5;}'
      }
      else if(props.screen === "profile"){
        return '#profile{color:#2836B5;}'
      }
    }}
`
const Clear = styled.div`
  position:absolute;
  bottom:20px;
  right:10%;
  background-color:white;
  padding:5px;
  border-radius:5px;
  border: 1px solid black;
  display:flex;
  align-items:center;
  box-shadow:5px 5px 5px #777;

  svg{
    margin-right:5px;
  }

  :hover{
    cursor:pointer;
    border: 1px solid red;
    box-shadow:5px 5px 5px #555;

    svg{
      color:red;
    }
  }

`

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("choice");

  // useEffect(() => {
  //   getProfileToChoose()
  // }, [])

  // const getProfileToChoose = () => {
  //   axios.get("https://us-central1-missao-newton.cloudfunctions.net/astrochoice/:darvas/person", {
  //     headers: {
  //       Authorization: "andrei-freire"
  //     }
  //   }).then(res => {
  //     console.log(res.data.profile)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }

  

  const clear = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear", {
      headers: {
        Authorization: "andrei-freire"
      }
    }).then(res => {
      alert(res.data.message)
      window.location.reload(false);
    }).catch(err => {
      console.log(err)
    })
  }

  const switchScreen = () => {
    switch (currentScreen) {
      case "location":
        return <Location/>;
      case "choice":
        return <Choice clear={clear}/>;
      case "chat":
        return <Chat/>;
      case "profile":
        return <Profile/>;
      default:
        return <choice/>;
    }
  };

  const onClickLocation = () => {
    setCurrentScreen("location");
  };

  const onClickChoice = () => {
    setCurrentScreen("choice");
  };

  const onClickChat = () => {
    setCurrentScreen("chat");
  };

  const onClickProfile = () => {
    setCurrentScreen("profile");
  };

  return (
    <Container>
      <GlobalStyle />
      <Content>
        <Head>
          <span>ASTROMATCH</span>
        </Head>
        {switchScreen()}
        <ContentButton  screen={currentScreen}>
            <GoLocation id="location" onClick={onClickLocation}/>
            <RiHeartsLine id="choice" onClick={onClickChoice}/>
            <BsChatDots id="chat" onClick={onClickChat}/>
            <CgProfile id="profile" onClick={onClickProfile}/>
        </ContentButton>
      </Content>
      <Clear onClick={clear}>
        <GoAlert/> <span>Limpar todos os matches e perfis vistos.</span>
      </Clear>
    </Container>
  );
};

export default App;
