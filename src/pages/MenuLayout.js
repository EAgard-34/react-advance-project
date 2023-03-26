
import { Outlet } from 'react-router-dom'
import MenuList from '../components/MenuList'



export default function MenuLayout() {
  return (
    <div className="menu-layout">
      <MenuList />
      
     
    <main>
      <Outlet/>
    </main>
    </div>
  )
}
