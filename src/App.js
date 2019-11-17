import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import './App.css';
import API from './components/API';

function App() {
    return (
        <HashRouter basename="/">
            <div>
                <Route exact path="/" component={API} />>
            </div>
        </HashRouter>
    );
}

export default App;
