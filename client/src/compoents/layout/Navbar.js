import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light mb-3" style={{ backgroundColor: "#e3f2fd" }}>
                <span className="navbar-brand mb-0 h1">Shopping Hub</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop by Category</a>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <span className="input-group" id="basic-addon1">
                            <input className="form-control sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary my-sm-0" type="submit">
                                <i className="fa fa-search" />
                            </button>
                        </span>
                        <button className="btn btn-lg my-2 my-sm-0">
                            <i className="fa fa-shopping-cart"></i>
                        </button>
                    </form>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;