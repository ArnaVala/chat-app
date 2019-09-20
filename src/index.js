import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

import 'semantic-ui-css/semantic.min.css';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
