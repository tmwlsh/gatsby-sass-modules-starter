import { Link } from "gatsby"
import React from "react"

import './header.scss';

const Header = () => (
  <header>
    <div className="container">
      <Link className="logo" to="/"><h1>Logo</h1></Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/">Login</Link></li>
          <li className="sign-up"><Link to="/">Sign up</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
