import Router from "./routes/Router";
import currentScreen from "./GlobalState/GlobalState";
import { useState } from "react";
import { Context } from "./Context";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState();
  const [clickedPost, setClickedPost] = useState();

  return (
    <Context.Provider
      value={{ currentScreen, setCurrentScreen, clickedPost, setClickedPost }}
    >
      <Router />
    </Context.Provider>
  );
};

export default App;
