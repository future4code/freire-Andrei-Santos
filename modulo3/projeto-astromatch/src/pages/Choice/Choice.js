import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { clear } from "@testing-library/user-event/dist/clear";
import { AiFillHeart } from "react-icons/ai"
import { MdCancel } from "react-icons/md"




const Container = styled.div``;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 20px;
  margin-top: 5px;
  height: 525px;
  width: 360px;

  @media (max-width: 415px) {
    width: 310px;
  }
  @media (max-height: 800px) {
    height: 465px;
  }
`;
const ContentInfo = styled.div`
  height: 525px;
  width: 360px;
  position: relative;

  @media (max-width: 415px) {
    width: 310px;
  }
  @media (max-height: 800px) {
    height: 465px;
  }
  img {
    height: 525px;
    width: 360px;
    border-radius: 10px;

    @media (max-width: 415px) {
      width: 310px;
    }
    @media (max-height: 800px) {
      height: 465px;
    }
  }
  #text {
    position: absolute;
    color: white;
    text-shadow: 1px 1px 5px black;
    bottom: 90px;
    left: 10%;
    right: 10%;
    margin-bottom: 15px;
    div {
      display: flex;
      justify-content: center;
    }
  }
  #title {
    font-size: 30px;
  }
  #age {
    font-size: 30px;
    display: flex;
    align-items: center;
    padding-left: 5px;
  }
  #description {
    font-size: 16px;
    display: flex;
    justify-content: center;
    margin-top: 2px;
    max-height: 40px;
    padding-right: 5px;
  }
`;
const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 25%;
  right: 25%;
  bottom: 20px;
  #reprove {
    border: 1px solid #333;
    height: 60px;
    width: 60px;
    background-color: white;
    text-align: center;
    line-height: 55px;
    border-radius: 100px;
    font-size: 30px;
    color: #aaa;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-property: transform;
    transition-property: transform;
    :hover {
      cursor: pointer;
      -webkit-transform: scale(1.1);
      transform: scale(1.2);
    }
  }
  #approve {
    border: 1px solid #333;
    background-color: white;
    height: 60px;
    width: 60px;
    text-align: center;
    line-height: 70px;
    border-radius: 100px;
    font-size: 25px;
    color: #f99df0;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-property: transform;
    transition-property: transform;
    :hover {
      cursor: pointer;
      -webkit-transform: scale(1.1);
      transform: scale(1.2);
    }
  }
`;
const Load = styled.div`
  color: #2836c5;
  display: flex;
  flex-direction: column;
  height: 525px;
  justify-content: center;
  align-items: center;

  @-webkit-keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  @keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-animation-name: hvr-pulse;
    animation-name: hvr-pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
  div {
    padding: 20px 50px;
    margin: 0px 10px;
    margin-top: 50px;
    background-color: #eee;
    border-radius: 5px;
  }
`;

const Choice = (props) => {
  const [profileToChoose, setProfileToChoose] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person",
        {
          headers: {
            Authorization: "andrei-freire",
          },
        }
      )
      .then((res) => {
        setProfileToChoose(res.data.profile);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear",
        {
          headers: {
            Authorization: "andrei-freire",
          },
        }
      )
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const choosePerson = (id, response) => {
    const body = {
      id: id,
      choice: response,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person",
        body,
        {
          headers: {
            Authorization: "andrei-freire",
          },
        }
      )
      .then((res) => {
        setLoad(true);
        getProfileToChoose();
      })
      .catch((err) => {
        console.log(err);
        clear();
      });
  };

  return (
    <Container>
      <Content>
        {profileToChoose == null ? (
          <Load>
            <FaHeart size="100px" />
            <div>
              Não há ningúem perto de você. Limpe os perfis vistos para
              recomeçar.
            </div>
          </Load>
        ) : (
          <div>
            {load ? (
              <Load>
                <FaHeart size="100px" />
              </Load>
            ) : (
              <ContentInfo>
                <img
                  src={profileToChoose.photo}
                  alt={profileToChoose.photo_alt}
                />
                <div id="text">
                  <div>
                    <div id="title">{profileToChoose.name},</div>
                    <div id="age">{profileToChoose.age}</div>
                  </div>
                  <div id="description">{profileToChoose.bio}</div>
                </div>
                <ContentButton>
                  <div
                    id="reprove"
                    onClick={() => choosePerson(profileToChoose.id, false)}
                  >
                    x
                  </div>
                  <div
                    id="approve"
                    onClick={() => choosePerson(profileToChoose.id, true)}
                  >
                    <AiFillHeart/>
                  </div>
                </ContentButton>
              </ContentInfo>
            )}
          </div>
        )}

        {/* <Load>
          <FaHeart size="200px" />
        </Load> */}
      </Content>
    </Container>
  );
};

export default Choice;
