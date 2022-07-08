import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from "react";
import Match from "./pages/Match/Match.js";
import Chat from "./pages/Chat/Chat.js";
import Location from "./pages/Location/Location.js";
import Profile from "./pages/Profile/Profile.js";
import { BsChatDots } from "react-icons/bs";
import { RiHeartsLine } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

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
      if(props.screen === "match"){
        return '#match{color:#2836B5;}'
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

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("match");

  const switchScreen = () => {
    switch (currentScreen) {
      case "location":
        return <Location/>;
      case "match":
        return <Match/>;
      case "chat":
        return <Chat/>;
      case "profile":
        return <Profile/>;
      default:
        return <Match/>;
    }
  };

  const onClickLocation = () => {
    setCurrentScreen("location");
  };

  const onClickMatch = () => {
    setCurrentScreen("match");
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
            <RiHeartsLine id="match" onClick={onClickMatch}/>
            <BsChatDots id="chat" onClick={onClickChat}/>
            <CgProfile id="profile" onClick={onClickProfile}/>
        </ContentButton>
      </Content>
      
    </Container>
  );
};

export default App;
