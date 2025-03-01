import React,{useEffect,useState} from "react";
import "./Home.css";
import tshirt1 from './Dress1.jpg'
import tshirt2 from './Dress2.jpg'
import tshirt3 from './Dress3.jpg'
import tshirt4 from './Dress4.jpg'
import Logo from './Logo.jpg'
import axios from 'axios';
const Navbar=()=>
(
  <nav className="navbar">
    <img src={Logo}alt=""/>
   
    <div className="parent">
      
      </div>
    <div className="root2">
      <p>contact</p>
    </div>
    <div className="root3">
      <p>about</p>
    </div>
    <div className="root4">
      <button>Login</button>
    </div>
    
    
    <h1> wELCOME TO YUGA APP</h1>

  </nav>
);

const Home =()=> {
  const[productData,setproductData]=useState([]);
  async function getData(){
    await axios.get('https://dummyjson.com/products').then((res )=> {setproductData(res.data.products)})
      
  }
  useEffect(()=>{
    getData();
  },
  []
);
console.log(productData);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card">
          <img src={tshirt1} alt= " black t-shirt"/>
          <h3>Blue t-shirt</h3>
          <p>$ 500</p>
          <button>add to cart</button>
        </div>

        
        <div className="card">
          <img src={tshirt2} alt= " white t-shirt"/>
          <h3>Yellow t-shirt</h3>
          <p>$600</p>
          <button>add to cart</button>
        </div>

        
        <div className="card">
          <img src={tshirt3} alt=" green t-shirt"/>
          <h3>Green T-shirt</h3>
          <p>$700</p>
          <button>add to cart</button>
        </div>
       
        
        <div className="card">
          <img src={tshirt4} alt=" red t-shirt"/>
          <h3>Sky blue T-shirt</h3>
          <p>$560</p>
          <button>add to cart</button>
        </div>

        </div>
        </div>
        );
        };
        
      
    
  


export default Home;