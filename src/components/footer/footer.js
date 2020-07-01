import { Link } from "gatsby"
import React from "react"

import './footer.scss';

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Privacy</Link></li>
            <li><Link to="/">Terms</Link></li>
            <li><Link to="/">Jobs</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </nav>
        <p>&copy; Copyright {year}</p>
      </div>
    </footer>
  )
}

export default Footer
