import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Daos from "./Daos";
import Voting from './voting';



function App() {
  return (
    <Router>
      <Switch>
        <Route children={<Daos />} path={'/DAOs'} />
        <Route children={<Voting />} path={'/votings'} />
      </Switch>
    </Router>
  );
}

export default App;
