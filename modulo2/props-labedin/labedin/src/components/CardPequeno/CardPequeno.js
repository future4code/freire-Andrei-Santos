import React from 'react'
import styled from 'styled-components'

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;

    img {
    width: 30px;
    margin-right: 10px;
    }
`

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <img src={props.imagem} />
            <strong>{props.nome}</strong> &nbsp; {props.info}
        </SmallCardContainer>
    )
}

export default CardPequeno;