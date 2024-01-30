import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { CardBody } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const user = {
      userEmail: email,
      userPassword: password,
      userName: userName,
    };
    //console.log(user);

    axios.post("http://ec2-13-49-69-28.eu-north-1.compute.amazonaws.com:8081/api/v1/register", user)
    .then((res) => {
      //console.log(res.data);
      alert(`Hi ${userName}, you have registered successfully..!!`);
      navigate('/login');
      //setUsers(...users,res.data);
    })
    .catch(error => {
      console.log(error);
      alert("Given mail id already registered. Please try with different mail id..")
      navigate('/register');
    });
    
    event.preventDefault();
  };

  return (
    <div>
      <Card className="mx-auto m-3" style={{ width: "30rem" }}>
        <CardBody className="p-3 m-3">
          <Form onSubmit={handleSubmit}>
            <h2>Register Here..!!</h2>

            <Form.Group className="mb-3" controlId="formUserName">
              <Form.Label className="d-flex">User Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                onChange={(event) => setUserName(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="d-flex">Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
                required
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
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Register;
