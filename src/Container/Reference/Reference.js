import React, { useRef } from 'react';

function Reference(props) {
    const nameRef = useRef();
    const emailRef = useRef();

    const handlesubmit = () => {
        console.log(nameRef.current.value , emailRef.current.value);
        nameRef.current.style.backgroundColor='red';
        emailRef.current.focus();
    }
    
    return (
        <div>
           <input ref={nameRef} type='text' name='name'  placeholder='name'/> 
           <input ref={emailRef} type='text' name='email'  placeholder='email id'/> 
           <button onClick={() =>handlesubmit()}>Submit</button>
        </div>
    );
}

export default Reference;