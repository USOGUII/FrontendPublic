import React, { useState } from 'react'
import axios from "axios";
import { redirect } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect } from 'react';
import TrueRouter from '../TrueRouter';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setemailDirty] = useState(false)
    const [loginDirty, seteloginlDirty] = useState(false)
    const [passwordDirty, setepasswordDirty] = useState(false)
    const [emailerror, setemailerror] = useState('Email не может быть пустым')
    const [loginerror, seteloginerror] = useState('Логин не может быть пустым')
    const [passworderror, setepassworderror] = useState('Пароль не может быть пустым')
    const [formvalid, setformvalid] = useState(false)
    const navigate = useNavigate();

    const blurHandler = (e) => {
      switch (e.target.name) {
          case 'email':
              setemailDirty(true)
              break
          case 'login':
              seteloginlDirty(true)
              break
          case 'password':
              setepasswordDirty(true)
              break
      }
    }

    const handleUserLoginChange = (value) => { 
      setLogin(value);
      if (value){
        seteloginerror("")
      }
      else{
        seteloginerror('Логин не может быть пустым')
      }
  };
  const handleEmailChange = (value) => {
      setEmail(value);
      const re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      if (!re.test(String(value).toLowerCase())){
        setemailerror('Некорректный Email')
      }
      else{
        setemailerror("")
      }
  };
  const handlePasswordChange = (value) => {
      setPassword(value);
      if (value){
        setepassworderror("")
      }
      else{
        setepassworderror('Пароль не может быть пустым')
      }
  };

  useEffect(() =>{
      if(emailerror || loginerror || passworderror){
            setformvalid(false)
      }
      else{
            setformvalid(true)
      }
  }, [emailerror, loginerror, passworderror])

  /*useEffect(() =>{
    if(localStorage.length!==0){
      navigate("/Shop");
      window.location.reload(true);
    }
    else{
    }
  }, [])*/

  const handleSave = () =>{;
    var url='https://localhost:7102/Users';
    axios.post(url, {
      UserLogin: login,
      email: email,
      Password: password,
      role : 0,
      Money : 0,
    }).then(() => {
      alert('Вы успешно зарегистрировались!');
      navigate('/Login');
      window.location.reload(true);
    }).catch((err) => {
      console.error(err);
      alert(err);
    });
    }



    return (
      <div className='registration'>
        <header>
          <span className='logoREG'>exeBooks</span>
        </header>
        <body>
        <form className='form'>
          <h1 className='form_title'>Регистрация</h1>
          {(emailDirty && emailerror) && <div style={{color:'red'}}>{emailerror}</div>}
          <div className='form_group'>
          <input onBlur = {e => blurHandler(e)} className='form_input' name='email' type='text' placeholder='Email' onChange={(e) => handleEmailChange(e.target.value)}/>
          </div>
          <div className='form_group'>
          {(loginDirty && loginerror) && <div style={{color:'red'}}>{loginerror}</div>}
          <input onBlur = {e => blurHandler(e)}  className='form_input' name='login' type='text' placeholder='Логин' onChange={(e) => handleUserLoginChange(e.target.value)}/>
          </div>
          <div className='form_group'>
          {(passwordDirty && passworderror) && <div style={{color:'red'}}>{passworderror}</div>}
          <input onBlur = {e => blurHandler(e)}  className='form_input' name='password' type='password' placeholder='Пароль' onChange={(e) => handlePasswordChange(e.target.value)}/>
          </div>
          <button disabled={!formvalid} className='form_button' type='submit' onClick={() => handleSave() }  >Зарегестрироваться</button>
        </form>
        <button className='HaveAccount' type='submit' onClick={() => window.location.href = '/Login'}>Уже есть аккаунт?</button>
        </body>
      </div>
    );
}
