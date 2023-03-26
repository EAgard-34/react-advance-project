import {  NavLink } from 'react-router-dom'

export default function MenuList() {
  return (
    <div>
      <h1>Menu Layout</h1>
      <NavLink to="details"><button>Menu Details</button></NavLink>
    </div>
  )
}
