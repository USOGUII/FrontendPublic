import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
            <img src={this.props.item.imgUrl} />
            <h2>{this.props.item.bookName}</h2>
            <b>{this.props.item.bookPrice}р.</b>
            <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.bookId)} />
      </div>
    )
  }
}

export default Order