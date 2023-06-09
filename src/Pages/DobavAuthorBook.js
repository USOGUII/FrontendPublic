import React, { useState } from 'react'
import axios from 'axios'
import Header from '../Components/Header'
import { NavLink } from 'react-router-dom'
import App from '../App'

export default function DobavAuthorBook() {
    const [Name1, setBookName] = useState('')
    const [Description, setBookDescription] = useState('')
    const [Date, setBookDate] = useState('')
    const [Genre, setBookGenre] = useState('')
    const [Price, setBookPrice] = useState('')
    const [Image, setBookImageUrl] = useState('')
    const [Lenght1, setBookLenght] = useState('')
    const [AuthId, setAuthId] = useState('')

    const handleBookNameChange = (value) => {
      setBookName(value);
    };
    const handleBookDescriptionChange = (value) => {
      setBookDescription(value);
    };
    const handleBookDateChange = (value) => {
      setBookDate(value);
    };
    const handleBookGenreChange = (value) => {
      setBookGenre(value);
    };
    const handleBookPriceChange = (value) => {
      setBookPrice(value);
    };
    const handleImageUrlChange = (value) => {
      setBookImageUrl(value);
    };
    const handleBookLenghtChange = (value) => {
      setBookLenght(value);
    };
    const handleAuthIdChange = (value) => {
      setAuthId(value);
    };

    const handleSave = () =>{;
      axios.post('https://localhost:7102/api/AuthorBooks', {
        BookName: Name1,
        BookDescription: Description,
        BookDate: Date,
        BookGenre: Genre,
        BookLenght: Lenght1,
        imgUrl: Image,
        BookPrice: parseInt(Price),
        AuthorId: parseInt(AuthId)
      }).then((response) => {
        alert('Книга добавлена в каталог');
        window.location.reload(true);
      }).catch((err) => {
        console.error(err);
        alert(err);
      });
      }



    return (
      <div className='registration'>
        <header>
        <span className='logoREG'><NavLink to="/Shop">exeBooks</NavLink></span>
        </header>
        <form className='form'>
          <h1 className='form_title'>Добавление товара</h1>
          
          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Название'  onChange={(e) => handleBookNameChange(e.target.value)}/>
          </div>
          
          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Описание' onChange={(e) => handleBookDescriptionChange(e.target.value)}/>
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Дата издания' onChange={(e) => handleBookDateChange(e.target.value)}/>
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Жанр' onChange={(e) => handleBookGenreChange(e.target.value)}/>
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Цена' onChange={(e) => handleBookPriceChange(e.target.value)}/>
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Ссылка на фото' onChange={(e) => handleImageUrlChange(e.target.value)}/>
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Длинна' onChange={(e) => handleBookLenghtChange(e.target.value)}/>
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Id Автора' onChange={(e) => handleAuthIdChange(e.target.value)}/>
          </div>
          
          <button className='form_button' type='button' onClick={() => handleSave()}>Добавить</button>
        </form>
      </div>
    )
}