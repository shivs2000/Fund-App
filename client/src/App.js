import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import SignUp from './pages/SignUp';
import Details from './pages/Details';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route  exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
