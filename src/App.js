import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import About from "./components/About";
import AppBar from "./components/AppBar";
import Introduction from "./components/Introduction";
import Skill from "./components/Skill";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar />
        <Introduction />
        <About />
        <Skill />
      </div>
    </ThemeProvider>
  );
}

export default App;
