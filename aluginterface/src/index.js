import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Apartamento from './Apartamento';
import Home from './Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './libs/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/home" component={Home} />
            <Route path="/apartamentos" component={Apartamento} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
