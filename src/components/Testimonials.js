export default function Testimonials() {

    const testimonial=[
        {id:1,   
         name:'Edward',
         title:'Actual customer', 
         testimonial:'"My experience was good and so was the price, fast service, fresh food. Will definitely go back again"',       
         image:'testimonial-edward.png'      
        },
        {id:2,   
         name:'Fae',
         title:'Actual customer', 
         testimonial:'"I had a time with my family and friends, booking the reservation was quick and easy. Love the Bruschetta and their custom made chicago sauce."',     
         image:'testimonial-fae.jpg'      
        },
         
        {id:3,   
            name:'Mackenize',
            title:'Actual customer', 
            testimonial:'"Friday nights are the best, love the atmoshpere, very relaxing. I found my new hangout spot."',       
            image:'testimonial-mackenize.jpg'      
          },     
                  
                      
    ]

    return (
      
    <section className="testimonial-section">
        <div className="testimonial-container">
            <h1>Testimonials</h1>            
        </div>

        <div className="testimonial-card">   
        <div className="testimonial-card-body">           
            {testimonial.map((test)=>(   
                            
            <div className="testimonial-cards"key={test.id}>
            <h3>{test.title}</h3>
        
            <img src={test.image} alt={test.name}/>                      
            <p>{test.testimonial}</p>                                
            <h4>{test.name}</h4>                       
            
            </div> 
            ))}
                
            </div>  
        </div>
        
    </section>
   
  )
}
