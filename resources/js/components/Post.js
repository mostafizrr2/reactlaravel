import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class Post extends Component {
    constructor()
    {
        super();
        this.state({
            post: []
        })
    }

    componentWillMount(){
        
    }

    render() {
        return ( 
            <div>

            </div>
        );
    }
}

