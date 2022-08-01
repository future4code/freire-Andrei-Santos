import Router from "./routes/Router";
import currentScreen from "./GlobalState/GlobalState";
import { useState } from "react";
import { ContextScreen } from "./ContextScreen";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("teste");

  return (
    <ContextScreen.Provider value={{ currentScreen, setCurrentScreen }}>
      <Router />
    </ContextScreen.Provider>
  );
};

export default App;
