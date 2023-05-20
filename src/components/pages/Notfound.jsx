import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, consectetur.</p>
        <p>Go back to<Link to='/'>Homepage</Link>.</p>
    </div>

  )
}

export default Notfound