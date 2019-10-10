import * as React from 'react';

export const Header = () =>(
  <header>
      <div>
          <nav className="navbar">
              <a className="navbar-brand zoomIn" href="/">Nobelprizes</a>
              <ul className="navbar-nav">
                  <li>
                      <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="/loaderAnimation">Loader Animation</a>
                  </li>
              </ul>
          </nav>
      </div>
  </header>

);