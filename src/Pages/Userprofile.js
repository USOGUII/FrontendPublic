import React, { useState } from 'react'
import axios from "axios";
import { redirect } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Userprofile() {
  const [purchaseList, setPurchaseList] = useState([]);
  const [purchaseListA, setPurchaseListA] = useState([]);
  const [books, setBook] = useState([]);
  const [authorbooks, setAuthorBook] = useState([]);

  useEffect(() => {
    const url = 'https://localhost:7102/api/Books';
    axios.get(url+'/GetList/'+localStorage.getItem('userId')).then((res) => {
        setBook(res.data);
        console.log(res.data);
    }).catch((err) => {
        console.error(err);
        alert('Ошибка при попытке достать каталог издательских книг');
    });
  }, [])

  useEffect(() => {
    const url1 = 'https://localhost:7102/api/AuthorBooks/GetList/';
    axios.get(url1+localStorage.getItem('userId')).then((res) => {
        setAuthorBook(res.data);
        console.log(res.data)
    }).catch((err) => {
        console.error(err);
        alert('Ошибка при попытке достать каталог авторских книг');
    });
  }, [])

  const showNothing = () => {
    return(<div className='empty'>
      <h2>Библиотека пуста!</h2>
    </div>)
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
        <h2>ФИО Автора: {localStorage.getItem('name')} {localStorage.getItem('familiya')} {localStorage.getItem('otchestvo')}</h2>
        </div>
        <div className='BibliotekaA'>
        <h2>Библиотека авторских книг:</h2>
        <div>{books.map(book => {
              return(
                <div>
                <h2>{book.bookName}</h2>
                <h2><a href={book.bookUrl} download="">
	                  <button>Скачать книгу <i class="fas fa-download"></i></button></a>
                </h2>
                </div>
              );
        })}</div>
        </div>
        <div className='BibliotekaB'>
        <h2>Библиотека издательских книг:</h2>
        <div>{authorbooks.map(book => {
              return(
                <div>
                <h2>{book.bookName}</h2>
                <h2><a href="https://drive.google.com/uc?export=download&id=1aV3LYz93SsX4q1GyCU5a9KAeGgnYfQY_"download="">
	                  <button>Скачать книгу <i class="fas fa-download"></i></button></a>
                </h2>
                </div>
              );
        })}</div>                         
        </div>
        </div>
    );
}