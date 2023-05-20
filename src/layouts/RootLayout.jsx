
import { NavLink, Outlet } from 'react-router-dom'


const RootLayou = () => {
  return (
    <div className='root-layout'>
      <header>
        <h1>JeqComputer</h1>
        <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='help'>Help</NavLink>
        </nav>
     
      </header>
      <Outlet />
    </div>
   
  )
}

export default RootLayou