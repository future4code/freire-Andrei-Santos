import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Menu from "./components/Menu"
import Home from "./pages/Home";
import CreatePlayList from "./pages/CreatePlayList";
import YourPlayLists from "./pages/YourPlayLists";
import PlayListDetails from "./pages/PlayListDetails";

const GlobalStyle = createGlobalStyle`
  body{
    margin:0px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:white;
    background-color:#222;
  }
`
const AppContainer = styled.div`
  max-height:100vh;
  margin:0px;
  padding:0px;
  display:flex;
`

export default class App extends React.Component {
  state = {
    currentScreen: "home",
    clickedPlaylistId: "",
    clickedPlaylistName: ""
  }

  changeScreen = () => {
    switch(this.state.currentScreen){
      case "home":
        return <Home/>
      case "yourPL":
        return <YourPlayLists onClickPL={this.onClickPL}/>
      case "createPL":
        return <CreatePlayList cancel={this.onClickHome}/>
      case "detailPL":
        return <PlayListDetails 
                id={this.state.clickedPlaylistId} 
                name={this.state.clickedPlaylistName} 
                back={this.onClickYourPL}
              />
      default:
        return <Home/>
    }
  }

  

  onClickHome = () => {
    this.setState({currentScreen: "home"})
  }

  onClickYourPL = () => {
    this.setState({currentScreen: "yourPL"})
  }

  onClickCreatePL = () => {
    this.setState({currentScreen: "createPL"})
  }

  onClickPL = (id, name) => {
    this.setState({currentScreen: "detailPL",
    clickedPlaylistId: id,
    clickedPlaylistName: name})
  }

  render(){
    return (
      <AppContainer>
        <GlobalStyle/>
        <Menu
          onClickHome={this.onClickHome}
          onClickYourPL={this.onClickYourPL}
          onClickCreatePL={this.onClickCreatePL}
        />
        {this.changeScreen()}
      </AppContainer>
    )
  }
}
