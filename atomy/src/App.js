import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import { Header } from "./Header";
import { Introduce } from "./Introduce";
import { IntroduceAtomy } from "./IntroduceAtomy";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Introduce></Introduce>
      <IntroduceAtomy></IntroduceAtomy>
    </ThemeProvider>
  );
}

export default App;
