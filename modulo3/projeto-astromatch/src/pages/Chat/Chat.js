import React, { useState, useEffect } from "react"
import styled from "styled-components"
// import { BsChatDots } from "react-icons/bs"
// import { RiHeartsLine } from "react-icons/ri"

const Container = styled.div`
::-webkit-scrollbar-track {
    background-color: #F4F4F4;
}
::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
    background: #dad7d7;
}
`
const Content = styled.div`
    display:flex;
    flex-direction:column;
    margin:30px 20px;
    margin-top:5px;
    height:525px;
    overflow-x:auto;
    div{
      display:flex;
      align-items:center;
      margin-bottom:10px;
      img{
        border-radius:50%;
        margin-right:10px;
      }
    }
`

const Chat = (props) => {
    return (
        <Container>
          <Content>
            <div>
            <img src="https://picsum.photos/seed/picsum/50/50" alt="foto"/>
            <span>Nome</span>
            </div>

            <div>
            <img src="https://picsum.photos/seed/picsum/50/50" alt="foto"/>
            <span>Nome</span>
            </div>
            
            <div>
            <img src="https://picsum.photos/seed/picsum/50/50" alt="foto"/>
            <span>Nome</span>
            </div>
            
            <div>
            <img src="https://picsum.photos/seed/picsum/50/50" alt="foto"/>
            <span>Nome</span>
            </div>
            
            <div>
            <img src="https://picsum.photos/seed/picsum/50/50" alt="foto"/>
            <span>Nome</span>
            </div>
            
            <div>
            <img src="https://picsum.photos/seed/picsum/50/50" alt="foto"/>
            <span>Nome</span>
            </div>
            
            <div>
            <img src="https://picsum.photos/seed/picsum/50/50" alt="foto"/>
            <span>Nome</span>
            </div>
            
            <div>
            <img src="https://picsum.photos/seed/picsum/50/50" alt="foto"/>
            <span>Nome</span>
            </div>
            
            <div>
            <img src="https://picsum.photos/seed/picsum/50/50" alt="foto"/>
            <span>Nome</span>
            </div>
            
            <div>
            <img src="https://picsum.photos/seed/picsum/50/50" alt="foto"/>
            <span>Nome</span>
            </div>
            
            <div>
            <img src="https://picsum.photos/seed/picsum/50/50" alt="foto"/>
            <span>Nome</span>
            </div>
            
            <div>
            <img src="https://picsum.photos/seed/picsum/50/50" alt="foto"/>
            <span>Nome</span>
            </div>
            
            <div>
            <img src="https://picsum.photos/seed/picsum/50/50" alt="foto"/>
            <span>Nome</span>
            </div>
          </Content>
      </Container>
    )
}

export default Chat