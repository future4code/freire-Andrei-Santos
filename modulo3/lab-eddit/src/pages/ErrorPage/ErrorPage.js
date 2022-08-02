import { useContext, useEffect } from "react";
import { Context } from "../../Context";
import { Container, LeftSide } from "./style";
import { goToFeedPage } from "../../routes/coordinator";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const currentScreen = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    currentScreen.setCurrentScreen("error");
  }, []);

  return (
    <Container>
      <LeftSide>
        <h1>404</h1>
        <h2>Oops!</h2>
        <span onClick={() => goToFeedPage(navigate)}>Voltar para o início</span>
      </LeftSide>
    </Container>
  );
};

export default ErrorPage;
