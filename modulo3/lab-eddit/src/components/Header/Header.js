import {
  HeaderContainer,
  Content,
  HeaderLogo,
  HeaderButtonLeft,
  HeaderButtonRight,
} from "./styled";
import Logo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { goToLoginPage, goToFeedPage } from "../../routes/coordinator";
import { Context } from "../../Context";

const Header = () => {
  const currentScreen = useContext(Context);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState();

  useEffect(() => {
    setRightButtonText(token ? "Logout" : "Login");
  }, [currentScreen.currentScreen]);

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
    <HeaderContainer currentScreen={currentScreen.currentScreen}>
      <Content>
        <HeaderButtonLeft
          onClick={() => goToFeedPage(navigate)}
          currentScreen={currentScreen.currentScreen}
        >
          X
        </HeaderButtonLeft>
        <HeaderLogo src={Logo} alt="logo" />
        <HeaderButtonRight onClick={rightButtonAction}>
          {rightButtonText}
        </HeaderButtonRight>
      </Content>
    </HeaderContainer>

    // <div>
    //   {currentScreen.currentScreen === "login" ? null : (
    //     <HeaderContainer>
    //       <Content>
    //         <HeaderButtonLeft>{currentScreen.currentScreen}</HeaderButtonLeft>
    //         <HeaderLogo src={Logo} alt="logo" />
    //         <HeaderButtonRight onClick={rightButtonAction}>
    //           {rightButtonText}
    //         </HeaderButtonRight>
    //       </Content>
    //     </HeaderContainer>
    //   )}
    // </div>
  );
};

export default Header;
