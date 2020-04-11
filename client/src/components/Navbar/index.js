import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-light bg-light navbar-expand-lg">
                <Link to="/" className="navbar-brand">Travel Planner</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                        <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Trip</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/mytrips" className="nav-link">My Trips</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

