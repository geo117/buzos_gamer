import React from "react";
//import { useParams } from 'react-router-dom';


const InfoImg = () => {
    //const { id } = useParams();

    return (
      <div className="container-fluid barradesplazamiento">
        <div className="my-2 p-1 bg-info baner rounded">
          <p className="m-0 fs-3">
            <b>Informacion del producto</b>
          </p>
        </div>
        <div className="bg-white border container mb-2 d-flex justify-content-center rounded">
          <div className="row">
            <div className="col-md-2 rounded">
              <div className="barraimg">
                <div className="rounded text-center">
                  <img
                    className="img-fluid rounded imginfo"
                    src={require("../imagenes/img1.jpg")}
                    alt=""
                  />
                </div>
                <div className="rounded text-center">
                  <img
                    className="img-fluid rounded imginfo"
                    src={require("../imagenes/img2.jpg")}
                    alt=""
                  />
                </div>
                <div className="rounded text-center">
                  <img
                    className="img-fluid rounded imginfo"
                    src={require("../imagenes/img3.jpg")}
                    alt=""
                  />
                </div>
                <div className="rounded text-center">
                  <img
                    className="img-fluid rounded imginfo"
                    src={require("../imagenes/img4.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center aling-items-center rounded">
              <img
                className="img-fluid imgublic"
                src={require("../imagenes/img1.jpg")}
                alt=""
              />
            </div>
            <div className="col-md-4 rounded d-flex justify-content-center">
              <div>
                <div>
                    <h2>BUZO GAMER CLASICO VALORANT EQUIPO ROJO</h2>
                    <p className="fs-4">
                    <b>costo de $70.000</b>
                    </p>
                </div>
                <div className="mb-3">
                  <p>disponible en los siguientes colores</p>
                  <div className="colores">
                    <div className="rounded bg-info"></div>
                    <div className="rounded bg-danger"></div>
                    <div className="rounded bg-primary"></div>
                    <div className="rounded bg-secondary"></div>
                  </div>
                </div>
                <div>
                    <p className="m-0">disponible en stock <b>25</b></p>
                </div>
                <div className="my-2 mb-4 d-flex">
                    <div>
                        <span>indique la cantidad a comprar</span>
                    </div>
                    <div className="cantidad border text-center">
                        5
                    </div>
                </div>
                <div className="mx-2">
                    <button className="btn btn-primary w-100">
                        <b>COMPRAR</b>
                    </button>
                </div>
                <div className="comentarios border rounded px-2">
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(x => (
                        <p className="my-1" key={x}>asdasdad {x}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default InfoImg;