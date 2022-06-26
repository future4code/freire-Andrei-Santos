import React from "react";
import axios from "axios"
import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import voltar from "../assets/images/voltar.png"
import nota_musical from "../assets/images/nota-musical.png"



const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  background:linear-gradient(#2C89C7, black);
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
  height:10000px;
  padding:50px;
  overflow-x:auto;
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


export default class PlayListDetails extends React.Component {
  state = {
    playlistDetails: []
  }

  componentDidMount(){
    this.getPlaylistTracks()
  }

  getPlaylistTracks = () => {
    axios.get(`${BASE_URL}/${this.props.id}/tracks`,
    {
      headers:{
        Authorization: "andrei-freire"
      }
    }).then((res) => {
      this.setState({playlistDetails: res.data.result.tracks})
      console.log(this.state.playlistDetails)
    }).catch((err) => {
      console.log(err.response.data)
    })
  }
  
  render(){
    const music = this.state.playlistDetails.map((music) => {
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
            <h3>{`• ${this.state.playlistDetails.length} músicas`}</h3>
          </Name>
        </Head>
        <Musics>
          {music}
        </Musics>
      </Container>
    )
  }
}
