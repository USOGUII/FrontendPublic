import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order'
import Items from "./Items"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const showOrders = (props) => {
  let summa =0
  props.orders.forEach(el => summa += Number.parseFloat(el.bookPrice))
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.bookId} item={el}/>
    ))}
    <p className='summa'>Сумма: {summa}р.</p>
  </div>)
}

const showNothing = () => {
  return(<div className='empty'>
    <h2>Товаров нет!</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  const navigate = useNavigate();

  const handleExit = () =>{;
      localStorage.clear()
      navigate("/");
      window.location.reload(true);
  }

const [pointer, setpointer] = useState('')

  useEffect(() =>{
    if (localStorage.getItem('userLogin').length>10){
      Uselol();
      return setpointer("...")
    }
    else{
      Uselol();
      return setpointer("")
    }
  });
  //TODO не забыть правильно раздать права

    function Uselol(){
    //localStorage.setItem("bookss", JSON.stringify(this.item));
    //var retrievedObject = localStorage.getItem('bookss');
    //console.log('retrievedObject: ', JSON.parse(retrievedObject));
    //this.item.bookId = JSON.parse(localStorage.getItem("bookId"));
    /*var testObject = { 'one': 1, 'two': 2, 'three': 3 };
    localStorage.setItem('testObject', JSON.stringify(testObject));
    var retrievedObject = localStorage.getItem('testObject');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));*/
}

  return (
    <header className='stickyfingers'>
      <div className='wrapper'>
        <span className='logo'><NavLink to="/Shop">exeBooks</NavLink></span>
        <ul className='nav'>
          {localStorage.getItem('role')==2 && <li><NavLink to="/Dobav">Добавить изд. книгу</NavLink></li>}
          {(localStorage.getItem('role')==1 || localStorage.getItem('role')==2) && <li><NavLink to="/Dobav">Добавить книгу автора</NavLink></li>}  
          {localStorage.getItem('role')==0 && <li className='welcome'><NavLink to="/User">{localStorage.getItem('userLogin').slice(0,10)+pointer}</NavLink></li>}
          {localStorage.getItem('role')==1 && <li className='welcome'>{localStorage.getItem('userLogin').slice(0,10)+pointer}</li>}
          <li><NavLink to="/AddMoney">{localStorage.getItem('money')}р</NavLink></li>
          <li onClick={() => handleExit() }><NavLink to="/">Выйти</NavLink></li>
        </ul>  
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
              showOrders(props) : showNothing()}
          </div>
        )}
    </div>    
    </header>  
  )
}
