import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../assests/person.png'
import email_icon from '../assests/email.png'
import password_icon from '../assests/password.png'
import axios from 'axios'


export const LoginSignup = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const {name, value } = event.target;
        setForm((prevFormData) => ({...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('', form)
        .then(result => console.log(result))
        .catch(err => console.log("Error occured", err))
    }

    const [action, setAction] = useState("Login");

  return (
    <form className='container1' onSubmit={handleSubmit}>
        <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' name="name" onChange={handleChange} required />
            </div>}
            

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id'  name="email" onChange={handleChange} required />
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' name="password" onChange={handleChange} required />
            </div>
        </div>

        {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
       

        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
    </form>
  )
}