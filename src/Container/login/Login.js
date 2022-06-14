import React from 'react';
import {Button,Form,FormGroup,Input,Label} from 'reactstrap';

function Login(props) {
    return (
        // reactstrap use login page 
        <div className="App p-5">
        <h2>Login</h2>
        <Form className="form">
          <FormGroup>
          <div className='col-4'>
          <Label for="exampleEmail">Username</Label>
            <Input type="email"name="email" id="exampleEmail"placeholder="example@example.com"/>
          </div>
          </FormGroup>            
          <FormGroup>
          <div className='col-4'>
          <Label for="examplePassword">Password</Label>
            <Input type="password" name="password"id="examplePassword" placeholder="********"/>
          </div>
          </FormGroup>
        <Button className='mb-4'>Login</Button>
      </Form>
    </div>
    );
}

export default Login;