import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={props.imagem} />
            <strong>{props.nome}</strong> &nbsp; {props.info}
        </div>
    )
}

export default CardPequeno;