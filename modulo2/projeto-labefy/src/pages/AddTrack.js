import React from "react";
import nota_musical from "../assets/images/nota-musical2.png"
import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import axios from "axios"

const Input = styled.div`
    display:flex;
    flex-direction: column;
`
// const ButtonArea = styled.div`
//     display:flex;
//     justify-content:space-between;
//     div{
//         color:red;
//         display:flex;
//         align-items:center;
//         font-size:20px;
//         padding:5px;
//         :hover{
//             cursor:pointer;
//             text-shadow:1px 1px 10px white;
//         }
//     }
// `

export default class AddTrack extends React.Component {
    state = {
        addTrack: false,
        TrackName: "",
        TrackArtist: "",
        TrackUrl: ""
    }

    addTrackToPlaylist = () => {
        const body = {
            name: this.state.TrackName,
            artist: this.state.TrackArtist,
            url: this.state.TrackUrl
        }

        axios.post(`${BASE_URL}/${this.props.id}/tracks`, body, {
            headers: {
                Authorization: "andrei-freire"
              }
        }).then(res => {
            alert(`Música: ${this.state.TrackName} adicionada com sucesso!`)
            this.setState({addTrack: false})
        }).catch(err => {
            alert(err.response.data.message)
        })
    }

    addTrack = () => {
        this.setState({addTrack: !this.state.addTrack})
    }

    back = () => {
        this.setState({addTrack: false})
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
      <div>
        {this.state.addTrack ?
            <div>
                <span>{`Playlist: ${this.props.name}`}</span>
                <Input>
                    <h1 id="name">Nome da música</h1>
                    <input  
                    autofocus
                    value={this.state.TrackName} 
                    onChange={this.handleInputTrackName}
                    />
                </Input>
                <Input>
                    <h1>Cantor ou banda da música </h1>
                    <input  
                    value={this.state.TrackArtist} 
                    onChange={this.handleInputTrackArtist}
                    />
                </Input>
                <Input>
                    <h1>URL da música para ser tocada</h1>
                    <input  
                    value={this.state.TrackUrl} 
                    onChange={this.handleInputTrackUrl}
                    /> 
                </Input> 
                <div id="ButtonArea">
                    <button onClick={this.addTrackToPlaylist}>Adicionar</button>
                    <div onClick={this.addTrack}>X</div>
                </div>
            </div>     
            :
            <div>
                <img src={nota_musical} alt="nota-musical"/>
                <span>{`Playlist: ${this.props.name}`}</span>
                <button onClick={this.addTrack}>Adicionar músicas</button>
            </div> 
        }
      </div>
    )
  }
}
