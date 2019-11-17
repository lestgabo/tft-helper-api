import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import API from './components/API';

function App() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={API} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
