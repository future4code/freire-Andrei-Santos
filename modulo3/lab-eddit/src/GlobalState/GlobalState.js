import { useState } from "react";

const GlobalState = () => {
  const [currentScreen, setCurrentScreen] = useState("teste");

  return [currentScreen, setCurrentScreen];
};

export default GlobalState;
