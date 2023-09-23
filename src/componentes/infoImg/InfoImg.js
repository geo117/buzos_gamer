import React from "react";
import { useParams } from 'react-router-dom';


const InfoImg = () => {
    const { id } = useParams();

    return(
        <div className="container-fluid">
            <div className="my-2 p-1 bg-info">
                <p className="m-0 fs-3">
                    <b>Informacion del producto</b>
                </p>
            </div>
            <div className="bg-white container p-0 mb-2 d-flex">
                <div className="col-md-2 border">
                    <div className="border rounded m-2 text-center">
                        <img className="img-fluid rounded imginfo" src={require("../imagenes/img1.jpg")} alt="" />
                    </div>
                    <div className="border rounded m-2 text-center">
                        <img className="img-fluid rounded imginfo" src={require("../imagenes/img2.jpg")} alt="" />
                    </div>
                    <div className="border rounded m-2 text-center">
                        <img className="img-fluid rounded imginfo" src={require("../imagenes/img3.jpg")} alt="" />
                    </div>
                    <div className="border rounded m-2 text-center">
                        <img className="img-fluid rounded imginfo" src={require("../imagenes/img4.jpg")} alt="" />
                    </div>
                </div>
                <div className="col-md-6 border p-3 d-flex justify-content-center aling-items-center bg-warning">
                    <img className="img-fluid imgublic" src={require("../imagenes/img1.jpg")} alt="" />
                </div>
                <div className="col-md-4 border p-3">
                    <h2>BUZO GAMER CLASICO VALORANT EQUIPO ROJO</h2>
                </div>
            </div>
        </div>
    );
}

export default InfoImg;