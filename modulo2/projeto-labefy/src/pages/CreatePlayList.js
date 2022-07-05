import React from "react";
import axios from "axios";
import styled from "styled-components";
import AddTrackToNewPlaylist from "./AddTrack";
import { BASE_URL } from "../constants/urls"
import AddTrack from "./AddTrack";

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
const Add = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  padding-top:30px;
  height:100vh;
  width:100%;
  span{
      margin-top:20px;
      font-size:50px;
      margin-bottom:50px;
  }
  h1{
      margin-bottom: 0px;;
      font-size:25px;
  }
  img{
      height:180px;
      margin-top:30px;
  }
  button{
      margin-top:30px;
      padding:20px 40px;
      border-radius: 50px;
      font-size:20px;
      background-color:white;
      font-weight:bold;
      :hover{
          background-color:#ffffff10;
          border: 2px solid #1ED760;
          color:#1ED760;
          cursor:pointer;
      }
  }
  div{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      input{
          width:250px;
          width:80%;
          font-size:50px;
          outline:0;
          border:0;
          border-bottom:1px solid #ccc;
          color:white;
          background-color:#222;
          padding-bottom:10px;
      }
  }
  #ButtonArea{
    div{
      display:none;
    }
  }
`

export default class CreatePlayList extends React.Component {
  state = {
    name: "",
    id: "",
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
      this.getPlaylistId()
    }).catch((err) => {
      alert(err.response.data.message)
    })
  }

  handleInputName = (event) => {
    this.setState({name: event.target.value})
  }

  getPlaylistId = () => {
    axios.get(`${BASE_URL}`,
    {
      headers: {
        Authorization: "andrei-freire"
      }
    }).then((res) => {
      const newPL = res.data.result.list.filter((pl) => {
        return pl.name === this.state.name
      })

      const id = newPL.map((pl) => {
        return pl.id
      })

      this.setState({id: id})
    }).catch((err) => {
      console.log(err.response)
    })
  }



  render(){
    return (
      <Container>
        {this.state.currentScreen === "addTrack" 

          ? 

          <Add>
            <AddTrack
              name={this.state.name}
              id={this.state.id}
            /> 
          </Add>

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
