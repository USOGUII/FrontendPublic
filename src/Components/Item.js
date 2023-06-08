import React, { Component } from 'react'
import axios from 'axios';
import { useState } from 'react';

export class Item extends Component {
  render() {
    const myObject = JSON.parse(localStorage.getItem('token'))
    return (
        <div className='item'>
            <img src={this.props.item.imgUrl} onClick={() => this.props.onShowItem(this.props.item)} />
            <h2>{this.props.item.bookName}</h2>
            <b>{this.props.item.bookPrice}р.</b>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)} >+</div>
        </div>
    )
  }}

export default Item