import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { GoAlert } from "react-icons/go";
// import { BsChatDots } from "react-icons/bs"
// import { RiHeartsLine } from "react-icons/ri"

const Container = styled.div`
  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 20px;
  margin-top: 5px;
  height: 525px;
  overflow-x: auto;
  div {
    display: flex;
    align-items: center;
    padding: 10px;
    :hover {
      background-color: #ccc;
      cursor: pointer;
    }
    img {
      border-radius: 50%;
      margin-right: 10px;
      height: 50px;
      width: 50px;
    }
  }
`;

const Chat = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches",
        {
          headers: {
            Authorization: "andrei-freire",
          },
        }
      )
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const matchesList = matches.map((match) => {
    return (
      <div key={match.id}>
        <img src={match.photo} alt={match.photo_alt} />
        <span>{match.name}</span>
      </div>
    );
  });

  return (
    <Container>
      <Content>{matchesList}</Content>
    </Container>
  );
};

export default Chat;
