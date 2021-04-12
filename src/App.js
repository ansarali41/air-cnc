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
import HotelDetails from './Components/SelectedLocation/HotelDetails/HotelDetails';
import Index from './Components/ReserveSteps';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/selectedLocation">
          <SelectedLocation />
        </Route>

        <Route path="/hotel/:hotelId">
          <HotelDetails />
        </Route>
        <Route path="/reserveSteps">
          <Index />
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
