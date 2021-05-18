import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Top from './components/Top';
import Entertainment from './components/Entertainment';
import Sports from './components/Sports';
import Business from './components/Business';
import Health from './components/Health';
import './components/news.css';
import Header from './components/Header';
import Search from './components/Search';
 
export default () => {
    return (

        <div className="ui container">
            <BrowserRouter>
            <div>
                <Header />
                <Route path="/" exact component={Top} />
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
