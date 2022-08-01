import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const HeaderContainer = styled.header`
  background: #ededed;
  height: 50px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 1500px;
  width: 100%;
  height: 50px;
  margin: auto;
`;

export const HeaderLogo = styled.img`
  height: 30px;
  margin: auto;
`;

export const HeaderButtonLeft = styled.div`
  margin-left: 20px;
  position: absolute;
  left: 0;
  color: #a3a3a3;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 100;
  font-size: 35px;
  height: 50px;
  line-height: 40px;
  text-align: center;
`;

export const HeaderButtonRight = styled.div`
  margin-right: 20px;
  position: absolute;
  right: 0;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #4088cb;

  :hover {
    cursor: pointer;
  }
`;
