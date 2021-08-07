import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';


import ContactList from './contactpg';
import AddContactForm from './add-contact';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header>
            <h1><Link to="/">Contact List</Link></h1>
          </header>
          <Switch>
            <Route exact path='/' component={ContactList} />
            <Route path="/add" component={AddContactForm} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

const NoMatch = ({ Location }) => (
  <div>
    <h3>Page not found: {Location.pathname}</h3>
  </div>
)

export default App;
