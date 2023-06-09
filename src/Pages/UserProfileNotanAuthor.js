import React, { useState } from 'react'
import axios from "axios";
import { redirect } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function UserProfileNotanAuthor() {
  const [name, setName] = useState('')
  const [familiya, setFamiliya] = useState('')
  const [otchestvo, setOtchestvo] = useState('')
  const [nameDirty, setNameDirty] = useState(false)
  const [familiyaDirty, setFamiliyaDirty] = useState(false)
  const [nameerror, setNameerror] = useState('Поле "Имя" не может быть пустым')
  const [familiyaerror, setFamiliyaerror] = useState('Поле "Фамилия" не может быть пустым')
  const navigate = useNavigate();
  const [formvalid, setformvalid] = useState(false)

  const blurHandler = (e) => {
    switch (e.target.name) {
        case 'name':
            setNameDirty(true)
            break
        case 'familiya':
            setFamiliyaDirty(true)
            break
    }
  }

  const handleNameChange = (value) => { 
      setName(value);
      if (value){
        setNameerror("")
      }
      else{
        setNameerror('Поле "Имя" не может быть пустым')
      }
  }
  const handleFamiliyaChange = (value) => { 
      setFamiliya(value);
      if (value){
        setFamiliyaerror("")
      }
      else{
        setFamiliyaerror('Поле "Фамилия" не может быть пустым')
      }
  }
  const handleOtchestvoChange = (value) => { 
    setOtchestvo(value);
  }

  useEffect(() =>{
    if(nameerror || familiyaerror){
          setformvalid(false)
    }
    else{
          setformvalid(true)
    }
}, [nameerror, familiyaerror])

  var e = document.getElementById("jqueryselect");
  var procent = e?.value;

  const showNothing = () => {
    return(<div className='empty'>
      <h2>Библиотека пуста!</h2>
    </div>)
  }


  const handleSave = () =>{;
    const url = 'https://localhost:7102/api/Authors';
    axios.post(url, {
      Name: name,
      Familiya: familiya,
      Otchestvo: otchestvo,
      procent: procent,
      UserId: localStorage.getItem('userId')
    }).then(() => {
      alert('Вы стали автором!');
      const url1 = 'https://localhost:7102/Users/role';
      axios.put(url1,{
        UserId: parseInt(localStorage.getItem('userId')),
        role: 1
      }).then(()=> {
        alert('Для продолжения работы в кабинете автора требуется повторная авторизация!')
        localStorage.clear()
        navigate('/Login');
        window.location.reload(true);
      }).catch((err) => {
        alert(err);
      })
    }).catch((err) => {
      console.error(err);
      alert(err);
    });
    }


    return(
      <div>
      <header className='stickyfingers'>
      <div className='wrapper'>
        <span className='logo'><NavLink to="/Shop">exeBooks</NavLink></span>
        </div>
        </header>
        <div className='InfoProfile'>
        <h2>Email пользователя: {localStorage.getItem('email')}</h2>
        <h2>Login пользователя: {localStorage.getItem('userLogin')}</h2>
        </div>
        <div className='registration'>
        <body>
        <form className='formauth'>
          <h1 className='form_title'>Станьте автором!</h1>
          {(nameDirty && nameerror) && <div style={{color:'red'}}>{nameerror}</div>}
          <div className='form_group'>
          <input onBlur = {e => blurHandler(e)} className='form_input' name='name' type='text' placeholder='Введите ваше имя' onChange={(e) => handleNameChange(e.target.value)}/>
          </div>
          {(familiyaDirty && familiyaerror) && <div style={{color:'red'}}>{familiyaerror}</div>}
          <div className='form_group'>
          <input onBlur = {e => blurHandler(e)} className='form_input' name='familiya' type='text' placeholder='Введите вашу фамилию' onChange={(e) => handleFamiliyaChange(e.target.value)}/>
          </div>
          <div className='form_group'>
          <input className='form_input' name='otchestvo' type='text' placeholder='Введите ваше отчество' onChange={(e) => handleOtchestvoChange(e.target.value)}/>
          </div>
          <div className='form_group'>
            <p style={{fontFamily: 'sans-serif'}}>Выберите % отчислений</p>
          <select className='form_select' id="jqueryselect"><option value='40' selected="selected">40%</option><option value="50">50%</option><option value="60">60%</option>
          </select>
          </div>
          <button disabled={!formvalid} className='form_button' type='button' onClick={() => handleSave() }  >Стать автором!</button>
        </form>
        </body>
        </div>
        <div className='BibliotekaA'>
        <h2>Библиотека авторских книг:</h2>
        </div>
        <div className='BibliotekaB'>
        <h2>Библиотека издательских книг:</h2>
        </div>
        </div>
    );
}