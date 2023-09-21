import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <div>
            <div className="cebecera1">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <span className="navbar-brand" >Navbar</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/infoimg" className="nav-link">Shoping</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </span>
                                    <ul className="dropdown-menu">
                                        <li><span className="dropdown-item" >Action</span></li>
                                        <li><span className="dropdown-item" >Another action</span></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><span className="dropdown-item" >Something else here</span></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="mx-3">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;