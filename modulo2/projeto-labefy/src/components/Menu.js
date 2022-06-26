import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png"
import lupa from "../assets/images/lupa.png"
import inicio from "../assets/images/inicio.png"
import playlists from "../assets/images/playlists.png"

import { AiOutlineHome } from "react-icons/ai";
import { RiPlayListFill } from "react-icons/ri";
import { MdLibraryAdd } from "react-icons/md";







const Container = styled.div`
    border:1px solid black;
    width:300px;
    height:100vh;
    box-sizing: border-box;
    background-color:#111;
    color:#ccc;
`
const Logo = styled.div`
  display:flex;
  align-items: center;
  margin-top:20px;
  margin-left:20px;
  margin-bottom:50px;
  img{
    height:50px;
    margin-right:10px;
  }
  span{
    color:white;
    font-size:30px;
  }

`
const MenuOption = styled.div`
  display:flex;
  align-items:center;
  padding-left:20px;
  :hover{
      cursor:pointer;
      background-color:#ffffff20;
      color:#1ED760;
  }
  svg{
    height:30px;
    width:30px;
    margin-right:15px;
  }
`



export default class Menu extends React.Component {
  render(){
    return (
      <Container>
        <Logo>
          <img src={logo} alt="logo"/>
          <span>Labefy</span>
        </Logo>
        <MenuOption onClick={this.props.onClickHome}>
          <AiOutlineHome/>
          <p>Início</p>
        </MenuOption>
        <MenuOption onClick={this.props.onClickYourPL}>
          <RiPlayListFill/>
          <p>Suas playlists</p>
          <br/>
        </MenuOption>
        <MenuOption onClick={this.props.onClickCreatePL}>
          <MdLibraryAdd/>
          <p>Criar playlist</p>
        </MenuOption>
      </Container>
    )
  }
}
