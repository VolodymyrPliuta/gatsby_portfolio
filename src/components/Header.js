import React from 'react'
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <header role='banner'>
    <nav className='uk-navbar uk-navbar-container'>

      {/* Left side */}
      <div className='uk-navbar-left'>
        <Link className='uk-navbar-item uk-logo' to='/'>
          <img className='uk-navbar-item' src="" alt="Logo" />
          <span>{siteTitle}</span>
        </Link>
      </div>

      {/* Right side */}
      {/* Medium down */}
      <div className='uk-navbar-right uk-hidden@m'>
        <a className='uk-navbar-toggle' href="#" data-uk-icon='menu' ></a>
      </div>

      {/* Medium up */}
      <div className='uk-navbar-right uk-visible@m'>
        <ul className='uk-navbar-nav'>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </div>
      {/* End right side */}
    </nav>

  </header>
)

export default Header
