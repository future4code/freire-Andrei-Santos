import React from "react";
import nota_musical from "../assets/images/nota-musical2.png"
import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import axios from "axios"

const Container = styled.div`
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
            border: 1px solid #1ED760;
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
`

export default class AddTrack extends React.Component {
    state = {
        addTrack: false,
        TrackName: "",
        TrackArtist: "",
        TrackUrl: ""
    }

    // addTrackToPlaylist = () => {
    //     const body = {
    //         name: this.state.TrackName,
    //         artist: this.state.TrackArtist,
    //         url: this.state.TrackUrl
    //     }

    //     axios.post(`${BASE_URL}/`)
    // }

    addTrack = () => {
        this.setState({addTrack: true})
    }

    handleInputTrackArtist = (event) => {
        this.setState({TrackArtist: event.target.value})
    }

    handleInputTrackName = (event) => {
        this.setState({TrackName: event.target.value})
    }

    handleInputTrackUrl = (event) => {
        this.setState({TrackUrl: event.target.value})
    }

  render(){
    return (
      <Container>
        {this.state.addTrack ?
            <div>
                <span>{`Playlist: ${this.props.name}`}</span>
                <h1>Cantor ou banda da música </h1>
                <input  
                autofocus
                value={this.state.TrackArtist} 
                onChange={this.handleInputTrackArtist}
                />
                <h1>Cantor ou banda da música </h1>
                <input  
                value={this.state.TrackName} 
                onChange={this.handleInputTrackName}
                />
                <h1>URL da música para ser tocada</h1>
                <input  
                value={this.state.handleInputTrackUrl} 
                onChange={this.handleInputName}
                />  
                <br/>
                <button onClick={this.addTrack}>Adicionar</button>
            </div>     
            :
            <div>
                <img src={nota_musical} alt="nota-musical"/>
                <span>{`Playlist: ${this.props.name}`}</span>
                <button onClick={this.addTrack}>Adicionar músicas</button>
            </div>
                         
        }
      </Container>
    )
  }
}
