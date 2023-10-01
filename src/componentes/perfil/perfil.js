import React from "react";
//import * as BiIcons from "react-icons/bi";

const Perfil = () => {

    return (
        <div className="container p-3">
            <div className="bg-white perfil rounded p-3">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img className="img-fluid rounded-circle border mb-2" width="30%"
                            src={require("../imagenes/imgperfil.jpg")} alt="imgperfil"
                        />
                    </div>
                    <div className="col-md-6 py-2 d-flex justify-content-center">
                        <div>
                            <div>
                                <p className="m-0"><b className="fs-5">Nombre</b></p>
                                <p><span>andres geovanny rojas</span></p>
                            </div>
                            <div>
                                <p className="m-0"><b className="fs-5">Correo</b></p>
                                <p><span>andres geovanny rojas</span></p>
                            </div>
                            <div>
                                <p className="m-0"><b className="fs-5">Telefono</b></p>
                                <p><span>3178375317</span></p>
                            </div>
                            <div>
                                <p className="m-0"><b className="fs-5">Ciudad</b></p>
                                <p><span>Bogota D.C</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 py-2 d-flex justify-content-center">
                        <div>
                            <div>
                                <p className="m-0"><b className="fs-5">Compras realiadas</b></p>
                                <p>ver mis compras</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;