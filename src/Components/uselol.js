import { useState } from "react"
import axios from "axios"
import { useEffect } from "react";

/*function Uselol(){
    const [item, setitem] = useState([])

    useEffect(()=>{
    axios.get("https://localhost:7102/api/Books")
      .then(res => {
        console.log(res.data);
      })
      }, []);
  return(
    <div className='Pisya'>
    {item.map(itemss=>{
      return(
        <h2>{itemss.BookName}</h2>
      );
    })}
    </div>
  );}
export default Uselol;*/

/*function Uselol(){
  useEffect(() =>{
    localStorage.setItem("bookss", JSON.stringify(this.item));
    var retrievedObject = localStorage.getItem('bookss');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
  });
}
export default Uselol;*/