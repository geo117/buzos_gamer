import React from "react";
import { Link } from 'react-router-dom';

const Inicio = () => {
    const id = 'Inicio';

    return (
        <div>
            <div className="container-fluid py-2 content1">
                <div className="text-center">
                    <h2>Todo en buzos</h2>
                    <p className="texto1">
                        <b>los mejores buzos gamer en el mercado y mucho mas</b>
                    </p>
                </div>
                <div>
                    <div className="container-fluid text-center">
                        {[1, 2, 3].map(x => (
                            <div className="row" key={x}>
                                <div className="col-md-3 mb-2 d-flex justify-content-center align-items-center">
                                    <div className="card" style={{ width: "20rem" }}>
                                        <div className="text-center">
                                            <Link to="/infoimg">
                                                <img src={require("../imagenes/img1.jpg")} className="imgcss card-img-top img-fluid" alt="..." />
                                            </Link>
                                        </div>
                                        <div className="card-body text-start">
                                            <p className="card-title m-0">
                                                <b>Buzo Gamer Valoran Equipo Rojo</b>
                                            </p>
                                            <p className="card-title m-0">
                                                <b>$ 70.000</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-2 d-flex justify-content-center align-items-center">
                                    <div className="card" style={{ width: "20rem" }}>
                                        <div className="text-center">
                                            <Link to="/infoimg">
                                                <img src={require("../imagenes/img2.jpg")} className="imgcss card-img-top img-fluid" alt="..." />
                                            </Link>
                                        </div>
                                        <div className="card-body text-start">
                                            <p className="card-title m-0">
                                                <b>Buzo Gamer Valoran Equipo Verde</b>
                                            </p>
                                            <p className="card-title m-0">
                                                <b>$ 70.000</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-2 d-flex justify-content-center align-items-center">
                                    <div className="card" style={{ width: "20rem" }}>
                                        <div className="text-center">
                                            <Link to="/infoimg">
                                                <img src={require("../imagenes/img3.jpg")} className="imgcss card-img-top img-fluid" alt="..." />
                                            </Link>
                                        </div>
                                        <div className="card-body text-start">
                                            <p className="card-title m-0">
                                                <b>Buzo Gamer Valoran Equipo Naranja</b>
                                            </p>
                                            <p className="card-title m-0">
                                                <b>$ 70.000</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-2 d-flex justify-content-center align-items-center">
                                    <div className="card" style={{ width: "20rem" }}>
                                        <div className="text-center">
                                            <Link to="/infoimg">
                                                <img src={require("../imagenes/img4.jpg")} className="imgcss card-img-top img-fluid" alt="..." />
                                            </Link>
                                        </div>
                                        <div className="card-body text-start">
                                            <p className="card-title m-0">
                                                <b>Buzo Gamer Valoran Equipo Azul</b>
                                            </p>
                                            <p className="card-title m-0">
                                                <b>$ 70.000</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Inicio;