import React from "react";

const Inicio = () => {

    return(
        <div>
            <div className="cebecera1">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shoping</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="mx-3">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container-fluid py-2 content1 bg-info">
                <div>
                    <h2>slaida de prueba</h2>
                </div>
                <div className="bg-warning">
                    <div className="container-fluid text-center">
                        {[1, 2, 3].map(x => (
                            <div className="row" key={x}>
                                <div className="col-md-3 mb-2 d-flex justify-content-center align-items-center">
                                    <div className="card" style={{width: "20rem"}}>
                                        <div className="text-center">
                                            <img src={require("../imagenes/img1.jpg")} className="imgcss card-img-top img-fluid" alt="..."/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-2 d-flex justify-content-center align-items-center">
                                    <div className="card" style={{width: "20rem"}}>
                                        <div className="text-center">
                                            <img src={require("../imagenes/img2.jpg")} className="imgcss card-img-top img-fluid" alt="..."/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-2 d-flex justify-content-center align-items-center">
                                    <div className="card" style={{width: "20rem"}}>
                                        <div className="text-center">
                                            <img src={require("../imagenes/img3.jpg")} className="imgcss card-img-top img-fluid" alt="..."/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-2 d-flex justify-content-center align-items-center">
                                    <div className="card" style={{width: "20rem"}}>
                                        <div className="text-center">
                                            <img src={require("../imagenes/img4.jpg")} className="imgcss card-img-top img-fluid" alt="..."/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer1 bg-success">
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-md-4">
                        Column
                        </div>
                        <div className="col-md-8">
                        Column
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Inicio;