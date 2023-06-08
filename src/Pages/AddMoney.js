import React, { useState } from 'react'
import axios from "axios";
import { redirect } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect } from 'react';
import TrueRouter from '../TrueRouter';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function AddMoney() {
    const [moneycount, setMoney] = useState('')
    const navigate = useNavigate();

    const handleMoneyChange = (value) => { 
        setMoney(value);}

  /*const handleSave = () =>{;
    axios.post('https://localhost:7102/Users', {
      UserLogin: login,
      email: email,
      Password: password,
      role : 0,
      Money : 0,
    }).then((res) => {
      //localStorage.setItem('token', res.data.token);
      navigate('/Login');
      //navigate('/Login');
      window.location.reload(true);
    }).catch((err) => {
      console.error(err);
      alert(err);
    });
    }*/

    const handleSave = () =>{;
        const moneytemp = localStorage.getItem('money');
        const url = 'https://localhost:7102/Users';
        localStorage.setItem('money', (parseInt(moneycount)+parseInt(moneytemp)).toString());
        axios.put((url), {
            UserId: parseInt(localStorage.getItem('userId')),
            Money: moneycount
        }).then(() => {
            alert('Платеж прошёл успешно!');
            navigate('/Shop');
            window.location.reload(true);
        }).catch((err) => {
            alert(err);
        })
    }

    return (
      <div className='registration'>
        <header>
          <span className='logoREG'><NavLink to="/Shop">exeBooks</NavLink></span>
        </header>
        <body>
        <form className='form'>
          <h1 className='form_title'>Пополнить счёт:</h1>
          <div className='form_group'>
          <input className='form_input' name='email' type='text' placeholder='Сумма в рублях' onChange={(e) => handleMoneyChange(e.target.value)}/>
          </div>
          <button className='form_button' type='submit' onClick={() => handleSave() }  >Пополнить счёт</button>
        </form>
        </body>
      </div>
    );
}
