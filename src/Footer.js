import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="newThemeFooter">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="footerBlock">
                <div className="row">
                  <div className="col-sm-6">
                    <h4>Developed by</h4>
                    <a
                      className="refreadLogo"
                      href="https://www.refread.com"
                      target="_blank"
                      title="Digital Library Platform | College eLibrary | Refread for Digital Libraries"
                    ></a>
                  </div>
                </div>
                <div className="content">
                  {" "}
                  Copyrights 2016-23 <br /> Refread Solutions Pvt. Ltd. <br />
                  <a
                    href="https://www.refread.com/privacyandpolicy"
                    target="_blank"
                  >
                    Terms of use
                  </a>
                  <a href="https://www.refread.com" target="_blank">
                    Refread Website
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="footerBlock">
                <h4>Links</h4>
                <ul>
                  <li>
                    <a href="http://crl.du.ac.in/aboutus.pdf" target="_blank">
                      About Library
                    </a>
                  </li>
                  <li>
                    <a href="#/login">Request an Item</a>
                  </li>
                  <li>
                    <a href="">Submit Feedback</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="footerBlock lastBlock">
                <h4>For Support</h4>
                <div className="support ng-binding">
                  {" "}
                  Write to support@refread.com ,{" "}
                  <span>
                    <br />
                    <br />
                  </span>
                  <div className="flexboday ng-binding ng-scope">
                    {" "}
                    +91 7669003059 undefined
                    <br />
                    undefined
                    <br />
                    undefined
                  </div>
                  undefined
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
