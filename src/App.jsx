import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,

  Route,
  Link,
  NavLink,
  RouterProvider
} from 'react-router-dom'

//pages
import  Home from './components/Home'
import About from './components/About'

//layouts 
import RootLayout from './layouts/RootLayout'

//style
import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home /> } />
      <Route path='about' element={<About />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App