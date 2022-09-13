import DownArrow from "../../assets/images/Vector.png";
import UpArrow from "../../assets/images/Vector (1).png";
import Baloon from "../../assets/images/Vector (2).png";
import {
  Content,
  Form,
  InputArea,
  PostButton,
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
import { useParams } from "react-router";
import { getPostComments } from "../../services/requests";

const PostPage = () => {
  const currentScreen = useContext(Context);
  const clickedPost = useContext(Context);

  const params = useParams();
  const [comments, setComments] = useState();

  useProtectedPage();

  useEffect(() => {
    currentScreen.setCurrentScreen("post");
    getPostComments(saveData, params.id);
  }, []);

  const saveData = (data) => {
    setComments(data);
  };

  const postCard = clickedPost.clickedPost?.map((p) => {
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
          <Comments>
            <img src={Baloon} alt="baloon" />
            <span>{p.commentCount}</span>
          </Comments>
        </ButtonArea>
      </Post>
    );
  });

  const Postcomment = comments?.map((c) => {
    return (
      <Post key={c.id}>
        <SendBy>Enviado por: {c.username}</SendBy>
        <Title>{c.body}</Title>
        <ButtonArea>
          <Rating>
            <img src={UpArrow} alt="up arrow" />
            <span>{c.voteSum}</span>
            <img src={DownArrow} alt="down arrow" />
          </Rating>
        </ButtonArea>
      </Post>
    );
  });

  return (
    <div>
      <Content>
        <Form>
          <InputArea>
            {postCard}
            <textarea placeholder="Adicionar comentário"></textarea>
          </InputArea>
          <PostButton>Responder</PostButton>
          <Bar />
        </Form>
        {comments && comments.length === 0 ? (
          <div>Sem comentários.</div>
        ) : (
          Postcomment
        )}
      </Content>
    </div>
  );
};

export default PostPage;
