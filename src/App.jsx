// import React from 'react'
// import {
//   createBrowserRouter,
//   createRoutesFromElements,

//   Route,
//   Link,
//   NavLink,
//   RouterProvider
// } from 'react-router-dom'

// //pages
// import  Home from './components/pages/Home'
// import About from './components/pages/About'
// import Faq from './components/pages/help/Faq'
// import Contact from './components/pages/help/Contact'


// //layouts 
// import RootLayout from './components/layouts/RootLayout'
// import HelpLayout from './components/layouts/HelpLayout'


// //style
// import './index.css'
// import Notfound from './components/pages/Notfound'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<RootLayout />}>
//       <Route index element={<Home /> } />
//       <Route path='about' element={<About />} />
//       <Route path='help' element={<HelpLayout />}>
//           <Route path='faq' element={<Faq />}/>
//           <Route path='contact' element={<Contact />} />
//       </Route>
//       <Route path='*' element={<Notfound />} />
//     </Route>

//   )
// )


import  Home from './components/pages/Home'
import About from './components/pages/About'
import Nav from './components/pages/Navbar'
import { Link, animateScroll as scroll } from "react-scroll";
const App = () => {
  return (
    // <RouterProvider router={router} />
    <>
      <Nav />
      <Home />
      <About/>
    </>
  )
}

export default App