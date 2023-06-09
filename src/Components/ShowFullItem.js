import React, { Component } from 'react'
import { useEffect } from 'react';

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
            <img src={this.props.item.imgUrl} onClick={() => this.props.onShowItem(this.props.item)} />
            <h2>{this.props.item.bookName}</h2>
            <div>
            <h3>Автор: {this.props.item.bookAuthor} {this.props.item.authName} {this.props.item.authFamiliya} {this.props.item.authOtchestvo}</h3>
            {this.props.item.bookGenre==='порно' && <h3>Жанр: {this.props.item.bookGenre}</h3>}
            <h3>Дата создания: {this.props.item.bookDate}</h3>
            <h3>Вес книги: {this.props.item.bookLenght} МБ</h3>
            <h4>Описание: {this.props.item.bookDescription}</h4>
            </div>
            <br></br>
            <b>Цена: {this.props.item.bookPrice}р.</b>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)} >+</div>
        </div>
      </div>
    )
  }
}

//TODO сделать добавление авторских книг также - только выводить на экран инфу об авторских книгах через { && }

export default ShowFullItem

