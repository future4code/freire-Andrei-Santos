import { useContext, useEffect } from "react";
import { ContextScreen } from "../../ContextScreen";

const ErrorPage = () => {
  const currentScreen = useContext(ContextScreen);

  useEffect(() => {
    currentScreen.setCurrentScreen("error");
  }, []);

  return <div>ErrorPage</div>;
};

export default ErrorPage;
