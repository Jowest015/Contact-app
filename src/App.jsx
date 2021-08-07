import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


import ContactList from './contactpg';
import AddContact from './add-contact';


function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
        <header>
          <h1><Link to="/">Contact List</Link></h1>
        </header>
        <Switch>
          <Route exact path='/' component={ContactList} />
          <Route path="/add" component={AddContact} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const NoMatch = ({ Location }) => (
  <div>
    <h3>Page not found: {Location.pathname}</h3>
  </div>
)

export default App;
