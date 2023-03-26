import React from 'react'
import featured from '../icons_assets/restauranfood.jpg'
import { NavLink } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero-section">
        <div className="hero-container">
            <p className="heading">
                <p>Little Lemon</p>
               <p>Chicago</p>
            </p>
            <p>
                We are a family owned<br />
                Mediterranean restaurant, <br/> 
                focused on traditional <br />
                recipes served with a mordern <br />
                twist.
            </p>
            <NavLink to='reservation'><button type='button'>Reserve a table</button></NavLink>
        </div>
    <img src={featured} alt="Little Lemon featured"/>
    </section>
  )
}