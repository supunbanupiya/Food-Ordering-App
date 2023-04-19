import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'style={{ backgroundImage:`url(${PizzaLeft})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>

            <form id='contact-form' method='post'>

             <label htmlFor="name"for>Full Name</label>
             <input type='text' name="name"placeholder='Enter name'/>
             <label htmlFor="email"for>Email</label>
             <input type='email' name="email"placeholder='Enter email'/>
             <label htmlFor='message'>Message</label>
             <textarea rows={6} placeholder='message'></textarea>
             <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;