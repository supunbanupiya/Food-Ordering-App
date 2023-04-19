import React from 'react';
import {Link} from 'react-router-dom';
import Banner from '../assets/pizza.jpeg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'style={{ backgroundImage:`url(${Banner})`}}>
      <div className='headerContainer'>
        <h1>SuPPaz's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to='/menu'><button>ORDER NOW</button></Link>
      </div>
    </div>
  )
}

export default Home