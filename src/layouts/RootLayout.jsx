
import { NavLink, Outlet } from 'react-router-dom'


const RootLayou = () => {
  return (
    <div>
      <header cla>
        <h1>JeqComputer</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
      </header>
      <Outlet />
    </div>
   
  )
}

export default RootLayou