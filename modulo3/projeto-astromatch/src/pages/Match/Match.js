// import React, { useState, useEffect } from "react"
import styled from "styled-components"
// import { BsChatDots } from "react-icons/bs"
// import { RiHeartsLine } from "react-icons/ri"

const Container = styled.div`

`
const Content = styled.div`
    display:flex;
    flex-direction:column;
    margin:30px 20px;
    margin-top:5px;
    height:525px;
`
const ContentInfo = styled.div`
    height:100%;
    position:relative;
    img{
        width:100%;
        height:100%;
        border-radius:10px;
    }
    #text{
        position:absolute;
        color:white;
        text-shadow:1px 1px 5px black;
        bottom:90px;
        left:10%;
        right:10%;
        margin-bottom:15px;
        div{
            display:flex;
            justify-content:center;
        }
    }
    #title{
        font-size:30px;
    }
    #age{
        font-size:30px;
        display:flex;
        align-items: center;
        padding-left:5px;
    }
    #description{
        font-size:16px;
        display:flex;
        justify-content:center;
        margin-top:2px;
        max-height:40px;
        padding-right:5px;
    }
`
const ContentButton = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:absolute;
    left:25%;
    right:25%;
    bottom:20px;
    #reprove{
        border:2px solid #333;
        height:60px;
        width:60px;
        background-color:white;
        text-align:center;
        line-height: 60px;
        border-radius:100px;
        font-size:30px;
        color:#aaa;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.1s;
        transition-duration: 0.1s;
        -webkit-transition-property: transform;
        transition-property: transform;
        :hover{
            cursor:pointer;
            -webkit-transform: scale(1.1);
            transform: scale(1.2);
        }
    }
    #approve{
        border:2px solid #333;
        background-color:white;
        height:60px;
        width:60px;
        text-align:center;
        line-height: 63px;
        border-radius:100px;
        font-size:25px;
        color:#F99DF0;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.1s;
        transition-duration: 0.1s;
        -webkit-transition-property: transform;
        transition-property: transform;
        :hover{
            cursor:pointer;
            -webkit-transform: scale(1.1);
            transform: scale(1.2);
        }
    }
`

const Match = (props) => {
    return (
        <Container>
          <Content>
            <ContentInfo>
                <img src="https://picsum.photos/seed/picsum/0/0" alt="foto"/>
                <div id="text">
                    <div>
                        <div id="title">Sallyaaa,</div>
                        <div id="age">27</div>
                    </div>
                    <div id="description">Gosto de dançar e de borboletas. Procuro alguém que suporte minhas pontas soltas.</div>
                </div>
                <ContentButton>
                <div id="reprove">X</div>
                <div id="approve">❤</div>
            </ContentButton>
            </ContentInfo>

          </Content>
      </Container>
    )
}

export default Match