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
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    photo: ''
  })

  return (
    <UserContext.Provider className="container" value={[user, setUser]}>
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
    </UserContext.Provider>
  );
}

export default App;
