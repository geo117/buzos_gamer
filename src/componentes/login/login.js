import React from "react";
import { Link } from "react-router-dom";
import { 
    Form, InputGroup, Button,
} from "react-bootstrap";
import * as BiIcon from "react-icons/bi"
import * as GiIcon from "react-icons/gi"

const Login = () => {

    return (
        <div className="loginContent">
            <div className="p-3 border border-warning border-3 rounded-circle loginfondo">
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><BiIcon.BiSolidUser /></InputGroup.Text>
                        <Form.Control
                            placeholder="Usuario"
                            aria-label="Usuario"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><GiIcon.GiPadlock /></InputGroup.Text>
                        <Form.Control
                            placeholder="Contraseña" type="password"
                            aria-label="Contraseña"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </div>
                <div className="text-center">
                    <p className="m-0">
                        <Button variant="primary fs-5">
                            <b>Ingresar</b>
                        </Button>
                    </p>
                    <p className="m-0">
                        <Link to="/Registro" className="registro">
                            <span>Registrate</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;