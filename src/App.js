import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Basket from "./Pages/Basket";
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Items from "./Components/Items"
import Categories from "./Components/Categories";
import ShowFullItem from "./Components/ShowFullItem";
import Dobav from "./Pages/Dobav";
import axios from "axios";
import uselol from "./Components/uselol";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [],
      showFullItem: false,
      fullItem: {}
    }
    const data3 = localStorage.getItem('token'); 
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  componentDidMount(){
    axios.get("https://localhost:7102/api/Books")
      .then(res => {
        this.setState({
          items: res.data
        })
        localStorage.setItem('token', JSON.stringify(res.data));
      })
  }
  /*LoadUsers(){
    axios.get("https://localhost:7102/api/Books").then(res => {
        var TempItemsStorage = [];
        res.data.forEach(element => {
          TempItemsStorage.push({
            BookName: element.BookName,
            BookDescription: element.BookDescription,
            BookAuthor: element.BookAuthor,
            BookDate: element.BookDate,
            BookGenre: element.BookGenre,
            BookLenght: element.BookLenght,
            imgUrl: element.imgUrl,
            BookPrice: element.BookPrice,
            PublishingHouseId : element.PublishingHouseId
          })
        });

        this.setState({
          items: []
        }, () => this.setState({
          items: TempItemsStorage
        }))
    })
  }*/
  render() {
    return (
      <div>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <div className="wrapper">
          <div className='presentation'></div>
          <Categories chooseCategory={this.chooseCategory} />
          <Items onShowItem={this.onShowItem} items={this.state.items} onAdd={this.addToOrder}/>
          {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
          <Items onShowItem={this.onShowItem} items={this.state.items} onAdd={this.addToOrder}/>
          {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
          <Footer />
        </div>
      </div>
    );
  }
  

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    
    this.setState({
      currentItems:this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(bookId) {
    this.setState({orders: this.state.orders.filter(el => el.bookId !== bookId)});
    let orders = JSON.parse(localStorage.getItem("cart")) || [];
    orders = orders.filter(el => el.bookId !== bookId);
    localStorage.setItem("cart", JSON.stringify(orders));
    this.setState({orders: orders});
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.bookId === item.bookId)
        isInArray=true
    })
    if(!isInArray){
      this.setState({ orders: [...this.state.orders, item]}, () => {
        console.log(this.state.orders)
      })
      localStorage.setItem('cart',JSON.stringify([...this.state.orders, item]));
      console.log(localStorage.getItem('cart'));
    }
  }
}

export default App;
