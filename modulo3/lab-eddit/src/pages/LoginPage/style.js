import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 1500px;
  width: 100%;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  font-family: "Noto Sans";
`;

export const Logo = styled.img`
  margin-top: 65px;
`;

export const SubTitle = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
`;

export const Bar = styled.div`
  background: ${primaryColor};
  height: 1px;
  max-width: 359px;
  width: 100%;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #d5d8de;
  border-radius: 4px;
  height: 60px;
  box-sizing: border-box;
  margin: 5px;
  width: 600px;
  padding: 15px;

  @media (max-width: 650px) {
    width: 97%;
  }
`;

export const SignUpButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 0px;
  max-width: 365px;
  width: 100%;
  height: 51px;
  background-color: white;
  border-radius: 27px;
  font-size: 18px;
  color: #fe7e02;
  border: 1px solid #fe7e02;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px #999;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 0px;
  max-width: 365px;
  width: 100%;
  height: 51px;
  background: ${primaryColor};
  border-radius: 27px;
  font-size: 18px;
  color: white;
  border: none;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px #999;
  }
`;

export const InputArea = styled.div`
  margin-top: 65px;
  margin-bottom: 40px;
`;
