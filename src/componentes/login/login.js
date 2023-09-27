import React from "react";
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
                    <Button variant="primary fs-5">
                        <b>Ingresar</b>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;