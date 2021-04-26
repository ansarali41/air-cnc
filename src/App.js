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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    isLoggedIn: ''
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

          <PrivateRoute path="/reserveSteps">
            <Index />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
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
