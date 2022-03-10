import React from 'react'
import {useState} from 'react'
import "./SignUp.css"

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    return (
        <div className='signup'>
            <h1>SignUp</h1>
            <input value={name} onChange={(e)=> setName(e.target.value)}
            type="text"
            placeholder='Name'></input>
            <input value={email} onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder='Email'
            ></input>
            <input value={password} onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='Password'
            ></input>
            <input value={repassword} onChange={(e) => setRepassword(e.target.value)}
            type="password"
            placeholder='Repassword'
            ></input>
            <div className='btn1'>SignUp</div>
            <div>or</div>
            <div className='btn1'>Login</div>
        </div>
    )
}

export default SignUp
