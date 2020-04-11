import React, { Component } from 'react';
import './style.css';

export default class Home extends Component {
    render() {
        return (
            <div className="container landing">
              <h1 className="display-4">Travel Planner</h1>
              <hr />
              <img src="https://images.unsplash.com/photo-1586442370076-4cefa0ebfa0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80" alt="" className="picture"></img>
            </div>
        )
    }
}