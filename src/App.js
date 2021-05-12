import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Top from './components/Top';
import Search from './components/Search';
import Entertainment from './components/Entertainment';
import Sports from './components/Sports';
import Business from './components/Business';
import Health from './components/Health';
import Header from './components/Header';

 
export default () => {
    return (
        <div className="ui container">
            <BrowserRouter>
            <div>
                <Header />
                <Route path="/Search" exact component={Search} />
                <Route path="/Entertainment" exact component={Entertainment} />
                <Route path="/Sports" exact component={Sports} />
                <Route path="/Business" exact component={Business} />
                <Route path="/Health" exact component={Health} />
            </div>
            </BrowserRouter>
        </div>
    );
};
