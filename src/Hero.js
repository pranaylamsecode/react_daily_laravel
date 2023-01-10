import React from "react";

const Hero = () => {
  return (
    <>
      <div ui-view="">
        <div id="headerTheme" className="ng-scope">
          <div id="winterTheme" className="resetHeader">
            <div className="bigContainer container">
              <div className="row">
                <div className="jumbotron col-sm-7">
                  <h1 className="animated fadeInDown ng-binding">
                    Nagpur University E-Library
                  </h1>
                  <h4 className="animated fadeInDown delay-1s ng-binding">
                    Serving You Millions of eResources | 24x7 | Everywhere
                  </h4>
                  <form className="navbar-form navbar-left ng-pristine ng-valid ng-valid-maxlength">
                    <div className="input-group col-xs-10">
                      <div className="basicSearch">
                        <div className="extraPadding col-xs-12 col-md-3 col-sm-3">
                          <div className="dropdown basicDropdownSearchBox">
                            <button
                              className="btn btn-default dropdown-toggle ng-binding"
                              type="button"
                              data-toggle="dropdown"
                            >
                              All Publications <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <span>
                                  <i></i>
                                </span>
                                <a href="!#;">Search in Title</a>
                              </li>
                              <li>
                                <span></span>
                                <a href="!#;">Search in Author</a>
                              </li>
                              <li className="itemDivider">
                                <a title="">Search in Everything</a>
                              </li>
                              <li>
                                <span>
                                  <i></i>
                                </span>
                                <a title="">All Publications</a>
                              </li>
                              <li>
                                <span></span>
                                <a title="">Articles</a>
                              </li>
                              <li>
                                <span></span>
                                <a title="">Collections</a>
                              </li>
                              <li>
                                <span></span>
                                <a title="">eBooks</a>
                              </li>
                              <li>
                                <span></span>
                                <a title="">eJournals</a>
                              </li>
                              <li>
                                <span></span>
                                <a title="">Expert Talks</a>
                              </li>
                              <li>
                                <span></span>
                                <a title="">Leisure Reading</a>
                              </li>
                              <li>
                                <span></span>
                                <a title="">Other Important links</a>
                              </li>
                              <li>
                                <span></span>
                                <a title="">News</a>
                              </li>
                              <li>
                                <span></span>
                                <a title="">Newspapers</a>
                              </li>
                              <li>
                                <span></span>
                                <a title="">Magazines</a>
                              </li>
                              <li>
                                <span></span>
                                <a title="">Theses</a>
                              </li>
                              <li>
                                <span></span>
                                <a title="">Videos</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="borderLeft col-xs-10 col-md-8 col-sm-8">
                          <div
                            angucomplete-alt=""
                            id="ex5"
                            placeholder="Enter Keywords to Search"
                            pause="100"
                            selected-object="searchTermObj"
                            remote-url="/webservice/pub/getSuggestions"
                            remote-url-request-formatter="remoteUrlRequestFn"
                            remote-url-data-field="articles"
                            title-field="title"
                            description-field="description"
                            minLength="2"
                            className="ng-isolate-scope"
                          >
                            <div className="angucomplete-holder">
                              <input id="ex5_value" name="" tabIndex="" />
                              <div
                                id="ex5_dropdown"
                                className="angucomplete-dropdown ng-hide"
                                ng-show="showDropdown"
                              >
                                <div
                                  className="angucomplete-searching ng-binding ng-hide"
                                  ng-show="searching"
                                  ng-bind="textSearching"
                                >
                                  Searching...
                                </div>
                                <div
                                  className="angucomplete-searching ng-binding"
                                  ng-show="!searching &amp;&amp; (!results || results.length == 0)"
                                  ng-bind="textNoResults"
                                >
                                  No results found
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-1 searchBtn col-md-1 col-sm-1">
                          <span className="input-group-btn">
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="searchTipsBox">
                    <a
                      href="!#;"
                      data-toggle="modal"
                      data-target="#searchTips"
                      className="searchTipsIcon"
                    >
                      <i className="fa fa-search"></i>Search Tips{" "}
                    </a>
                    <a>
                      <i className="fa fa-play-circle"></i>Watch Tutorial{" "}
                    </a>
                  </div>
                </div>
                <div className="col-sm-5">
                  <img src="images/hero.png" />
                </div>
              </div>
            </div>
          </div>
          <section>
            <div ui-view="" className="ng-scope">
              <div id="subHomeTemplate" className="ng-scope">
                <section className="libraryCollection">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="left-panel">
                          <h3 className="commonThemeHeading">
                            Massive Collection beyond eBooks &amp; eJournals
                          </h3>
                          <p>
                            Read from over 1,100,000 eResources including top,
                            peer reviewed eJournals and eBooks from world class
                            publishers.
                          </p>
                          <a href="!#;">Browse eResources</a>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="right-panel browseByPublisher">
                          <h3 className="commonThemeHeading">
                            Browse Collection by Publisher
                          </h3>
                          <div className="tabbable-panel">
                            <div className="tabbable-line">
                              <div className="tab-content">
                                <div
                                  id="myCarouselBrowser"
                                  className="myCarouselBrowser carousel slide"
                                >
                                  <div className="carousel-inner">
                                    <div className="item active">
                                      <div className="row-fluid">
                                        <div className="col-md-3 col-sm-3 col-xs-6 ng-scope">
                                          <div className="docBlock">
                                            <div className="bookCover"></div>
                                          </div>
                                          <br />
                                          <div className="otherInfo ng-binding">
                                            ACS Journals
                                          </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-6 ng-scope">
                                          <div className="docBlock">
                                            <div className="bookCover"></div>
                                          </div>
                                          <br />
                                          <div className="otherInfo ng-binding">
                                            AIP eJournals
                                          </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-6 ng-scope">
                                          <div className="docBlock">
                                            <div className="bookCover"></div>
                                          </div>
                                          <br />
                                          <div className="otherInfo ng-binding">
                                            APA Databases
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item">
                                      <div className="row-fluid">
                                        <div className="col-md-3 col-sm-3 col-xs-6 ng-scope">
                                          <div className="docBlock">
                                            <div className="bookCover"></div>
                                          </div>
                                          <br />
                                          <div className="otherInfo ng-binding">
                                            APS eJournals
                                          </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-6 ng-scope">
                                          <div className="docBlock">
                                            <div className="bookCover"></div>
                                          </div>
                                          <br />
                                          <div className="otherInfo ng-binding">
                                            Bloomsbury eBooks
                                          </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-6 ng-scope">
                                          <div className="docBlock">
                                            <div className="bookCover"></div>
                                          </div>
                                          <br />
                                          <div className="otherInfo ng-binding">
                                            Brill eBooks
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item">
                                      <div className="row-fluid">
                                        <div className="col-md-3 col-sm-3 col-xs-6 ng-scope">
                                          <div className="docBlock">
                                            <div className="bookCover"></div>
                                          </div>
                                          <br />
                                          <div className="otherInfo ng-binding">
                                            Britannica Academic
                                          </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-6 ng-scope">
                                          <div className="docBlock">
                                            <div className="bookCover"></div>
                                          </div>
                                          <br />
                                          <div className="otherInfo ng-binding">
                                            CLA Online
                                          </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-6 ng-scope">
                                          <div className="docBlock">
                                            <div className="bookCover"></div>
                                          </div>
                                          <br />
                                          <div className="otherInfo ng-binding">
                                            CMIE - Prowess IQ
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item">
                                      <div className="row-fluid">
                                        <div className="col-md-3 col-sm-3 col-xs-6 ng-scope">
                                          <div className="docBlock">
                                            <div className="bookCover"></div>
                                          </div>
                                          <br />
                                          <div className="otherInfo ng-binding">
                                            Cambridge University Press Journals
                                          </div>
                                        </div>

                                        <div className="col-md-3 col-sm-3 col-xs-6 ng-scope">
                                          <div className="docBlock">
                                            <div className="bookCover"></div>
                                          </div>
                                          <br />
                                          <div className="otherInfo ng-binding">
                                            Cambridge University Press eBooks
                                          </div>
                                        </div>

                                        <div className="col-md-3 col-sm-3 col-xs-6 ng-scope">
                                          <div className="docBlock">
                                            <div className="bookCover"></div>
                                          </div>
                                          <br />
                                          <div className="otherInfo ng-binding">
                                            Credo Reference
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <a
                                    className="left carousel-control"
                                    href=".myCarouselBrowser"
                                    data-slide="prev"
                                  >
                                    <i className="fa fa-angle-left"></i>
                                  </a>
                                  <a
                                    className="right carousel-control"
                                    href=".myCarouselBrowser"
                                    data-slide="next"
                                  >
                                    <i className="fa fa-angle-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div id="recommendedData" className="ng-scope">
                  <section
                    id="staffBlock"
                    className="libraryCollection ng-scope staffBlock"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="headingBlock">
                            <h3 className="commonThemeHeading ng-scope">
                              Staff Picks
                            </h3>
                          </div>
                          <div className="tabbable-panel">
                            <div className="tabbable-line nonescroller">
                              <ul
                                className="nav nav-tabs tbdark ng-scope"
                                id="style-1"
                              >
                                <li>
                                  <a href="!#" data-toggle="tab">
                                    eBooks
                                  </a>
                                </li>
                                <li>
                                  <a href="!#" data-toggle="tab">
                                    eJournals
                                  </a>
                                </li>

                                <li>
                                  <a href="!#" data-toggle="tab">
                                    Videos
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <br />
                            <br />
                            <div className="row">
                              <div className="tab-content">
                                <div className="tab-pane active">
                                  <div className="col-xs-12 staffBlockHeight">
                                    <div
                                      className="owl-carousel owl-theme owl-carousel-New owl-loaded owl-drag"
                                      id="owl-carousel-New"
                                    >
                                      <div className="owl-stage-outer">
                                        <div
                                          className="owl-stage"
                                          style={{
                                            transform:
                                              "translate3d(0px, 0px, 0px)",
                                            transition: "all 0s ease 0s",
                                            width: 1824,
                                          }}
                                        >
                                          <div
                                            className="owl-item active"
                                            style={{ width: "228px" }}
                                          >
                                            <div>
                                              <div>
                                                <div>
                                                  <div className="docBlock">
                                                    <div className="bookCover"></div>
                                                    <div className="padbookcover">
                                                      <h4>
                                                        <a>
                                                          A Q&amp;A Approach to
                                                          Organic Chemistry
                                                        </a>
                                                      </h4>
                                                      <div className="otherInfo ng-binding">
                                                        Taylor &amp; Francis
                                                      </div>
                                                    </div>
                                                    <div className="actionbtns">
                                                      <div>
                                                        <div>
                                                          <h4>
                                                            <a
                                                              href="!#;"
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              target="_blank"
                                                              title="A Q&amp;A Approach to Organic Chemistry"
                                                              className="ng-binding"
                                                            >
                                                              A Q&amp;A Approach
                                                              to Organic
                                                              Chemistry
                                                            </a>
                                                          </h4>
                                                          <a
                                                            href="!#;"
                                                            className="btn btn-view pull-left"
                                                            data-toggle="modal"
                                                            data-target="#offCampus"
                                                          >
                                                            Detail
                                                          </a>
                                                          <div ng-switch="result.doc_type">
                                                            <a
                                                              href="!#;"
                                                              ng-switch-default=""
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              className="btn btn-read ng-scope"
                                                            >
                                                              Read
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="btnIconBox">
                                                        <a
                                                          href="!#;"
                                                          title="Add to Reading List"
                                                        >
                                                          <i
                                                            className="fa fa-bookmark"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <a
                                                          href="!#;"
                                                          title="Export Citations"
                                                        >
                                                          <i
                                                            className="fa fa-quote-right"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <span />
                                                        <a
                                                          href="#/login"
                                                          title="Request an Item"
                                                        >
                                                          <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                        </a>
                                                        <a
                                                          href="!#;"
                                                          title="Copy on Clipboard"
                                                        >
                                                          <i
                                                            className="fa fa-share-square fa-lg fa-fw"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="owl-item active"
                                            style={{ width: 228 }}
                                          >
                                            <div>
                                              <div>
                                                <div>
                                                  <div className="docBlock">
                                                    <div className="bookCover"></div>
                                                    <div className="padbookcover">
                                                      <h4>
                                                        <a>
                                                          Anthropology of
                                                          Religion: The Basics
                                                        </a>
                                                      </h4>
                                                      <div className="otherInfo ng-binding">
                                                        Taylor &amp; Francis
                                                      </div>
                                                    </div>
                                                    <div className="actionbtns">
                                                      <div>
                                                        <div>
                                                          <h4>
                                                            <a
                                                              href="!#;"
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              target="_blank"
                                                              title="Anthropology of Religion: The Basics"
                                                              className="ng-binding"
                                                            >
                                                              Anthropology of
                                                              Religion: The
                                                              Basics
                                                            </a>
                                                          </h4>
                                                          <a
                                                            href="!#;"
                                                            className="btn btn-view pull-left"
                                                            data-toggle="modal"
                                                            data-target="#offCampus"
                                                          >
                                                            Detail
                                                          </a>
                                                          <div ng-switch="result.doc_type">
                                                            <a
                                                              href="!#;"
                                                              ng-switch-default=""
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              className="btn btn-read ng-scope"
                                                            >
                                                              Read
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="btnIconBox">
                                                        <a
                                                          href="!#;"
                                                          title="Add to Reading List"
                                                        >
                                                          <i
                                                            className="fa fa-bookmark"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <a
                                                          href="!#;"
                                                          title="Export Citations"
                                                        >
                                                          <i
                                                            className="fa fa-quote-right"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <span>
                                                          <a
                                                            href="#/login"
                                                            title="Request an Item"
                                                          >
                                                            <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                          </a>
                                                        </span>
                                                        <a
                                                          href="!#;"
                                                          title="Copy on Clipboard"
                                                        >
                                                          <i
                                                            className="fa fa-share-square fa-lg fa-fw"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="owl-item active"
                                            style={{ width: 228 }}
                                          >
                                            <div>
                                              <div>
                                                <div>
                                                  <div className="docBlock">
                                                    <div className="bookCover"></div>
                                                    <div className="padbookcover">
                                                      <h4>
                                                        <a>
                                                          Behaviour for
                                                          Learning: Promoting
                                                          Positive Relat...
                                                        </a>
                                                      </h4>
                                                      <div className="otherInfo ng-binding">
                                                        Taylor &amp; Francis
                                                      </div>
                                                    </div>
                                                    <div className="actionbtns">
                                                      <div>
                                                        <div>
                                                          <h4>
                                                            <a
                                                              href="!#;"
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              target="_blank"
                                                              title="Behaviour for Learning: Promoting Positive Relationships in the Classroom"
                                                              className="ng-binding"
                                                            >
                                                              Behaviour for
                                                              Learning:
                                                              Promoting Positive
                                                              Relat...
                                                            </a>
                                                          </h4>
                                                          <a
                                                            href="!#;"
                                                            className="btn btn-view pull-left"
                                                            data-toggle="modal"
                                                            data-target="#offCampus"
                                                          >
                                                            Detail
                                                          </a>
                                                          <div ng-switch="result.doc_type">
                                                            <a
                                                              href="!#;"
                                                              ng-switch-default=""
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              className="btn btn-read ng-scope"
                                                            >
                                                              Read
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="btnIconBox">
                                                        <a
                                                          href="!#;"
                                                          title="Add to Reading List"
                                                        >
                                                          <i
                                                            className="fa fa-bookmark"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <a
                                                          href="!#;"
                                                          title="Export Citations"
                                                        >
                                                          <i
                                                            className="fa fa-quote-right"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <span>
                                                          <a
                                                            href="#/login"
                                                            title="Request an Item"
                                                          >
                                                            <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                          </a>
                                                        </span>
                                                        <a
                                                          href="!#;"
                                                          title="Copy on Clipboard"
                                                        >
                                                          <i
                                                            className="fa fa-share-square fa-lg fa-fw"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="owl-item active"
                                            style={{ width: 228 }}
                                          >
                                            <div>
                                              <div>
                                                <div>
                                                  <div className="docBlock">
                                                    <div className="bookCover"></div>
                                                    <div className="padbookcover">
                                                      <h4>
                                                        <a>
                                                          Complexities of
                                                          Researching with Young
                                                          People
                                                        </a>
                                                      </h4>
                                                      <div className="otherInfo ng-binding">
                                                        Taylor &amp; Francis
                                                      </div>
                                                    </div>
                                                    <div className="actionbtns">
                                                      <div>
                                                        <div>
                                                          <h4>
                                                            <a
                                                              href="!#;"
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              target="_blank"
                                                              title="Complexities of Researching with Young People"
                                                              className="ng-binding"
                                                            >
                                                              Complexities of
                                                              Researching with
                                                              Young People
                                                            </a>
                                                          </h4>
                                                          <a
                                                            href="!#;"
                                                            className="btn btn-view pull-left"
                                                            data-toggle="modal"
                                                            data-target="#offCampus"
                                                          >
                                                            Detail
                                                          </a>
                                                          <div ng-switch="result.doc_type">
                                                            <a
                                                              href="!#;"
                                                              ng-switch-default=""
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              className="btn btn-read ng-scope"
                                                            >
                                                              Read
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="btnIconBox">
                                                        <a
                                                          href="!#;"
                                                          title="Add to Reading List"
                                                        >
                                                          <i
                                                            className="fa fa-bookmark"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <a
                                                          href="!#;"
                                                          title="Export Citations"
                                                        >
                                                          <i
                                                            className="fa fa-quote-right"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <span>
                                                          <a
                                                            href="#/login"
                                                            title="Request an Item"
                                                          >
                                                            <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                          </a>
                                                        </span>
                                                        <a
                                                          href="!#;"
                                                          title="Copy on Clipboard"
                                                        >
                                                          <i
                                                            className="fa fa-share-square fa-lg fa-fw"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="owl-item active"
                                            style={{ width: 228 }}
                                          >
                                            <div>
                                              <div>
                                                <div>
                                                  <div className="docBlock">
                                                    <div className="bookCover"></div>
                                                    <div className="padbookcover">
                                                      <h4>
                                                        <a>
                                                          Adventures in Social
                                                          Skills: The ‘Finding
                                                          Kite’ ...
                                                        </a>
                                                      </h4>
                                                      <div className="otherInfo ng-binding">
                                                        Taylor &amp; Francis
                                                      </div>
                                                    </div>
                                                    <div className="actionbtns">
                                                      <div>
                                                        <div>
                                                          <h4>
                                                            <a
                                                              href="!#;"
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              target="_blank"
                                                              title="Adventures in Social Skills: The ‘Finding Kite’ Teacher Resource"
                                                              className="ng-binding"
                                                            >
                                                              Adventures in
                                                              Social Skills: The
                                                              ‘Finding Kite’ ...
                                                            </a>
                                                          </h4>
                                                          <a
                                                            href="!#;"
                                                            className="btn btn-view pull-left"
                                                            data-toggle="modal"
                                                            data-target="#offCampus"
                                                          >
                                                            Detail
                                                          </a>
                                                          <div ng-switch="result.doc_type">
                                                            <a
                                                              href="!#;"
                                                              ng-switch-default=""
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              className="btn btn-read ng-scope"
                                                            >
                                                              Read
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="btnIconBox">
                                                        <a
                                                          href="!#;"
                                                          title="Add to Reading List"
                                                        >
                                                          <i
                                                            className="fa fa-bookmark"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <a
                                                          href="!#;"
                                                          title="Export Citations"
                                                        >
                                                          <i
                                                            className="fa fa-quote-right"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <span>
                                                          <a
                                                            href="#/login"
                                                            title="Request an Item"
                                                          >
                                                            <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                          </a>
                                                        </span>
                                                        <a
                                                          href="!#;"
                                                          title="Copy on Clipboard"
                                                        >
                                                          <i
                                                            className="fa fa-share-square fa-lg fa-fw"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="owl-item"
                                            style={{ width: 228 }}
                                          >
                                            <div>
                                              <div>
                                                <div>
                                                  <div className="docBlock">
                                                    <div className="bookCover"></div>
                                                    <div className="padbookcover">
                                                      <h4>
                                                        <a>
                                                          Indigenist
                                                          Mobilization
                                                        </a>
                                                      </h4>
                                                      <div className="otherInfo ng-binding">
                                                        Orient Blackswan
                                                      </div>
                                                    </div>
                                                    <div className="actionbtns">
                                                      <div>
                                                        <div>
                                                          <h4>
                                                            <a
                                                              href="!#;"
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              target="_blank"
                                                              title="Indigenist Mobilization"
                                                              className="ng-binding"
                                                            >
                                                              Indigenist
                                                              Mobilization
                                                            </a>
                                                          </h4>
                                                          <a
                                                            href="!#;"
                                                            className="btn btn-view pull-left"
                                                            data-toggle="modal"
                                                            data-target="#offCampus"
                                                          >
                                                            Detail
                                                          </a>
                                                          <div ng-switch="result.doc_type">
                                                            <a
                                                              href="!#;"
                                                              ng-switch-default=""
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              className="btn btn-read ng-scope"
                                                            >
                                                              Read
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="btnIconBox">
                                                        <a
                                                          href="!#;"
                                                          title="Add to Reading List"
                                                        >
                                                          <i
                                                            className="fa fa-bookmark"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <a
                                                          href="!#;"
                                                          title="Export Citations"
                                                        >
                                                          <i
                                                            className="fa fa-quote-right"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <span>
                                                          <a
                                                            href="#/login"
                                                            title="Request an Item"
                                                          >
                                                            <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                          </a>
                                                        </span>
                                                        <a
                                                          href="!#;"
                                                          title="Copy on Clipboard"
                                                        >
                                                          <i
                                                            className="fa fa-share-square fa-lg fa-fw"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="owl-item"
                                            style={{ width: 228 }}
                                          >
                                            <div>
                                              <div>
                                                <div>
                                                  <div className="docBlock">
                                                    <div className="bookCover"></div>
                                                    <div className="padbookcover">
                                                      <h4>
                                                        <a>
                                                          Ageing and Technology
                                                        </a>
                                                      </h4>
                                                      <div className="otherInfo ng-binding">
                                                        DOAB
                                                      </div>
                                                    </div>
                                                    <div className="actionbtns">
                                                      <div>
                                                        <div>
                                                          <h4>
                                                            <a
                                                              href="!#;"
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              target="_blank"
                                                              title="Ageing and Technology"
                                                              className="ng-binding"
                                                            >
                                                              Ageing and
                                                              Technology
                                                            </a>
                                                          </h4>
                                                          <a
                                                            href="!#;"
                                                            className="btn btn-view pull-left"
                                                            data-toggle="modal"
                                                            data-target="#offCampus"
                                                          >
                                                            Detail
                                                          </a>
                                                          <div ng-switch="result.doc_type">
                                                            <a
                                                              href="!#;"
                                                              ng-switch-default=""
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              className="btn btn-read ng-scope"
                                                            >
                                                              Read
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="btnIconBox">
                                                        <a
                                                          href="!#;"
                                                          title="Add to Reading List"
                                                        >
                                                          <i
                                                            className="fa fa-bookmark"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <a
                                                          href="!#;"
                                                          title="Export Citations"
                                                        >
                                                          <i
                                                            className="fa fa-quote-right"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <span>
                                                          <a
                                                            href="#/login"
                                                            title="Request an Item"
                                                          >
                                                            <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                          </a>
                                                        </span>
                                                        <a
                                                          href="!#;"
                                                          title="Copy on Clipboard"
                                                        >
                                                          <i
                                                            className="fa fa-share-square fa-lg fa-fw"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="owl-item"
                                            style={{ width: 228 }}
                                          >
                                            <div>
                                              <div>
                                                <div>
                                                  <div className="docBlock">
                                                    <div className="bookCover"></div>
                                                    <div className="padbookcover">
                                                      <h4>
                                                        <a>
                                                          Confucian Role Ethics
                                                        </a>
                                                      </h4>
                                                      <div className="otherInfo ng-binding">
                                                        DOAB
                                                      </div>
                                                    </div>
                                                    <div className="actionbtns">
                                                      <div>
                                                        <div>
                                                          <h4>
                                                            <a
                                                              href="!#;"
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              target="_blank"
                                                              title="Confucian Role Ethics"
                                                              className="ng-binding"
                                                            >
                                                              Confucian Role
                                                              Ethics
                                                            </a>
                                                          </h4>
                                                          <a
                                                            href="!#;"
                                                            className="btn btn-view pull-left"
                                                            data-toggle="modal"
                                                            data-target="#offCampus"
                                                          >
                                                            Detail
                                                          </a>
                                                          <div ng-switch="result.doc_type">
                                                            <a
                                                              href="!#;"
                                                              ng-switch-default=""
                                                              data-toggle="modal"
                                                              data-target="#offCampus"
                                                              className="btn btn-read ng-scope"
                                                            >
                                                              Read
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="btnIconBox">
                                                        <a
                                                          href="!#;"
                                                          title="Add to Reading List"
                                                        >
                                                          <i
                                                            className="fa fa-bookmark"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <a
                                                          href="!#;"
                                                          title="Export Citations"
                                                        >
                                                          <i
                                                            className="fa fa-quote-right"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                        <span>
                                                          <a
                                                            href="#/login"
                                                            title="Request an Item"
                                                          >
                                                            <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                          </a>
                                                        </span>
                                                        <a
                                                          href="!#;"
                                                          title="Copy on Clipboard"
                                                        >
                                                          <i
                                                            className="fa fa-share-square fa-lg fa-fw"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="owl-nav">
                                        <button
                                          type="button"
                                          role="presentation"
                                          className="owl-prev disabled"
                                        >
                                          <span aria-label="Previous">‹</span>
                                        </button>
                                        <button
                                          type="button"
                                          role="presentation"
                                          className="owl-next"
                                        >
                                          <span aria-label="Next">›</span>
                                        </button>
                                      </div>
                                      <div className="owl-dots">
                                        <button
                                          role="button"
                                          className="owl-dot active"
                                        >
                                          <span></span>
                                        </button>
                                        <button
                                          role="button"
                                          className="owl-dot"
                                        >
                                          <span></span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div
                    className="modal fade"
                    id="raUserPassModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel"
                  >
                    <div className="modal-dialog notificationModal">
                      <div className="modal-content">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                        <div className="modal-body">
                          <h4 className="text-center ng-binding">
                            {" "}
                            requires another login for full text access. Please
                            login using:{" "}
                          </h4>
                          <div className="lh50">&nbsp;</div>
                          <table className="table text-left">
                            <tbody>
                              <tr>
                                <td>UserName</td>
                                <td className="ng-binding">
                                  <a
                                    href="!#;"
                                    className="pull-right"
                                    title="Copy to Clipboard"
                                  >
                                    <i className="fa fa-clipboard"></i>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Password</td>
                                <td className="ng-binding">
                                  <a
                                    href="!#;"
                                    className="pull-right"
                                    title="Copy to Clipboard"
                                  >
                                    <i className="fa fa-clipboard"></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <a
                            href=""
                            target="_blank"
                            title="Countinue to publisher website"
                            className="btn btn-primary"
                          >
                            {" "}
                            Countinue to publisher website{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="saveDocModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel"
                  >
                    <div className="modal-dialog saveDocModal">
                      <div className="modal-content ng-scope">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                        <div className="modal-body">
                          <br />
                          <br />
                          <br />
                          <br />
                          <h3 className="text-center">
                            You need to login to save documents.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <section>
                  <div id="trendingData" className="ng-scope">
                    <section className="libraryInfo libraryHelpPoints ng-scope">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-7">
                            <h3 className="commonThemeHeading ng-binding">
                              New to Nagpur University E-Library?
                            </h3>
                            <p>
                              Here are some quick links to help you get started.
                            </p>
                            <div className="lh30">&nbsp;</div>
                            <div className="row">
                              <div className="col-md-6 col-sm-6">
                                <a href="#/login">JOIN THE LIBRARY</a>
                                <p>
                                  Signup for an account when connected to the
                                  campus network or contact library
                                  administrator.{" "}
                                </p>
                              </div>
                              <div className="col-md-6 col-sm-6">
                                <a href="mailto:support@refread.com">
                                  GET HELP
                                </a>
                                <p>
                                  Contact the University Librarian at
                                  elibrary@duls.du.ac.in or{" "}
                                  <b>support@refread.com</b> for any support,
                                  feedback or suggestions.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-5 libraryWorkBlock">
                            <h3 className="commonThemeHeading">
                              HOW this eLIBRARY WORKS
                            </h3>
                            <a
                              href="https://www.youtube.com/embed/hAb2yeiZm9U"
                              target="_blank"
                            >
                              <img
                                src="https://duelibrary.in/content/images/drdo/video-placeholder.png"
                                alt="img"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      id="trendingBlock"
                      className="trending-main libraryCollection ng-scope trendBlock"
                    >
                      <div className="container">
                        <div className="headingBlock">
                          <h3 className="commonThemeHeading">Trending</h3>
                        </div>
                        <div className="">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="owl-carousel owl-theme owl-loaded owl-drag"
                                id="owl-carousel-trending"
                              >
                                <div className="owl-stage-outer">
                                  <div className="owl-stage">
                                    <div
                                      className="owl-item active"
                                      style={{ width: 228 }}
                                    >
                                      <div>
                                        <div className="">
                                          <div>
                                            <div className="docBlock">
                                              <div className="bookCover"></div>
                                              <div className="padbookcover">
                                                <h4>
                                                  <a>
                                                    Economics &amp; Political
                                                    Weekly
                                                  </a>
                                                </h4>
                                                <div className="otherInfo ng-binding">
                                                  Economics &amp; Political
                                                  Weekly
                                                </div>
                                              </div>
                                              <div className="actionbtns">
                                                <div>
                                                  <div>
                                                    <h4>
                                                      <a
                                                        href="!#;"
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        title="Economics &amp; Political Weekly"
                                                        className="ng-binding"
                                                      >
                                                        Economics &amp;
                                                        Political Weekly
                                                      </a>
                                                    </h4>
                                                    <a
                                                      href="!#;"
                                                      className="btn btn-view pull-left"
                                                      data-toggle="modal"
                                                      data-target="#offCampus"
                                                    >
                                                      Detail
                                                    </a>
                                                    <div ng-switch="result.doc_type">
                                                      <a
                                                        href="!#;"
                                                        ng-switch-default=""
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        className="btn btn-read ng-scope"
                                                      >
                                                        Read
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="btnIconBox">
                                                  <a
                                                    href="!#;"
                                                    title="Add to Reading List"
                                                  >
                                                    <i
                                                      className="fa fa-bookmark"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <a
                                                    href="!#;"
                                                    title="Export Citations"
                                                  >
                                                    <i
                                                      className="fa fa-quote-right"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <span>
                                                    <a
                                                      href="#/login"
                                                      title="Request an Item"
                                                    >
                                                      <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                    </a>
                                                  </span>
                                                  <a
                                                    href="!#;"
                                                    title="Copy on Clipboard"
                                                  >
                                                    <i
                                                      className="fa fa-share-square fa-lg fa-fw"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owl-item active"
                                      style={{ width: 228 }}
                                    >
                                      <div>
                                        <div className="">
                                          <div>
                                            <div className="docBlock">
                                              <div className="bookCover"></div>
                                              <div className="padbookcover">
                                                <h4>
                                                  <a>Science</a>
                                                </h4>
                                                <div className="otherInfo ng-binding">
                                                  AAAS
                                                </div>
                                              </div>
                                              <div className="actionbtns">
                                                <div>
                                                  <div>
                                                    <h4>
                                                      <a
                                                        href="!#;"
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        title="Science"
                                                        className="ng-binding"
                                                      >
                                                        Science
                                                      </a>
                                                    </h4>
                                                    <a
                                                      href="!#;"
                                                      className="btn btn-view pull-left"
                                                      data-toggle="modal"
                                                      data-target="#offCampus"
                                                    >
                                                      Detail
                                                    </a>
                                                    <div ng-switch="result.doc_type">
                                                      <a
                                                        href="!#;"
                                                        ng-switch-default=""
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        className="btn btn-read ng-scope"
                                                      >
                                                        Read
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="btnIconBox">
                                                  <a
                                                    href="!#;"
                                                    title="Add to Reading List"
                                                  >
                                                    <i
                                                      className="fa fa-bookmark"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <a
                                                    href="!#;"
                                                    title="Export Citations"
                                                  >
                                                    <i
                                                      className="fa fa-quote-right"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <span>
                                                    <a
                                                      href="#/login"
                                                      title="Request an Item"
                                                    >
                                                      <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                    </a>
                                                  </span>
                                                  <a
                                                    href="!#;"
                                                    title="Copy on Clipboard"
                                                  >
                                                    <i
                                                      className="fa fa-share-square fa-lg fa-fw"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owl-item active"
                                      style={{ width: 228 }}
                                    >
                                      <div>
                                        <div className="">
                                          <div>
                                            <div className="docBlock">
                                              <div className="bookCover"></div>
                                              <div className="padbookcover">
                                                <h4>
                                                  <a>
                                                    Understanding Criminal
                                                    Justice: Sociological Per
                                                  </a>
                                                </h4>
                                                <div className="otherInfo ng-binding">
                                                  Sage
                                                </div>
                                              </div>
                                              <div className="actionbtns">
                                                <div>
                                                  <div>
                                                    <h4>
                                                      <a
                                                        href="!#;"
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        title="Understanding Criminal Justice: Sociological Perspectives"
                                                        className="ng-binding"
                                                      >
                                                        Understanding Criminal
                                                        Justice: Sociological
                                                        Per...
                                                      </a>
                                                    </h4>
                                                    <a
                                                      href="!#;"
                                                      className="btn btn-view pull-left"
                                                      data-toggle="modal"
                                                      data-target="#offCampus"
                                                    >
                                                      Detail
                                                    </a>
                                                    <div ng-switch="result.doc_type">
                                                      <a
                                                        href="!#;"
                                                        ng-switch-default=""
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        className="btn btn-read ng-scope"
                                                      >
                                                        Read
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="btnIconBox">
                                                  <a
                                                    href="!#;"
                                                    title="Add to Reading List"
                                                  >
                                                    <i
                                                      className="fa fa-bookmark"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <a
                                                    href="!#;"
                                                    title="Export Citations"
                                                  >
                                                    <i
                                                      className="fa fa-quote-right"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <span>
                                                    <a
                                                      href="#/login"
                                                      title="Request an Item"
                                                    >
                                                      <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                    </a>
                                                  </span>
                                                  <a
                                                    href="!#;"
                                                    title="Copy on Clipboard"
                                                  >
                                                    <i
                                                      className="fa fa-share-square fa-lg fa-fw"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owl-item active"
                                      style={{ width: 228 }}
                                    >
                                      <div>
                                        <div className="">
                                          <div>
                                            <div className="docBlock">
                                              <div className="bookCover"></div>
                                              <div className="padbookcover">
                                                <h4>
                                                  <a>
                                                    India-Pakistanin War And
                                                    Peace
                                                  </a>
                                                </h4>
                                                <div className="otherInfo ng-binding">
                                                  Taylor &amp; Francis
                                                </div>
                                              </div>
                                              <div className="actionbtns">
                                                <div>
                                                  <div>
                                                    <h4>
                                                      <a
                                                        href="!#;"
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        title="India-Pakistanin War And Peace"
                                                        className="ng-binding"
                                                      >
                                                        India-Pakistanin War And
                                                        Peace
                                                      </a>
                                                    </h4>
                                                    <a
                                                      href="!#;"
                                                      className="btn btn-view pull-left"
                                                      data-toggle="modal"
                                                      data-target="#offCampus"
                                                    >
                                                      Detail
                                                    </a>
                                                    <div ng-switch="result.doc_type">
                                                      <a
                                                        href="!#;"
                                                        ng-switch-default=""
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        className="btn btn-read ng-scope"
                                                      >
                                                        Read
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="btnIconBox">
                                                  <a
                                                    href="!#;"
                                                    title="Add to Reading List"
                                                  >
                                                    <i
                                                      className="fa fa-bookmark"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <a
                                                    href="!#;"
                                                    title="Export Citations"
                                                  >
                                                    <i
                                                      className="fa fa-quote-right"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <span>
                                                    <a
                                                      href="#/login"
                                                      title="Request an Item"
                                                    >
                                                      <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                    </a>
                                                  </span>
                                                  <a
                                                    href="!#;"
                                                    title="Copy on Clipboard"
                                                  >
                                                    <i
                                                      className="fa fa-share-square fa-lg fa-fw"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owl-item active"
                                      style={{ width: 228 }}
                                    >
                                      <div>
                                        <div className="">
                                          <div>
                                            <div className="docBlock">
                                              <div className="bookCover"></div>
                                              <div className="padbookcover">
                                                <h4>
                                                  <a>Theory Of Knowledge</a>
                                                </h4>
                                                <div className="otherInfo ng-binding">
                                                  Taylor &amp; Francis
                                                </div>
                                              </div>
                                              <div className="actionbtns">
                                                <div>
                                                  <div>
                                                    <h4>
                                                      <a
                                                        href="!#;"
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        title="Theory Of Knowledge"
                                                        className="ng-binding"
                                                      >
                                                        Theory Of Knowledge
                                                      </a>
                                                    </h4>
                                                    <a
                                                      href="!#;"
                                                      className="btn btn-view pull-left"
                                                      data-toggle="modal"
                                                      data-target="#offCampus"
                                                    >
                                                      Detail
                                                    </a>
                                                    <div ng-switch="result.doc_type">
                                                      <a
                                                        href="!#;"
                                                        ng-switch-default=""
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        className="btn btn-read ng-scope"
                                                      >
                                                        Read
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="btnIconBox">
                                                  <a
                                                    href="!#;"
                                                    title="Add to Reading List"
                                                  >
                                                    <i
                                                      className="fa fa-bookmark"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <a
                                                    href="!#;"
                                                    title="Export Citations"
                                                  >
                                                    <i
                                                      className="fa fa-quote-right"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <span>
                                                    <a
                                                      href="#/login"
                                                      title="Request an Item"
                                                    >
                                                      <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                    </a>
                                                  </span>
                                                  <a
                                                    href="!#;"
                                                    title="Copy on Clipboard"
                                                  >
                                                    <i
                                                      className="fa fa-share-square fa-lg fa-fw"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owl-item"
                                      style={{ width: 228 }}
                                    >
                                      <div>
                                        <div className="">
                                          <div>
                                            <div className="docBlock">
                                              <div className="bookCover"></div>
                                              <div className="padbookcover">
                                                <h4>
                                                  <a>
                                                    Constitutional Democracy In
                                                    India
                                                  </a>
                                                </h4>
                                                <div className="otherInfo ng-binding">
                                                  Taylor &amp; Francis
                                                </div>
                                              </div>
                                              <div className="actionbtns">
                                                <div>
                                                  <div>
                                                    <h4>
                                                      <a
                                                        href="!#;"
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        title="Constitutional Democracy In India"
                                                        className="ng-binding"
                                                      >
                                                        Constitutional Democracy
                                                        In India
                                                      </a>
                                                    </h4>
                                                    <a
                                                      href="!#;"
                                                      className="btn btn-view pull-left"
                                                      data-toggle="modal"
                                                      data-target="#offCampus"
                                                    >
                                                      Detail
                                                    </a>
                                                    <div ng-switch="result.doc_type">
                                                      <a
                                                        href="!#;"
                                                        ng-switch-default=""
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        className="btn btn-read ng-scope"
                                                      >
                                                        Read
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="btnIconBox">
                                                  <a
                                                    href="!#;"
                                                    title="Add to Reading List"
                                                  >
                                                    <i
                                                      className="fa fa-bookmark"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <a
                                                    href="!#;"
                                                    title="Export Citations"
                                                  >
                                                    <i
                                                      className="fa fa-quote-right"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <span>
                                                    <a
                                                      href="#/login"
                                                      title="Request an Item"
                                                    >
                                                      <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                    </a>
                                                  </span>
                                                  <a
                                                    href="!#;"
                                                    title="Copy on Clipboard"
                                                  >
                                                    <i
                                                      className="fa fa-share-square fa-lg fa-fw"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owl-item"
                                      style={{ width: 228 }}
                                    >
                                      <div>
                                        <div className="">
                                          <div>
                                            <div className="docBlock">
                                              <div className="bookCover"></div>
                                              <div className="padbookcover">
                                                <h4>
                                                  <a>Physical Biology</a>
                                                </h4>
                                                <div className="otherInfo ng-binding">
                                                  IOP Science
                                                </div>
                                              </div>
                                              <div className="actionbtns">
                                                <div>
                                                  <div>
                                                    <h4>
                                                      <a
                                                        href="!#;"
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        title="Physical Biology"
                                                        className="ng-binding"
                                                      >
                                                        Physical Biology
                                                      </a>
                                                    </h4>
                                                    <a
                                                      href="!#;"
                                                      className="btn btn-view pull-left"
                                                      data-toggle="modal"
                                                      data-target="#offCampus"
                                                    >
                                                      Detail
                                                    </a>
                                                    <div ng-switch="result.doc_type">
                                                      <a
                                                        href="!#;"
                                                        ng-switch-default=""
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        className="btn btn-read ng-scope"
                                                      >
                                                        Read
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="btnIconBox">
                                                  <a
                                                    href="!#;"
                                                    title="Add to Reading List"
                                                  >
                                                    <i
                                                      className="fa fa-bookmark"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <a
                                                    href="!#;"
                                                    title="Export Citations"
                                                  >
                                                    <i
                                                      className="fa fa-quote-right"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <span>
                                                    <a
                                                      href="#/login"
                                                      title="Request an Item"
                                                    >
                                                      <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                    </a>
                                                  </span>
                                                  <a
                                                    href="!#;"
                                                    title="Copy on Clipboard"
                                                  >
                                                    <i
                                                      className="fa fa-share-square fa-lg fa-fw"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owl-item"
                                      style={{ width: 228 }}
                                    >
                                      <div>
                                        <div className="">
                                          <div>
                                            <div className="docBlock">
                                              <div className="bookCover"></div>
                                              <div className="padbookcover">
                                                <h4>
                                                  <a>
                                                    Principles Of Cybercrime
                                                  </a>
                                                </h4>
                                                <div className="otherInfo ng-binding">
                                                  Cambridge University Press
                                                </div>
                                              </div>
                                              <div className="actionbtns">
                                                <div>
                                                  <div>
                                                    <h4>
                                                      <a
                                                        href="!#;"
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        title="Principles Of Cybercrime"
                                                        className="ng-binding"
                                                      >
                                                        Principles Of Cybercrime
                                                      </a>
                                                    </h4>
                                                    <a
                                                      href="!#;"
                                                      className="btn btn-view pull-left"
                                                      data-toggle="modal"
                                                      data-target="#offCampus"
                                                    >
                                                      Detail
                                                    </a>
                                                    <div ng-switch="result.doc_type">
                                                      <a
                                                        href="!#;"
                                                        ng-switch-default=""
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        className="btn btn-read ng-scope"
                                                      >
                                                        Read
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="btnIconBox">
                                                  <a
                                                    href="!#;"
                                                    title="Add to Reading List"
                                                  >
                                                    <i
                                                      className="fa fa-bookmark"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <a
                                                    href="!#;"
                                                    title="Export Citations"
                                                  >
                                                    <i
                                                      className="fa fa-quote-right"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <span>
                                                    <a
                                                      href="#/login"
                                                      title="Request an Item"
                                                    >
                                                      <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                    </a>
                                                  </span>
                                                  <a
                                                    href="!#;"
                                                    title="Copy on Clipboard"
                                                  >
                                                    <i
                                                      className="fa fa-share-square fa-lg fa-fw"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owl-item"
                                      style={{ width: 228 }}
                                    >
                                      <div>
                                        <div className="">
                                          <div>
                                            <div className="docBlock">
                                              <div className="bookCover"></div>
                                              <div className="padbookcover">
                                                <h4>
                                                  <a>Feminism/Postmodernism</a>
                                                </h4>
                                                <div className="otherInfo ng-binding">
                                                  Taylor &amp; Francis
                                                </div>
                                              </div>
                                              <div className="actionbtns">
                                                <div>
                                                  <div>
                                                    <h4>
                                                      <a
                                                        href="!#;"
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        title="Feminism/Postmodernism"
                                                        className="ng-binding"
                                                      >
                                                        Feminism/Postmodernism
                                                      </a>
                                                    </h4>
                                                    <a
                                                      href="!#;"
                                                      className="btn btn-view pull-left"
                                                      data-toggle="modal"
                                                      data-target="#offCampus"
                                                    >
                                                      Detail
                                                    </a>
                                                    <div ng-switch="result.doc_type">
                                                      <a
                                                        href="!#;"
                                                        ng-switch-default=""
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        className="btn btn-read ng-scope"
                                                      >
                                                        Read
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="btnIconBox">
                                                  <a
                                                    href="!#;"
                                                    title="Add to Reading List"
                                                  >
                                                    <i
                                                      className="fa fa-bookmark"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <a
                                                    href="!#;"
                                                    title="Export Citations"
                                                  >
                                                    <i
                                                      className="fa fa-quote-right"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <span>
                                                    <a
                                                      href="#/login"
                                                      title="Request an Item"
                                                    >
                                                      <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                    </a>
                                                  </span>
                                                  <a
                                                    href="!#;"
                                                    title="Copy on Clipboard"
                                                  >
                                                    <i
                                                      className="fa fa-share-square fa-lg fa-fw"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owl-item"
                                      style={{ width: 228 }}
                                    >
                                      <div>
                                        <div className="">
                                          <div>
                                            <div className="docBlock">
                                              <div className="bookCover"></div>
                                              <div className="padbookcover">
                                                <h4>
                                                  <a>
                                                    International Law and the
                                                  </a>
                                                </h4>
                                                <div className="otherInfo ng-binding">
                                                  Harvard University
                                                </div>
                                              </div>
                                              <div className="actionbtns">
                                                <div>
                                                  <div>
                                                    <h4>
                                                      <a
                                                        href="!#;"
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        title='Partha Chatterjee on "International Law and the Pedagogy of Violence"'
                                                        className="ng-binding"
                                                      >
                                                        Partha Chatterjee on
                                                        "International Law and
                                                        the ...
                                                      </a>
                                                    </h4>
                                                    <a
                                                      href="!#;"
                                                      className="btn btn-view pull-left"
                                                      data-toggle="modal"
                                                      data-target="#offCampus"
                                                    >
                                                      Detail
                                                    </a>
                                                    <div ng-switch="result.doc_type">
                                                      <a
                                                        href="!#;"
                                                        ng-switch-when="Video"
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        className="btn btn-read ng-scope"
                                                      >
                                                        Watch
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="btnIconBox">
                                                  <a
                                                    href="!#;"
                                                    title="Add to Reading List"
                                                  >
                                                    <i
                                                      className="fa fa-bookmark"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <a
                                                    href="!#;"
                                                    title="Export Citations"
                                                  >
                                                    <i
                                                      className="fa fa-quote-right"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <a
                                                    href="!#;"
                                                    title="Copy on Clipboard"
                                                  >
                                                    <i
                                                      className="fa fa-share-square fa-lg fa-fw"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owl-item"
                                      style={{ width: 228 }}
                                    >
                                      <div>
                                        <div className="">
                                          <div>
                                            <div className="docBlock">
                                              <div className="bookCover"></div>
                                              <div className="padbookcover">
                                                <h4>
                                                  <a>
                                                    How liberalization impacts
                                                    us reforms: How Bolly...
                                                  </a>
                                                </h4>
                                                <div className="otherInfo ng-binding"></div>
                                              </div>
                                              <div className="actionbtns">
                                                <div>
                                                  <div>
                                                    <h4>
                                                      <a
                                                        href="!#;"
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        title="How liberalization impacts us reforms: How Bollywood portrays them"
                                                        className="ng-binding"
                                                      >
                                                        How liberalization
                                                        impacts us reforms: How
                                                        Bolly...
                                                      </a>
                                                    </h4>
                                                    <a
                                                      href="!#;"
                                                      className="btn btn-view pull-left"
                                                      data-toggle="modal"
                                                      data-target="#offCampus"
                                                    >
                                                      Detail
                                                    </a>
                                                    <div ng-switch="result.doc_type">
                                                      <a
                                                        href="!#;"
                                                        ng-switch-default=""
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        className="btn btn-read ng-scope"
                                                      >
                                                        Read
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="btnIconBox">
                                                  <a
                                                    href="!#;"
                                                    title="Add to Reading List"
                                                  >
                                                    <i
                                                      className="fa fa-bookmark"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <a
                                                    href="!#;"
                                                    title="Export Citations"
                                                  >
                                                    <i
                                                      className="fa fa-quote-right"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <span>
                                                    <a
                                                      href="#/login"
                                                      title="Request an Item"
                                                    >
                                                      <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                    </a>
                                                  </span>
                                                  <a
                                                    href="!#;"
                                                    title="Copy on Clipboard"
                                                  >
                                                    <i
                                                      className="fa fa-share-square fa-lg fa-fw"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owl-item"
                                      style={{ width: 228 }}
                                    >
                                      <div>
                                        <div className="">
                                          <div>
                                            <div className="docBlock">
                                              <div className="bookCover"></div>
                                              <div className="padbookcover">
                                                <h4>
                                                  <a>
                                                    Anthropology of Religion:
                                                    The Basics
                                                  </a>
                                                </h4>
                                                <div className="otherInfo ng-binding">
                                                  Taylor &amp; Francis
                                                </div>
                                              </div>
                                              <div className="actionbtns">
                                                <div>
                                                  <div>
                                                    <h4>
                                                      <a
                                                        href="!#;"
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        title="Anthropology of Religion: The Basics"
                                                        className="ng-binding"
                                                      >
                                                        Anthropology of
                                                        Religion: The Basics
                                                      </a>
                                                    </h4>
                                                    <a
                                                      href="!#;"
                                                      className="btn btn-view pull-left"
                                                      data-toggle="modal"
                                                      data-target="#offCampus"
                                                    >
                                                      Detail
                                                    </a>
                                                    <div ng-switch="result.doc_type">
                                                      <a
                                                        href="!#;"
                                                        ng-switch-default=""
                                                        data-toggle="modal"
                                                        data-target="#offCampus"
                                                        className="btn btn-read ng-scope"
                                                      >
                                                        Read
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="btnIconBox">
                                                  <a
                                                    href="!#;"
                                                    title="Add to Reading List"
                                                  >
                                                    <i
                                                      className="fa fa-bookmark"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <a
                                                    href="!#;"
                                                    title="Export Citations"
                                                  >
                                                    <i
                                                      className="fa fa-quote-right"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                  <span>
                                                    <a
                                                      href="#/login"
                                                      title="Request an Item"
                                                    >
                                                      <i className="fa fa-info-circle fa-lg fa-fw"></i>
                                                    </a>
                                                  </span>
                                                  <a
                                                    href="!#;"
                                                    title="Copy on Clipboard"
                                                  >
                                                    <i
                                                      className="fa fa-share-square fa-lg fa-fw"
                                                      aria-hidden="true"
                                                    ></i>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="owl-nav">
                                  <button
                                    type="button"
                                    role="presentation"
                                    className="owl-prev disabled"
                                  >
                                    <span aria-label="Previous">‹</span>
                                  </button>
                                  <button
                                    type="button"
                                    role="presentation"
                                    className="owl-next"
                                  >
                                    <span aria-label="Next">›</span>
                                  </button>
                                </div>
                                <div className="owl-dots">
                                  <button
                                    role="button"
                                    className="owl-dot active"
                                  >
                                    <span></span>
                                  </button>
                                  <button role="button" className="owl-dot">
                                    <span></span>
                                  </button>
                                  <button role="button" className="owl-dot">
                                    <span></span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      className="winterNewsBlock ng-scope"
                      id="noticeBoardBlock"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-7 ng-scope">
                            <div className="headingBlock">
                              <h3 className="commonThemeHeading">News</h3>
                              <div className="menuLink ng-scope">
                                <a href="#/news">View All</a>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-md-6 ng-scope">
                                    <ul className="media-list">
                                      <li className="media">
                                        <div className="media-left">
                                          <a href="!#;">
                                            <img className="media-object" />
                                          </a>
                                        </div>
                                        <div className="media-body">
                                          <a>
                                            Nagpur University students, teachers
                                            hold 'Tiranga Yatra'
                                          </a>
                                          <p className="ng-binding">PTI</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-6 ng-scope">
                                    <ul className="media-list">
                                      <li className="media">
                                        <div className="media-left">
                                          <a href="!#;">
                                            <img className="media-object" />
                                          </a>
                                        </div>
                                        <div className="media-body">
                                          <a>
                                            National Education Policy - Nagpur
                                            University plans value-add courses
                                            o...
                                          </a>
                                          <p className="ng-binding">PTI</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-6 ng-scope">
                                    <ul className="media-list">
                                      <li className="media">
                                        <div className="media-left">
                                          <a href="!#;">
                                            <img className="media-object" />
                                          </a>
                                        </div>
                                        <div className="media-body">
                                          <a>
                                            DU warns against fake exam circular
                                            on social media
                                          </a>
                                          <p className="ng-binding">
                                            Express News Service
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-6 ng-scope">
                                    <ul className="media-list">
                                      <li className="media">
                                        <div className="media-left">
                                          <a href="!#;">
                                            <img className="media-object" />
                                          </a>
                                        </div>
                                        <div className="media-body">
                                          <a>
                                            DU’s final-year students have their
                                            bucket lists sorted
                                          </a>
                                          <p className="ng-binding">
                                            Karan Sethi
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-6 ng-scope">
                                    <ul className="media-list">
                                      <li className="media">
                                        <div className="media-left">
                                          <a href="!#;">
                                            <img className="media-object" />
                                          </a>
                                        </div>
                                        <div className="media-body">
                                          <a>
                                            Nagpur University plans to launch
                                            certificate courses for students
                                            from...
                                          </a>
                                          <p className="ng-binding">
                                            Times Now
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-6 ng-scope">
                                    <ul className="media-list">
                                      <li className="media">
                                        <div className="media-left">
                                          <a href="!#;">
                                            <img className="media-object" />
                                          </a>
                                        </div>
                                        <div className="media-body">
                                          <a>
                                            Nagpur University plans to launch
                                            Start Research Centre for promoting
                                            S...
                                          </a>
                                          <p className="ng-binding">
                                            Edu Graph
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-6 ng-scope">
                                    <ul className="media-list">
                                      <li className="media">
                                        <div className="media-left">
                                          <a href="!#;">
                                            <img className="media-object" />
                                          </a>
                                        </div>
                                        <div className="media-body">
                                          <a>
                                            Nagpur University directs colleges
                                            to continue services of ad hoc
                                            teach...
                                          </a>
                                          <p className="ng-binding">
                                            Career 360
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-6 ng-scope">
                                    <ul className="media-list">
                                      <li className="media">
                                        <div className="media-left">
                                          <a href="!#;">
                                            <img className="media-object" />
                                          </a>
                                        </div>
                                        <div className="media-body">
                                          <a>
                                            After JNU, DU now shuts libraries
                                            indefinitely. Books to be issued
                                            onl...
                                          </a>
                                          <p className="ng-binding">
                                            EDEX Live
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-5">
                            <div className="noticeBlock ng-scope">
                              <h3 className="commonThemeHeading">
                                Notice Board
                              </h3>
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="media-left media-middle ng-scope">
                                    <a href="!#;">
                                      <i className="fa fa-file-text-o media-object"></i>
                                    </a>
                                  </div>
                                  <div className="media-body ng-scope">
                                    <h4 className="media-heading">
                                      <b className="ng-binding">
                                        {" "}
                                        "For any error or broken link,
                                        observation, comments and feedback
                                        please write to us at
                                        elbrary@duls.du.ac.in"
                                      </b>
                                    </h4>
                                  </div>
                                </div>
                                <div className="media-left media-middle ng-scope">
                                  <a
                                    href="https://du.refread.com/#/home"
                                    target="_blank"
                                  >
                                    <i className="fa fa-link media-object"></i>
                                  </a>
                                </div>
                                <div className="media-body ng-scope">
                                  <a
                                    href="https://du.refread.com/#/home"
                                    target="_blank"
                                    className="media-heading ng-binding"
                                  >
                                    Nagpur University eLibrary is Live Now!
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
            </div>
          </section>
          <section
            id="featuredCollectionBlock"
            className="libraryCollection featuredCollections ng-scope"
          >
            <div className="container">
              <div className="headingBlock">
                <h3 className="commonThemeHeading">Featured Collections</h3>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-4 ng-scope">
                  <a className="contentBox ng-scope">
                    <h5 className="ng-binding">*DU Policies</h5>
                  </a>
                </div>
                <div className="col-md-4 col-sm-4 ng-scope">
                  <a className="contentBox ng-scope">
                    <h5 className="ng-binding">3D Printing</h5>
                  </a>
                </div>
                <div className="col-md-4 col-sm-4 ng-scope">
                  <a className="contentBox ng-scope">
                    <h5 className="ng-binding">Bioinformatics</h5>
                  </a>
                </div>
                <div className="col-md-4 col-sm-4 ng-scope">
                  <a className="contentBox ng-scope">
                    <h5 className="ng-binding">Digital Marketing</h5>
                  </a>
                </div>
                <div className="col-md-4 col-sm-4 ng-scope">
                  <a className="contentBox ng-scope">
                    <h5 className="ng-binding">IOT</h5>
                  </a>
                </div>
                <div className="col-md-4 col-sm-4 ng-scope">
                  <a className="contentBox ng-scope">
                    <h5 className="ng-binding">Machine Learning</h5>
                  </a>
                </div>
                <div className="col-md-4 col-sm-4 ng-scope">
                  <a className="contentBox ng-scope">
                    <h5 className="ng-binding">Mechatronics</h5>
                  </a>
                </div>
                <div className="col-md-4 col-sm-4 ng-scope">
                  <a className="contentBox ng-scope">
                    <h5 className="ng-binding">Nanostructured Materials</h5>
                  </a>
                </div>
                <div className="col-md-4 col-sm-4 ng-scope">
                  <a className="contentBox ng-scope">
                    <h5 className="ng-binding">Nanotechnology</h5>
                  </a>
                </div>
                <div className="col-md-4 col-sm-4 ng-scope">
                  <a className="contentBox ng-scope">
                    <h5 className="ng-binding">Smart City Design</h5>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="topUsers bgimguser ng-scope" id="feedbackSection">
            <div className="container">
              <div className="headingBlock">
                <h3 className="commonThemeHeading whitetext">Top Users</h3>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3 ng-scope">
                  <div className="thumbnail">
                    <div className="lh20">&nbsp;</div>
                    <div className="rank ng-binding">Rank # 1</div>
                    <h5 className="ng-binding"> DU eLibrary </h5>
                    <p className="ng-binding">
                      {" "}
                      Library <br />
                      <br /> 5 Followers
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 ng-scope">
                  <div className="thumbnail">
                    <div className="no-img-circle ng-scope">
                      <span className="ng-binding"> A </span>
                    </div>
                    <div className="lh20">&nbsp;</div>
                    <div className="rank ng-binding">Rank # 2</div>
                    <h5 className="ng-binding"> AMISHA </h5>
                    <p className="ng-binding">
                      <br />
                      <br /> 0 Followers
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 ng-scope">
                  <div className="thumbnail">
                    <div className="lh20">&nbsp;</div>
                    <div className="rank ng-binding">Rank # 3</div>
                    <h5 className="ng-binding"> RITURAJ BORUAH </h5>
                    <p className="ng-binding">
                      {" "}
                      COMMERCE <br />
                      <br /> 2 Followers
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 col-sm-6">
                  <div className="topUserBlockContent">
                    <p>
                      {" "}
                      You can also find your reading rank by activating the
                      Socio-Lib Wall - A social way of finding best reading
                      material.{" "}
                    </p>
                    <a href="#/feed" className="boldertext ng-scope">
                      Here�s how it works.{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="feedbackSection ng-scope" id="feedbackSection">
            <div className="container">
              <div className="row flexrower">
                <div className="col-md-8 col-sm-7">
                  <div className="leftPanel">
                    <h3 className="commonThemeHeading textlight ng-binding">
                      <b>Download</b> the Nagpur University E-Library App
                    </h3>
                    <p className="textlight">
                      {" "}
                      Access entire library collection on the go, request items,
                      save and read from your personal reading list, track new
                      additions and never miss out on any notification from the
                      library.{" "}
                    </p>
                    <div className="lh20">&nbsp;</div>
                    <div className="img-block raduimages">
                      <a
                        href="https://apps.apple.com/in/app/du-elibrary/id1584093384"
                        target="_blank"
                      >
                        <img
                          src="https://duelibrary.in/content/images/drdo/app-store.jpg"
                          alt="Refread App Store"
                        />
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.refread.du"
                        target="_blank"
                      >
                        <img
                          src="https://duelibrary.in/content/images/drdo/google-play.jpg"
                          alt="Refread Google Play Store"
                        />
                      </a>
                    </div>
                    <button className="btn-feedback">
                      <h5 className="commonThemeHeading">
                        Share Your Feedback
                      </h5>{" "}
                      Help Us Get Better
                    </button>
                  </div>
                </div>
                <div className="col-md-4 col-sm-5">
                  <div className="rightPanel">
                    <div className="imgBlock">
                      <div className="libName">
                        <img src="images/logo.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
