import React from "react";

const Header = () => {
  return (
    <>
      
            <nav className="navbar navbar-default navbar-fixed-top">
              <div className="bigContainer container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#/home">
                    <div className="libLogo">
                      <img src="images/logo.png" alt="drdo digital library" />
                    </div>
                  </a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav winterNavBar">
                    <li className="dropdown ng-scope">
                      <a
                        href="!#"
                        className="dropdown-toggle ng-binding"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        eResources{" "}
                      </a>
                    </li>
                    <li className="dropdown exploreMedia ng-scope">
                      <a
                        href="!#"
                        className="dropdown-toggle ng-binding"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Explore More{" "}
                      </a>
                    </li>
                    <li>
                      <a href="!#">News</a>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="logIn ng-scope">
                      <a href="#/login">Log In</a>
                    </li>
                    <li className="dropdown links">
                      <a
                        href="!#"
                        className="btn btn-login header-content profile dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li>
                          <a
                            href="http://crl.du.ac.in/aboutus.pdf"
                            target="_blank"
                          >
                            About Library
                          </a>
                        </li>
                        <li></li>
                        <li>
                          <a href="!#">Submit Feedback</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          
    </>
  );
};

export default Header;
