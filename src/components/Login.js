import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form, Card, CardBody } from "react-bootstrap";
import axios from 'axios';


function Login({ data }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8081/api/v1/users")
            .then((res) => {
                //console.log(res.data);
                setUsers(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleSubmit = (event) => {
        const usr = {
            userEmail: email,
            userPassword: password
        };
        console.log(usr);
        const exists = users.filter((user) => user.userEmail === usr.userEmail)
        if (exists.length === 0) {
            alert(`Given mail id is wrong.. Please check again`);
        }
        else {
            if (exists[0].userPassword === usr.userPassword) {
                alert(`${usr.userEmail} logged in successfully`);
            }
            else {
                alert("Please check your password")
            }
        }

        axios.post("http://localhost:8083/api/v3/login", usr)
            .then(res => {
                sessionStorage.setItem('token', res.data.token);
                sessionStorage.setItem('email', res.data.email);
                console.log(res.data);
                data.setAuthorized(true);
                navigate("/movies");
            })
            .catch(error => console.log(error));


        event.preventDefault();
    };

    return (
        <Card className="mx-auto m-3" style={{ width: "30rem" }}>
            <CardBody className="p-3 m-3">
                <Form onSubmit={handleSubmit}>
                    <h2>Login !!</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="d-flex">Email address:</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="d-flex">Password:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>

                </Form>
            </CardBody>
        </Card>
    );
}

export default Login