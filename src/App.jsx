import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import Landing from "./components/Landing/Landing.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
