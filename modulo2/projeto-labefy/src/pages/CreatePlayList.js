import React from "react";
import axios from "axios";
import styled from "styled-components";
import AddTrack from "./AddTrack";
import { BASE_URL } from "../constants/urls"

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    height:100vh;
    width:100%;
`
const Name = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:100px;
    font-size: 50px;
    width:100%;
    height:100%;
    span{
      margin-bottom:50px;
    }
    input{
      width:80%;
      font-size:100px;
      outline:0;
      border:0;
      border-bottom:1px solid #ccc;
      color:white;
      background-color:#222;
      padding-bottom:10px;
      margin-bottom:50px;
    }
`
const Buttons = styled.div`
  display:flex;
`
const Cancel = styled.div`
  background-color:#222;
  border:0px;
  color:white;
  font-size:20px;
  margin-right:50px;
  margin-left:50px;
  :hover{
    cursor:pointer;
  }
`
const Create = styled.div`
  background-color:#222;
  border:0px;
  color:#1ED760;
  font-size:20px;
  margin-right:50px;
  margin-left:50px;
  :hover{
    cursor:pointer;
  }
`


export default class CreatePlayList extends React.Component {
  state = {
    name: "",
    currentScreen: "createPL"
  }

  createPL = () => {
    const body = {
      name: this.state.name
    }
    axios.post(`${BASE_URL}`,
    body, {
      headers: {
        Authorization: "andrei-freire"
      }
    }).then((res) => {
      alert(`Playlist ${this.state.name} criada com sucesso!`)
      this.setState({currentScreen: "addTrack"})
      console.log(res)
    }).catch((err) => {
      alert(err.response.data.message)
    })
  }

  handleInputName = (event) => {
    this.setState({name: event.target.value})
  }



  render(){
    return (
      <Container>
        {this.state.currentScreen === "addTrack" ? 
          <AddTrack
            name={this.state.name}
          /> 
          :
          <Name>
          <span>Dê um nome á sua playlist.</span>
          <input 
          autoFocus
          value={this.state.name} 
          onChange={this.handleInputName}
          />
          <Buttons>
            <Cancel onClick={this.props.cancel}>CANCELAR</Cancel>
            <Create onClick={this.createPL}>CRIAR</Create>
          </Buttons>

          </Name>
        }               
      </Container>
    )
  }
}
