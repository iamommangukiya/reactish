import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container } from 'react-bootstrap';
import '../Css/form.css'
import axios from 'axios';

function Login() {

  const [inputs ,setText] = useState({
    email:"",
    uname:"",
    password:"",
    cpassword:""
  
  });
  const handelChange =(e)=>{
   const {name,value}=e.target;
   setText({...inputs,[name]:value});

  };
  const [res,setResult]=useState();
  const handelSubmit = async(e)=>{
    e.preventDefault();
try{
  if(inputs.password === inputs.cpassword){
  const result = await axios.post("http://localhost:8000/createuser",inputs);
  setResult(result.data);
  }else{
    alert("password not match");
  }

}

catch(error){
  if(error){
    console.log(error);
  }
}

  };

  
  return (
    <>
         <div className='h-100 d-flex flex-column justify-content-center align-items-center' style={{ marginTop: '25rem' }}>
        <Container>
          <Form onSubmit={handelSubmit} >
         
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext placeholder="email@example.com" name='email' value={inputs.email} onChange={handelChange}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="text">
              <Form.Label column sm="2">
             UserName
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext placeholder="Enter your name" name='uname' value={inputs.uname} onChange={handelChange}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" name='password' value={inputs.password} onChange={handelChange}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Confrom Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Confrim Password" name='cpassword' value={inputs.cpassword} onChange={handelChange}/>
              </Col>
            </Form.Group>
            <Button variant='dark' className='btn' type='submit' >Login</Button> 
          </Form>
        </Container>
            { <p>{inputs.email}</p> }
            { <p>{res}</p> }
      </div>
    </>
  );
}

export default Login;
