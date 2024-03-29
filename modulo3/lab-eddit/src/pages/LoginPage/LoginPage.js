import LabEddit from "../../assets/images/LabEddit.png";
import {
  Content,
  Logo,
  SubTitle,
  Form,
  Bar,
  InputArea,
  LoginButton,
  SignUpButton,
  Input,
  ToolTip,
  ToolTipText,
} from "./style";
import useForm from "../../hooks/useForm";
import { goToSignUpPage } from "../../routes/coordinator";
import { useNavigate } from "react-router";
import { login } from "../../services/requests";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";

const LoginPage = () => {
  const currentScreen = useContext(Context);

  useUnprotectedPage();

  useEffect(() => {
    currentScreen.setCurrentScreen("login");
  }, []);

  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate);
  };

  return (
    <div>
      <Content>
        <Logo src={LabEddit} alt="logo" />
        <SubTitle>O projeto de rede social da Labenu</SubTitle>
        <Form onSubmit={onSubmitForm}>
          <InputArea>
            <ToolTip>
              i
              <ToolTipText id="ToolTipText">
                Usuário teste: <br />
                <br />
                E-mail:
                <br /> demo.email@gmail.com
                <br />
                <br />
                Senha:
                <br /> demo.password <br />
              </ToolTipText>
            </ToolTip>
            <Input
              placeholder="E-mail"
              name={"email"}
              value={form.email}
              onChange={onChange}
              required
              type={"email"}
            />
            <Input
              placeholder="Senha"
              name={"password"}
              value={form.password}
              onChange={onChange}
              required
              type={"password"}
            />
          </InputArea>

          <LoginButton type={"submit"}>Continuar</LoginButton>
          <Bar />
          <SignUpButton
            type={"submit"}
            onClick={() => goToSignUpPage(navigate)}
          >
            Crie uma conta!
          </SignUpButton>
        </Form>
      </Content>
    </div>
  );
};

export default LoginPage;
