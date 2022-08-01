import DownArrow from "../../assets/images/Vector.png";
import UpArrow from "../../assets/images/Vector (1).png";
import Baloon from "../../assets/images/Vector (2).png";
import {
  Content,
  Form,
  InputArea,
  PostButton,
  Input,
  Bar,
  Post,
  SendBy,
  Title,
  ButtonArea,
  Rating,
  Comments,
} from "./style";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useContext, useEffect } from "react";
import { ContextScreen } from "../../ContextScreen";

const FeedPage = () => {
  const currentScreen = useContext(ContextScreen);

  useProtectedPage();

  useEffect(() => {
    currentScreen.setCurrentScreen("feed");
  }, []);

  return (
    <div>
      <Content>
        <div>{currentScreen.currentScreen}</div>
        <Form>
          <InputArea>
            <Input placeholder="Título do post" />
            <textarea placeholder="Escreva seu post..."></textarea>
          </InputArea>
          <PostButton>Postar</PostButton>
          <Bar />
        </Form>

        <Post>
          <SendBy>Enviado por: labenu83</SendBy>
          <Title>
            Porque a maioria dos desenvolvedores usam Linux? ou as empresas de
            tecnologia usam Linux ?
          </Title>
          <ButtonArea>
            <Rating>
              <img src={UpArrow} alt="up arrow" />
              <span>211</span>
              <img src={DownArrow} alt="down arrow" />
            </Rating>
            <Comments>
              <img src={Baloon} alt="baloon" />
              <span>54</span>
            </Comments>
          </ButtonArea>
        </Post>

        <Post>
          <SendBy>Enviado por: labenu83</SendBy>
          <Title>
            Porque a maioria dos desenvolvedores usam Linux? ou as empresas de
            tecnologia usam Linux ?
          </Title>
          <ButtonArea>
            <Rating>
              <img src={UpArrow} alt="up arrow" />
              <span>211</span>
              <img src={DownArrow} alt="down arrow" />
            </Rating>
            <Comments>
              <img src={Baloon} alt="baloon" />
              <span>54</span>
            </Comments>
          </ButtonArea>
        </Post>

        <Post>
          <SendBy>Enviado por: labenu83</SendBy>
          <Title>
            Porque a maioria dos desenvolvedores usam Linux? ou as empresas de
            tecnologia usam Linux ?
          </Title>
          <ButtonArea>
            <Rating>
              <img src={UpArrow} alt="up arrow" />
              <span>211</span>
              <img src={DownArrow} alt="down arrow" />
            </Rating>
            <Comments>
              <img src={Baloon} alt="baloon" />
              <span>54</span>
            </Comments>
          </ButtonArea>
        </Post>
      </Content>
    </div>
  );
};

export default FeedPage;
