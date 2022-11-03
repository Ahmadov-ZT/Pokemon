import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views";
import Details from "./views/details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/:details' component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
