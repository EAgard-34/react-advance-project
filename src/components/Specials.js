import React from 'react'
import {NavLink,Link} from 'react-router-dom'


export default function Specials() {
    const meals=[
        {dish:'Greek Salad', 
        description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons.',
        price:'$12.99',      
        id:1,
        order:'Order by delivery',
        image:'greek salad.jpg'      
        },
        {dish:'Bruschetta', 
        description:'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        price:'$5.99',       
        id:2,
        order:'Order by delivery',
        image:'bruschetta.jpg'                
        },
        {dish:'Lemon Dessert', 
        description:'This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        price:'$5.00',       
        id:3,
        order:'Order by delivery',
        image:'lemon dessert.jpg'                
        }
                
    ]



  return (
    <section className="special-section">
        <div className="special-container">
            <h1>This Week's Specials!</h1>
            <NavLink to='menu'><button type='button'>Online menu</button></NavLink>
        </div>
        <div className="special-card">
            <div className="cards">
                {meals.map((meal)=>(
            <Link to={`menu/details/${meal.id}`}>
                <div className="card" key={meal.id}>
                        <img src={meal.image} alt={meal.dish} />
                        <div className="card-details">
                            <h3>{meal.dish}</h3>
                            <h3>{meal.price}</h3>
                        </div>
                        <p>{meal.description}</p>         
                        <h4 className='order'>{meal.order}</h4>
                       
                </div></Link>
                ))}
                
            </div>
        </div>
    </section>
  )
}
