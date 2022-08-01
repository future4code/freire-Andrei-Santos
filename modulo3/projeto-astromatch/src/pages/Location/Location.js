import React, { useState, useEffect } from "react"
import styled from "styled-components"
import mapa from "./mapa.png"

const Container = styled.div`

`
const Content = styled.div`
    display:flex;
    flex-direction:column;
    margin:20px;
    height:525px;
`

const Location = (props) => {
    return (
        <Container>
          <Content>
            <img src={mapa} />
          </Content>
      </Container>
    )
}

export default Location