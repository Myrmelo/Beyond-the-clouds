import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from './components/Error'
import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
   {/*<Provider store={store}>*/} 
    <Router>
      <App />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:city">
          <Home />
        </Route>
        <Route>
         <Error />
        </Route>
      </Switch>
    </Router>
    {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById('root')
);



