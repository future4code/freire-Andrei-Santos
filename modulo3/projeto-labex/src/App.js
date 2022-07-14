import { createGlobalStyle } from "styled-components"
import { Router } from "./Routes/Router";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding:0px;
    font-family: 'Open Sans', sans-serif;
  }
  body{
    background-color:black;
    color:white;
  }
`

const App = () => {

  return (
    <div>
      <GlobalStyle/>
      <Router/>
    </div>
  );
}
export default App;
