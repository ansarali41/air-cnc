import './App.css';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import SelectedLocation from './Components/SelectedLocation/SelectedLocation';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/selected-location">
          <SelectedLocation />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
