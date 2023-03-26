import Logo from '../icons_assets/Logo.svg'
import { NavLink, Link} from 'react-router-dom'

export default function Header() {

    const NavList = [
        {title:'Home', url:'/', id:1},
        {title:'About', url:'about', id:2},
        {title:'Menu', url:'menu', id:3},
        {title:'Reservations', url:'reservation', id:4},
        {title:'OrderOnline', url:'order-online', id:5},
        {title:'Login', url:'login', id:6},
        // {title:'Help', url:'help', id:6},
    ]
  return (
    <header className="header-component">
            
            <Link to="/"><img src={Logo} alt="Little Lemon Logo"/></Link>
            <nav>
               <ul> 
                    {NavList.map((nav)=>(
                    <li key={nav.id} >  
                        <NavLink to={nav.url} >{nav.title}</NavLink>
                    </li>
                        
                ))}
                </ul> 
            </nav>
        </header>
  )
}
