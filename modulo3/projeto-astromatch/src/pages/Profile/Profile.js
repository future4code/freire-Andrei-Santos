import React, { useState, useEffect } from "react"
import styled from "styled-components"
import profile from "./profile.jpg"


const Container = styled.div`

`
const Content = styled.div`
    display:flex;
    flex-direction:column;
    margin:20px;
    height:100%;
`

const Profile = (props) => {
    return (
        <Container>
          <Content>
            <img src={profile} alt="profile"/>
            <h1>Teste</h1>
          </Content>
      </Container>
    )
}

export default Profile