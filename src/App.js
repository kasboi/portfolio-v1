import Navbar from "./Navbar";
import Background from "./Background"
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./components/styles/Global";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Theme } from "./components/styles/Theme";
import Projects from "./Projects";
import Contact from "./Contact";

const { theme, invertTheme } = Theme;

function App() {
  const [here, setHere] = useState(theme) //Setting the theme mode
  const [open, setOpen] = useState('') //toggle hamburger
  const [modal, setModal] = useState('') // toggle modal

  return (
  <>
  <ThemeProvider theme={here}>
    <GlobalStyle />
    <Router>
      <Navbar 
        here={here} setHere={setHere} theme={theme} invertTheme={invertTheme} 
        open={open} setOpen={setOpen} modal={modal} setModal={setModal}
      />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home 
            open={open} setOpen={setOpen} modal={modal} setModal={setModal}
          />
        </Route>
        <Route path="/background">
          <Background />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
  </>
  );
}

export default App;