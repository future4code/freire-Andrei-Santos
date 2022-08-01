import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import {
  Content,
  Title,
  Form,
  Text,
  InputArea,
  SignUpButton,
  Input,
  ConfirmBox,
} from "./style";
import { useContext, useEffect } from "react";
import { ContextScreen } from "../../ContextScreen";

const SignUpPage = () => {
  const currentScreen = useContext(ContextScreen);

  useUnprotectedPage();

  useEffect(() => {
    currentScreen.setCurrentScreen("sign-up");
  }, []);

  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Content>
        <Title>Olá, boas vindas ao LabEddit ;)</Title>
        <Form onSubmit={onSubmitForm}>
          <InputArea>
            <Input
              placeholder="Nome de usuário"
              name={"username"}
              value={form.username}
              onChange={onChange}
              required
            />
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
          <Text>
            Ao continuar, você concorda com o nosso{" "}
            <span>Contrato de usuário</span> e nossa{" "}
            <span>Política de Privacidade</span>
          </Text>
          <ConfirmBox>
            <input type="checkbox" required />
            <span>
              Eu concordo em receber emails sobre coisas legais no Labeddit
            </span>
          </ConfirmBox>
          <SignUpButton type={"submit"}>Cadastrar</SignUpButton>
        </Form>
      </Content>
    </div>
  );
};

export default SignUpPage;
