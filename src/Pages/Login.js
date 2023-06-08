import React, { useState } from 'react'
import axios from "axios";
import { redirect } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect } from 'react';
import TrueRouter from '../TrueRouter';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginDirty, seteloginlDirty] = useState(false)
    const [passwordDirty, setepasswordDirty] = useState(false)
    const [loginerror, seteloginerror] = useState('Логин не может быть пустым')
    const [passworderror, setepassworderror] = useState('Пароль не может быть пустым')
    const [formvalid, setformvalid] = useState(false)
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const blurHandler = (e) => {
      switch (e.target.name) {
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
      if(loginerror || passworderror){
            setformvalid(false)
      }
      else{
            setformvalid(true)
      }
  }, [loginerror, passworderror])

  useEffect(() => {
    axios.get('https://localhost:7102/Users').then((res) => {
        setUsers(res.data);
    }).catch((err) => {
        console.error(err);
        alert('Ошибка при попытке достать пользователей');
    });
  }, []);

  const handleSave = () =>{;
    const authenticatedUser = users.find((u) => u.userLogin === login && u.password === password);
    if (!authenticatedUser) {
        alert('Неправильный логин или пароль');
        return;
    }
    localStorage.setItem('userId', authenticatedUser.userId);
    localStorage.setItem('userLogin', authenticatedUser.userLogin);
    localStorage.setItem('role', authenticatedUser.role);
    localStorage.setItem('money', authenticatedUser.money);
    console.log(authenticatedUser);
    setUser(authenticatedUser);
    console.log(localStorage);
    navigate("/Shop");
    window.location.reload(true);
    }



    return (
      <div className='registration'>
        <header>
          <span className='logoREG'>exeBooks</span>
        </header>
        <body>
        <form className='form'>
          <h1 className='form_title'>Вход</h1>
          <div className='form_group'>
          {(loginDirty && loginerror) && <div style={{color:'red'}}>{loginerror}</div>}
          <input onBlur = {e => blurHandler(e)}  className='form_input' name='login' type='text' placeholder='Логин' onChange={(e) => handleUserLoginChange(e.target.value)}/>
          </div>
          <div className='form_group'>
          {(passwordDirty && passworderror) && <div style={{color:'red'}}>{passworderror}</div>}
          <input onBlur = {e => blurHandler(e)}  className='form_input' name='password' type='password' placeholder='Пароль' onChange={(e) => handlePasswordChange(e.target.value)}/>
          </div>
          <button disabled={!formvalid} className='form_button' type='submit' onClick={() => handleSave() }  >Войти</button>
        </form>
        <button className='HaveAccount' type='submit' onClick={() => window.location.href = '/'}>Еще нет аккаунта?</button>
        </body>
      </div>
    );
}
