import React from "react";
import axios from "axios"
import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import voltar from "../assets/images/voltar.png"
import nota_musical from "../assets/images/nota-musical.png"
import AddTrack from "./AddTrack";

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  background:linear-gradient(#2C89C7, black);
  overflow-x:auto;
`
const Back = styled.img`
  margin-left:50px;
  margin-top:20px;
  background-color:#00000099;
  height:25px;
  width:25px;
  padding:5px;
  border-radius:50%;
  :hover{
    cursor:pointer;
  }
`
const Img = styled.div`
  background-color:#444;
  margin-left:50px;
  margin-right:20px;
  border-radius:5%;
  height:200px;
  width:200px;
  display:flex;
  justify-content:center;
  align-items:center;
  box-shadow: 5px 5px 50px #111;
`
const Name = styled.div`
  margin:20px;
  h1{
    margin:0px;
    font-size:50px;
  }
  h3{
    margin:0px;
    font-size:14px;
    color:#ccc;
    font-weight:normal;
  }
`
const Head = styled.div`
  display:flex;
  align-items:flex-end;
  margin-top:80px;
  margin-bottom:30px;
`
const Musics = styled.ol`
  background:linear-gradient(#00000050, #00000099);
  padding:50px;
`
const ListItem = styled.li`
  display:flex;
  align-items:center;
  padding:7px;
  :hover{
    background-color:#99999999;
    color:white;
  }
  img{
    height:30px;
  }
`
const Img2 = styled.div`
  background-color:#777;
  margin-left:50px;
  margin-right:20px;
  border-radius:5%;
  height:45px;
  width:45px;
  display:flex;
  justify-content:center;
  align-items:center;
  box-shadow: 5px 5px 50px #111;
`
const Artist = styled.div`
  margin-top:5px;
  font-size:13px;
  color:#aaa;
`
const Info = styled.div`
`
const Add = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  margin-left:20px;
  margin-right:20px;
  padding:20px;
  span{
      display:none;
  }
  h1{
      margin: 0px;;
      margin-bottom:5px;
      font-size:20px;
  }
  img{
      display:none;
  }
  button{
      padding:5px 10px;
      border-radius: 50px;
      font-size:16px;
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
      input{
          outline:0;
          border:0;
          max-width:200px;
          background-color:transparent;
          border-bottom:1px solid #ccc;
          margin-bottom:30px;
          font-size:20px;
          color:white;
      }
  }
  #ButtonArea{
    display:flex;
    justify-content:space-between;
    div{
        color:red;
        display:flex;
        align-items:center;
        font-size:20px;
        padding:5px;
        :hover{
            cursor:pointer;
            text-shadow:1px 1px 10px white;
        }
    }
  }
`



export default class PlayListDetails extends React.Component {
  state = {
    playlistTracks: [],
    playlistId: ""
  }

  componentDidMount(){
    this.getPlaylistTracks()
  }

  componentDidUpdate(){
    this.getPlaylistTracks()
  }

  getPlaylistTracks = () => {
    axios.get(`${BASE_URL}/${this.props.id}/tracks`,
    {
      headers:{
        Authorization: "andrei-freire"
      }
    }).then((res) => {
      this.setState({playlistTracks: res.data.result.tracks})
      this.setState({playlistId: this.props.id})
    }).catch((err) => {
      console.log(err.response.data)
    })
  }
  
  render(){
    const music = this.state.playlistTracks.map((music) => {
      return (
        <div>
          <ListItem>
            <Img2><img src={nota_musical} alt="nota-musical"/></Img2>
            <Info>
              {music.name}
              <Artist>{music.artist}</Artist>
            </Info>
          </ListItem>
        </div>
      )
    })
    return (
      <Container>
        <Back src={voltar} alt="voltar" onClick={this.props.back}/>
        <Head>
          <Img><img src={nota_musical} alt="nota-musical"/></Img>
          <Name>
            <span>PLAYLIST</span>
            <h1>{this.props.name}</h1>
            <h3>{`• ${this.state.playlistTracks.length} músicas`}</h3>
          </Name>
        </Head>
        <Add>
          <AddTrack
          id={this.state.playlistId}
          />
        </Add>
        <Musics>
        {music}
        </Musics>
      </Container>
    )
  }
}
