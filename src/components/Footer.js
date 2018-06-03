
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
    <header>
    <nav>
      <ul>
        <li><Link to='/'>Top</Link></li>
        <li><Link to='/pull_down_menu'>PullDownMenu</Link></li>
        <li><Link to='/dummy'>Dummy</Link></li>
      </ul>
    </nav>
  </header>
)
  

export default  Footer