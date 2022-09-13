import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 50px);
  max-width: 1500px;
  width: 100%;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  font-family: "Noto Sans";
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 43px;
  margin-top: 25px;
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

export const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  span {
    color: #4088cb;
  }
`;

export const ConfirmBox = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin-top: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
  }
`;
