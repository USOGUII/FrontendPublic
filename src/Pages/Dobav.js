import React, { useState } from 'react'
import axios from 'axios'
import Header from '../Components/Header'
import { NavLink } from 'react-router-dom'
import App from '../App'

export default function Dobav() {
    const [Name1, setBookName] = useState('')
    const [Description, setBookDescription] = useState('')
    const [Author, setBookAuthor] = useState('')
    const [Date, setBookDate] = useState('')
    const [Genre, setBookGenre] = useState('')
    const [Price, setBookPrice] = useState('')
    const [Image, setBookImageUrl] = useState('')
    const [Lenght1, setBookLenght] = useState('')
    const [BookUrl, setBookUrl] = useState('')
    const [Idpub, setIdPub] = useState('')

    const handleBookNameChange = (value) => {
      setBookName(value);
    };
    const handleBookDescriptionChange = (value) => {
      setBookDescription(value);
    };
    const handleBookAuthorChange = (value) => {
      setBookAuthor(value);
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
    const handleIdPubChange = (value) => {
      setIdPub(value);
    };
    const handleBookUrlChange = (value) => {
      setBookUrl(value);
    };

    const handleSave = () =>{;
      axios.post('https://localhost:7102/api/Books', {
        BookName: Name1,
        BookDescription: Description,
        BookAuthor: Author,
        BookDate: Date,
        BookGenre: Genre,
        BookLenght: Lenght1,
        imgUrl: Image,
        BookUrl: BookUrl,
        BookPrice: parseInt(Price),
        PublishingHouseId : parseInt(Idpub)
      }).then((response) => {
        alert('Книга добавлена в каталог!');
        window.location.reload(true);
      }).catch((err) => {
        console.error(err);
        alert("Данные были заполнены не верно");
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
          <input className='form_input' name='login' type='text' placeholder='Автор' onChange={(e) => handleBookAuthorChange(e.target.value)}/>
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
          <input className='form_input' name='login' type='text' placeholder='Вес, МБ' onChange={(e) => handleBookLenghtChange(e.target.value)}/>
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Url на скачивание книги' onChange={(e) => handleBookUrlChange(e.target.value)}/>
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Id Издательского Дома' onChange={(e) => handleIdPubChange(e.target.value)}/>
          </div>
          
          <button className='form_button' type='button' onClick={() => handleSave()}>Добавить</button>
        </form>
      </div>
    )
}