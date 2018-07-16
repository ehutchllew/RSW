import React from 'react'
import Link from 'gatsby-link'
import './header.css'

//import logo from src/images

const Header = ({ siteTitle }) => (
  <div className='container'>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className="title"
        >
          {siteTitle}
        </Link>
      </h1>
    <nav className="navbar">
        <ul>
          <li>
            <Link to='/' className="link">Home</Link>
          </li>
          <li>
            <Link to='/about' className="link">About</Link>
          </li>
          <li>
            <Link to='/projects' className="link">Projects</Link>
          </li>
          <li>
            <Link to='/contact' className="link">Contact</Link>
          </li>
        </ul>
    </nav>
  </div>
)

export default Header
