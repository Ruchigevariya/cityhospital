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
        <Button className='mb-3'>Sign in</Button>
           <div class="row mb-4">
          <div class="col d-flex justify-content-center"> 
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>
      
          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        </Form>
        
    );
}

export default LoginSignUp;