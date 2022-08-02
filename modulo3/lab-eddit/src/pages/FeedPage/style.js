import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1500px;
  width: 100%;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  font-family: "Noto Sans";
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;

  textarea {
    background: #ededed;
    border-radius: 12px;
    box-sizing: border-box;
    margin: 5px;
    width: 600px;
    padding: 15px;
    height: 130px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #6f6f6f;
    border: none;
    font-family: "Noto Sans";

    @media (max-width: 650px) {
      width: 97%;
    }
  }
`;

export const Input = styled.input`
  background: #ededed;
  border-radius: 12px;
  height: 60px;
  box-sizing: border-box;
  margin: 5px;
  width: 600px;
  padding: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #6f6f6f;
  border: none;

  @media (max-width: 650px) {
    width: 97%;
  }
`;

export const PostButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 0px;
  max-width: 365px;
  width: 100%;
  height: 51px;
  background: ${primaryColor};
  border-radius: 12px;
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
  margin-top: 30px;
  margin-bottom: 5px;
`;

export const Bar = styled.div`
  background: ${primaryColor};
  height: 1px;
  max-width: 359px;
  width: 100%;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Post = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 9px 10px;
  gap: 18px;
  margin-bottom: 10px;
  max-width: 600px;
  width: 100%;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  transition: 0.3s;
`;

export const SendBy = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #6f6f6f;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
`;

export const ButtonArea = styled.div`
  display: flex;
`;

export const Rating = styled.div`
  border: 1px solid #ddd;
  margin-right: 10px;
  padding: 5px;
  border-radius: 20px;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 10px;
    color: #6f6f6f;
    font-weight: 700;
  }

  :hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px #ccc;
  }
`;

export const Comments = styled.div`
  border: 1px solid #ddd;
  margin-right: 10px;
  padding: 5px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    font-size: 10px;
    color: #6f6f6f;
    font-weight: 400;
  }

  :hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px #ccc;
  }
`;
