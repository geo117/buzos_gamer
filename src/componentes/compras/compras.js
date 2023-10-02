import React from "react";
import Table from 'react-bootstrap/Table';

const Compras = () => {

    const cabecera = [
        {ancho: "30rem", campo: "Nom. Producto"},
        {ancho: "15rem", campo: "fecha de compra"},
        {ancho: "15rem", campo: "cantidad"},
        {ancho: "15rem", campo: "valor total"},
    ];

    return (
        <div>
            <div className="bg-white rounded container py-4 tabla">
                <Table striped responsive>
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            {cabecera.map((x,index)=>(
                                <th key={index} style={{width: x.ancho }}>{x.campo}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>2</td>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>3</td>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Compras;