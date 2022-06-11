import React from 'react';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';

function LoginSignUp(props) {
    return (
        <Form className='login-form'>
          <h3 className='text-center'>Login/Signup</h3>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder='Email'/>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder='Password'/>
          </FormGroup>
           <div class="row mb-4">
          <div class="col d-flex"> 
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>
        </div>
        <Button className='mb-3'>Login</Button>

        </Form>
        
    );
}

export default LoginSignUp;