import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider
      } 
from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './pages/RootLayout';
import MenuLayout from './pages/MenuLayout';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import Login from './pages/Login'
import Order from './pages/Order'
import MenuDetails from './pages/MenuDetails'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
        <Route path="menu" element={<MenuLayout />} >
          <Route path="details" element={<MenuDetails />}/>
        </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="order-online" element={<Order />} />
      <Route path="login" element={<Login />} />
      <Route path="reservation" element={<Reservation />} />
      
     
      
      
    </Route>
  )
)
function App() {
  return (
        <RouterProvider router={router} /> 
   );
}

export default App;
