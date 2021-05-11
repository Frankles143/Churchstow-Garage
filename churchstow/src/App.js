import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import { Home } from './components/Home';

import './App.css';

const App = () => {

    useEffect(() => {

    }, [])

    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
