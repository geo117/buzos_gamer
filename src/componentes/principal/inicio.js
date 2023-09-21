import React from "react";
import { Link } from 'react-router-dom';

const Inicio = () => {

    return (
        <div>
            <div className="container-fluid py-2 content1 bg-info">
                <div>
                    <h2>slaida de prueba</h2>
                </div>
                <div className="bg-warning">
                    <div className="container-fluid text-center">
                        {[1, 2, 3].map(x => (
                            <div className="row" key={x}>
                                <div className="col-md-3 mb-2 d-flex justify-content-center align-items-center">
                                    <div className="card" style={{ width: "20rem" }}>
                                        <div className="text-center">
                                            <img src={require("../imagenes/img1.jpg")} className="imgcss card-img-top img-fluid" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <span className="btn btn-primary">Go somewhere</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-2 d-flex justify-content-center align-items-center">
                                    <div className="card" style={{ width: "20rem" }}>
                                        <div className="text-center">
                                            <img src={require("../imagenes/img2.jpg")} className="imgcss card-img-top img-fluid" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <span className="btn btn-primary">Go somewhere</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-2 d-flex justify-content-center align-items-center">
                                    <div className="card" style={{ width: "20rem" }}>
                                        <div className="text-center">
                                            <img src={require("../imagenes/img3.jpg")} className="imgcss card-img-top img-fluid" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <span className="btn btn-primary">Go somewhere</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-2 d-flex justify-content-center align-items-center">
                                    <div className="card" style={{ width: "20rem" }}>
                                        <div className="text-center">
                                            <img src={require("../imagenes/img4.jpg")} className="imgcss card-img-top img-fluid" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <span className="btn btn-primary">Go somewhere</span>
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