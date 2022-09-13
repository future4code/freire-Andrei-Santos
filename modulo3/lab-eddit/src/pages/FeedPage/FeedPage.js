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
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import { getPosts } from "../../services/requests";
import { goToPostPage } from "../../routes/coordinator";
import { useNavigate } from "react-router";

const FeedPage = () => {
  const currentScreen = useContext(Context);
  const clickedPost = useContext(Context);

  const navigate = useNavigate();
  const [posts, setPosts] = useState();

  useProtectedPage();

  useEffect(() => {
    currentScreen.setCurrentScreen("feed");
    getPosts(saveData);
  }, []);

  const saveData = (data) => {
    setPosts(data);
  };

  const onClickPost = (id) => {
    goToPostPage(navigate, id);

    const post = posts.filter((p) => {
      return p.id === id;
    });

    clickedPost.setClickedPost(post);
  };

  const post = posts?.map((p) => {
    return (
      <Post key={p.id}>
        <SendBy>Enviado por: {p.username}</SendBy>
        <Title>{p.body}</Title>
        <ButtonArea>
          <Rating>
            <img src={UpArrow} alt="up arrow" />
            <span>{p.voteSum}</span>
            <img src={DownArrow} alt="down arrow" />
          </Rating>
          <Comments onClick={() => onClickPost(p.id)}>
            <img src={Baloon} alt="baloon" />
            <span>{p.commentCount}</span>
          </Comments>
        </ButtonArea>
      </Post>
    );
  });

  return (
    <div>
      <Content>
        <Form>
          <InputArea>
            <Input placeholder="Título do post" />
            <textarea placeholder="Escreva seu post..."></textarea>
          </InputArea>
          <PostButton>Postar</PostButton>
          <Bar />
        </Form>
        {post}
      </Content>
    </div>
  );
};

export default FeedPage;
