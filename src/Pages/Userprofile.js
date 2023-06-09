import React, { useState } from 'react'
import axios from "axios";
import { redirect } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Userprofile() {
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
        <h2>ФИО Автора: {localStorage.getItem('name')} {localStorage.getItem('familiya')} {localStorage.getItem('otchestvo')}</h2>
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