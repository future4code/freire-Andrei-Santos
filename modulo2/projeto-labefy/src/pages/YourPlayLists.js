import React from "react";
import axios from "axios";
import styled from "styled-components";
import { BASE_URL } from "../constants/urls"
import nota_musical from "../assets/images/nota-musical.png"

const Container = styled.div`
  width:100%;
  max-height:100vh;
  padding-right:0px;
`
const PlaylistArea = styled.div`
  width:100%;
  height:100vh;
  padding:50px;
  box-sizing: border-box;
  display:flex;
  flex-wrap: wrap;
  margin-right:50px;
  overflow-x: auto;
  h1{
    width:100%;
  }
`
const Div = styled.div`
    margin-left:20px;
    margin-right:20px;
    display:flex;
    justify-content:space-between;
    button{
      height:20px;
      color:red;
      background-color:#55555580;
      border:none;
      :hover{
        cursor:pointer;
        background-color:#ccc;
      }
    }
`
const Playlist = styled.div`
  background-color:#303030;
  height:300px;
  width:300px;
  border-radius:5%;
  margin:50px;
  :hover{
    cursor:pointer;
    background-color:#343434;
    /* color:#1ED760; */
  }
`
const Img = styled.div`
  background-color:#444;
  margin:20px;
  border-radius:5%;
  height:200px;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Load = styled.div`
  height:100%;
  display:flex;
  justify-content:center;
  padding-top:200px;
  font-size:100px;
`

export default class YourPlayLists extends React.Component {
  state = {
    playlists: [],
    currentScreen: ""
  }

  componentDidMount(){
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    axios.get(`${BASE_URL}`,
    {
      headers: {
        Authorization: "andrei-freire"
      }
    }).then((res) => {
      this.setState({playlists: res.data.result.list})
    }).catch((err) => {
      console.log(err.response)
    })
  }

  deletePlaylist = (id) => {
    if(window.confirm("Deseja excluir essa playlist?")){
      axios.delete(`${BASE_URL}/${id}`,
      {
        headers:{
          Authorization: "andrei-freire"
        }
      }).then((res) => {
        alert("Playlist excluída com sucesso!")
        this.getAllPlaylists()
        console.log(res)
      }).catch((err) => {
        alert(err.response.data)
      })
    }
    
  }

  render(){
    const playlists = this.state.playlists.map((playlist) => {
      return (
        <Playlist 
          key={playlist.id}>
          <Img
          onClick={() => this.props.onClickPL(playlist.id, playlist.name)}
          >
          <img src={nota_musical} alt="nota-musical"/>
          </Img>
          <Div>{playlist.name} <button onClick={()=> this.deletePlaylist(playlist.id)}>X</button></Div>
        </Playlist>
      )
    })
    return (
      <Container>
        {this.state.playlists.length === 0 ?
        <Load>Carregando...</Load>
        :
        <PlaylistArea>
          <h1>Playlists</h1>
          {playlists}
        </PlaylistArea>
        }
      </Container>
    )
  }
}
