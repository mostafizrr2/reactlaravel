import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class Root extends Component {
    render() {
        return ( 

            <div>
               <br/>
               <br/>
               <br/>
               < Blog />
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render( <Root/> , document.getElementById('root') );
}