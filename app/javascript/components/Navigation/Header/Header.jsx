import React from 'react'
import { Link, withRouter } from 'react-router'

class Header extends React.Component {
  render() {
    return (
      <>
        <div id="topbar" className="d-none d-lg-flex align-items-end fixed-top topbar-transparent">
          <div className="container d-flex justify-content-end">
            <div className="social-links">
              <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
              <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
              <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
              <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <header id="header" className="fixed-top header-transparent">
          <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto"><Link to='/'>School</Link></h1>
            <nav className="main-nav d-none d-lg-block">
              <ul>
                <li>
                  <Link to="/students">
                    <i className="fa fa-graduation-cap"></i>Students
                  </Link>
                </li>
                <li>
                  <Link to='/teachers'>
                    <i className="fa fa-users"></i>
                    Teachers
                  </Link>
                </li>
                <li>
                  <Link to='/subjects'>
                    <i className="fa fa-book"></i>
                    Subjects
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    )
  }
}

export default withRouter(Header)
