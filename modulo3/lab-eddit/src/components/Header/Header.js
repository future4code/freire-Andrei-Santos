import {
  HeaderContainer,
  Content,
  HeaderLogo,
  HeaderButtonLeft,
  HeaderButtonRight,
} from "./styled";
import Logo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { goToLoginPage } from "../../routes/coordinator";
import { ContextScreen } from "../../ContextScreen";

const Header = () => {
  const currentScreen = useContext(ContextScreen);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLoginPage(navigate);
    } else {
      goToLoginPage(navigate);
    }
  };

  return (
    <HeaderContainer>
      <Content>
        <HeaderButtonLeft>{currentScreen.currentScreen}</HeaderButtonLeft>
        <HeaderLogo src={Logo} alt="logo" />
        <HeaderButtonRight onClick={rightButtonAction}>
          {rightButtonText}
        </HeaderButtonRight>
      </Content>
    </HeaderContainer>
  );
};

export default Header;
