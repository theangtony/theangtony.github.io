import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-row bg-primary">
        <div className="container-fluid">
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div className="navbar-nav-scroll">
              <ul className="navbar-nav bd-navbar-nav flex-row">
                <li
                  className={
                    location.pathname === '/' ? 'nav-item active' : 'nav-item'
                  }
                >
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>

                <li
                  className={
                    location.pathname === '/about/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/about/" className="nav-link">
                    About
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/stuff/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/stuff/" className="nav-link">
                    Stuff
                  </Link>
                </li>
              </ul>
            </div>
            <Link className="text-center" to="/">
              <h1 className="navbar-brand mb-0">Sticꓘey</h1>
            </Link>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default Navi
