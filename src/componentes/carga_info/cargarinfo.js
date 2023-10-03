import { React, useState } from "react";
import Swal from 'sweetalert2';
import {
    Table, Button, Modal
} from 'react-bootstrap';
import * as MdIcons from 'react-icons/md';

const CargarInfo = () => {
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    /*const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);*/

    const guardar_info = () => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success');
                handleClose1()
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
            }
        })
    }

    const cabecera = [
        { ancho: "30rem", campo: "Nom. Producto" },
        { ancho: "15rem", campo: "fecha de carga" },
        { ancho: "15rem", campo: "cantidad" },
        { ancho: "15rem", campo: "valor total" },
        { ancho: "14rem", campo: "acciones" },
    ];

    const datos = [
        {
            "id": 1,
            "nombreproducto": "Televisor",
            "fechacompra": "2023-10-03",
            "cantidad": 1,
            "valortotal": 100000
        },
        {
            "id": 2,
            "nombreproducto": "Nevera",
            "fechacompra": "2023-09-20",
            "cantidad": 2,
            "valortotal": 200000
        },
        {
            "id": 3,
            "nombreproducto": "Lavadora",
            "fechacompra": "2023-08-15",
            "cantidad": 3,
            "valortotal": 300000
        },
        {
            "id": 4,
            "nombreproducto": "Horno",
            "fechacompra": "2023-07-01",
            "cantidad": 4,
            "valortotal": 400000
        },
        {
            "id": 5,
            "nombreproducto": "Microondas",
            "fechacompra": "2023-06-15",
            "cantidad": 5,
            "valortotal": 500000
        },
        {
            "id": 6,
            "nombreproducto": "Cafetera",
            "fechacompra": "2023-05-20",
            "cantidad": 6,
            "valortotal": 600000
        },
        {
            "id": 7,
            "nombreproducto": "Tostadora",
            "fechacompra": "2023-04-15",
            "cantidad": 7,
            "valortotal": 700000
        },
        {
            "id": 8,
            "nombreproducto": "Licuadora",
            "fechacompra": "2023-03-20",
            "cantidad": 8,
            "valortotal": 800000
        },
        {
            "id": 9,
            "nombreproducto": "Extractor",
            "fechacompra": "2023-02-15",
            "cantidad": 9,
            "valortotal": 900000
        },
        {
            "id": 10,
            "nombreproducto": "Plancha",
            "fechacompra": "2023-01-20",
            "cantidad": 10,
            "valortotal": 1000000
        }
    ];

    const formatearPrecio = (valor) => {
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
        }).format(valor);
    };

    const eliminar = (item) => {
        Swal.fire(
            'se ha eliminado el item '+item,
            '',
            'success'
        )
    }

    return (
        <div>
            <div className="bg-white py-2 my-3 container rounded cargar">
                <div className="container-fluid d-flex mb-3">
                    <Button size="sm" variant="success" onClick={handleShow1}>
                        cargar nuevo
                    </Button>
                </div>
                <div>
                    <Table striped responsive>
                        <thead>
                            <tr className="text-center">
                                <th>#</th>
                                {cabecera.map((x, index) => (
                                    <th key={index} style={{ width: x.ancho }}>{x.campo}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map((x, index) => (
                                <tr key={index}>
                                    <td>{x.id}</td>
                                    <td>{x.nombreproducto}</td>
                                    <td className="text-center">{x.fechacompra}</td>
                                    <td className="text-center">{x.cantidad}</td>
                                    <td className="text-center">{formatearPrecio(x.valortotal)}</td>
                                    <td className="text-center">
                                        <div>
                                            <MdIcons.MdModeEditOutline color="blue" size={20} title="editar" />
                                            <MdIcons.MdDelete color="red" size={20} title="eliminar" 
                                                onClick={()=>eliminar(x.id)}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
            <div> {/* inicio de modal carga de informacin */}
                <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={guardar_info}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div> {/* final de modal carga de informacin */}
        </div>
    );
}

export default CargarInfo;