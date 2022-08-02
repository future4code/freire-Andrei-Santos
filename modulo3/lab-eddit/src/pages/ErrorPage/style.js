import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #006897;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto, sans-serif;

  h1 {
    font-size: calc(9vw);
    margin: 0px;
    font-family: "Sigmar One", cursive;
    color: white;
  }

  h2 {
    font-size: calc(4vw);
    color: #fe8202;
    margin: 0px;
  }

  span {
    color: rgb(255, 255, 255);
    text-decoration: none;
    display: inline-block;
    border: 1px solid rgb(255, 255, 255);
    padding: 20px 15px;
    border-radius: 30px;
    margin-top: 30px;

    :hover {
      border: 1px solid rgb(204, 204, 204);
      color: rgb(204, 204, 204);
      cursor: pointer;
    }
  }
`;
