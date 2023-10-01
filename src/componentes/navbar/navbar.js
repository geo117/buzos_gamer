import React from "react";
    import { Link } from 'react-router-dom';
import {
    Dropdown,
} from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';

const Navbar = () => {

    return (
        <div>
            <div className="cebecera1">
                <nav className="navbar navbar-expand-lg navegacion">
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
                                    <span className="nav-link">Shopping</span>
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
                                <li className="nav-item d-flex justify-content-center align-items-center">
                                    <div className="px-2">
                                        <Link to="/login" className="login">
                                            <AiIcons.AiOutlinePoweroff className="fs-3" title="iniciar sesion" />
                                        </Link>
                                    </div>
                                </li>
                                <li className="nav-item d-flex justify-content-center align-items-center">
                                    <div className="px-2">
                                        <FaIcons.FaShoppingCart className="fs-3" title="compras" />
                                    </div>
                                </li>
                                <li className="nav-item d-flex justify-content-center align-items-center">
                                    <div className="px-2">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                                <BiIcons.BiSolidUserCircle className="fs-3"/>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="links">
                                                <Dropdown.Item>
                                                    <Link to="/Perfil">
                                                        Perfil
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-1">Compras</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Cargar Informacion</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Reportes</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;