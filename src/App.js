import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Dummy from "./pages/dummy";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dum" component={Dummy} />
      </Switch>
    </div>
  );
}

export default App;
