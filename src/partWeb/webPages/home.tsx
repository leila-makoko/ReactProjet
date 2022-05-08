import React from "react";

function Home() {
  return (
    <div>
      <div id="preloader">
        <div id="ctn-preloader" className="ctn-preloader">
          <div className="round_spinner">
            <div className="spinner"></div>
            <div className="text">
              <img src="img/spinner_logo.png" alt="" />
              <h4>
                <span>Doc</span>y
              </h4>
            </div>
          </div>
          <h2 className="head">Did You Know?</h2>
          <p></p>
        </div>
      </div>
      <div className="body_wrapper">
        <div className="navbar navbar-expand-lg menu_one menu_purple sticky-nav">
          <div className="container">
            <a className="navbar-br/and header_logo" href="index.html">
              <img
                className="first_logo sticky_logo"
                src="img/logo.png"
                alt="logo"
              />
              <img
                className="white_logo main_logo"
                src="img/logo-w.png"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="menu_toggle">
                <span className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="hamburger-cross">
                  <span></span>
                  <span></span>
                </span>
              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav menu ml-auto">
                <li className="nav-item dropdown submenu active">
                  <a href="index.html" className="nav-link dropdown-toggle">
                    Home
                  </a>
                  <i
                    className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                    aria-hidden="false"
                    data-toggle="dropdown"
                  ></i>
                  <ul className="dropdown-menu">
                    <li className="nav-item active">
                      <a href="index.html" className="nav-link">
                        Creative Helpdesk
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-multi.html" className="nav-link">
                        Multi Helpdesk
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-classNameic.html" className="nav-link">
                        classNameic Helpdesk
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown submenu mega_menu tab-demo">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Docs
                  </a>
                  <i
                    className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                    aria-hidden="true"
                    data-toggle="dropdown"
                  ></i>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="row">
                        <div className="col-lg-5 tabHeader">
                          <ul
                            className="nav flex-column nav-pills"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                          >
                            <li className="nav-item active">
                              <a
                                className="nav-link"
                                id="v-pills-doc-tab"
                                data-toggle="pill"
                                href="#v-pills-doc"
                                role="tab"
                                aria-controls="v-pills-doc"
                                aria-selected="true"
                              >
                                Doc Archives
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="v-pills-code-tab"
                                data-toggle="pill"
                                href="#v-pills-code"
                                role="tab"
                                aria-controls="v-pills-code"
                                aria-selected="false"
                              >
                                Elements
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="v-pills-layout-tab"
                                data-toggle="pill"
                                href="#v-pills-layout"
                                role="tab"
                                aria-controls="v-pills-layout"
                                aria-selected="false"
                              >
                                Layouts
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="v-pills-tour-tab"
                                data-toggle="pill"
                                href="#v-pills-tour"
                                role="tab"
                                aria-controls="v-pills-tour"
                                aria-selected="false"
                              >
                                Reference
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="v-pills-content-tab"
                                data-toggle="pill"
                                href="#v-pills-content"
                                role="tab"
                                aria-controls="v-pills-content"
                                aria-selected="false"
                              >
                                Content
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="v-pills-pages-tab"
                                data-toggle="pill"
                                href="#v-pills-pages"
                                role="tab"
                                aria-controls="v-pills-pages"
                                aria-selected="false"
                              >
                                Other Pages
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-7">
                          <div
                            className="tab-content tabContent"
                            id="v-pills-tabContent"
                          >
                            <div
                              className="tab-pane fade active show"
                              id="v-pills-doc"
                              role="tabpanel"
                              aria-labelledby="v-pills-doc-tab"
                            >
                              <div className="d-flex">
                                <ul className="list-unstyled tab_list">
                                  <li>
                                    {" "}
                                    <a href="doc-main.html">
                                      {" "}
                                      Doc Topics{" "}
                                    </a>{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="archive-doc-single.html">
                                      {" "}
                                      Single Product{" "}
                                    </a>{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="archive-doc-multi.html">
                                      {" "}
                                      Multi Products{" "}
                                    </a>{" "}
                                  </li>
                                </ul>
                              </div>
                              <div className="text">
                                <a href="doc-main.html">
                                  <p>More Categories</p>
                                </a>
                                <a href="doc-main.html">
                                  <p>All docs</p>
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-code"
                              role="tabpanel"
                              aria-labelledby="v-pills-code-tab"
                            >
                              <div className="d-flex">
                                <ul className="list-unstyled tab_list">
                                  <li>
                                    <a href="doc-element-tab.html">Tabs</a>
                                  </li>
                                  <li>
                                    <a href="doc-element-accordion.html">
                                      Accordion
                                    </a>
                                  </li>
                                  <li>
                                    <a href="doc-element-notice.html">Notice</a>
                                  </li>
                                  <li>
                                    <a href="doc-content-tables.html">Tables</a>
                                  </li>
                                </ul>
                                <ul className="list-unstyled tab_list">
                                  <li>
                                    <a href="doc-element-hotspots.html">
                                      Image Hotspots
                                    </a>
                                  </li>
                                  <li>
                                    <a href="doc-element-code.html">
                                      Source Code
                                    </a>
                                  </li>
                                  <li>
                                    <a href="doc-element-lightbox.html">
                                      Image Lightbox
                                    </a>
                                  </li>
                                  <li>
                                    <a href="doc-ref-cheatsheet.html">
                                      Cheatsheet
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="text">
                                <a href="#">
                                  <p>More Categories</p>
                                </a>
                                <a href="doc-main.html">
                                  <p>All docs</p>
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-layout"
                              role="tabpanel"
                              aria-labelledby="v-pills-layout-tab"
                            >
                              <div className="d-flex">
                                <ul className="list-unstyled tab_list">
                                  <li>
                                    <a href="doc-element-hotspots.html">
                                      Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="doc-content-video.html">
                                      Full-width
                                    </a>
                                  </li>
                                  <li>
                                    <a href="doc-layout-banner-gradient.html">
                                      Gradient Banner
                                    </a>
                                  </li>
                                  <li>
                                    <a href="doc-layout-banner-empty.html">
                                      Without Banner
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="text">
                                <a href="#">
                                  <p>More Categories</p>
                                </a>
                                <a href="#">
                                  <p>All docs</p>
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-tour"
                              role="tabpanel"
                              aria-labelledby="v-pills-tour-tab"
                            >
                              <div className="d-flex">
                                <ul className="list-unstyled tab_list w_100">
                                  <li>
                                    <a href="doc-ref-cheatsheet.html">
                                      Cheatsheet
                                    </a>
                                  </li>
                                  <li>
                                    <a href="doc-ref-footnote.html">
                                      Footnotes
                                    </a>
                                  </li>
                                  <li>
                                    <a href="doc-tour.html">Interface Tour</a>
                                  </li>
                                  <li>
                                    <a href="doc-ref-can-use.html">Can I Use</a>
                                  </li>
                                  <li>
                                    <a href="doc-content-tooltip.html">
                                      Tooltips & Direction
                                    </a>
                                  </li>
                                  <li>
                                    <a href="doc-ref-shortcuts.html">
                                      Keyboard Shortcuts
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="text">
                                <a href="#">
                                  <p>More Categories</p>
                                </a>
                                <a href="#">
                                  <p>All docs</p>
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-content"
                              role="tabpanel"
                              aria-labelledby="v-pills-content-tab"
                            >
                              <div className="d-flex">
                                <ul className="list-unstyled tab_list">
                                  <li>
                                    <a href="doc-content-image.html">Image</a>
                                  </li>
                                  <li>
                                    <a
                                      className="active"
                                      href="doc-content-tables.html"
                                    >
                                      Tables
                                    </a>
                                  </li>
                                  <li>
                                    <a href="doc-content-video.html">Video</a>
                                  </li>
                                  <li>
                                    <a href="typography.html">Typography</a>
                                  </li>
                                  <li>
                                    <a href="doc-content-tooltip.html">
                                      Tooltips & Direction
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="text">
                                <a href="#">
                                  <p>More Categories</p>
                                </a>
                                <a href="#">
                                  <p>All docs</p>
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-pages"
                              role="tabpanel"
                              aria-labelledby="v-pills-pages-tab"
                            >
                              <div className="d-flex">
                                <ul className="list-unstyled tab_list">
                                  <li>
                                    {" "}
                                    <a href="onepage.html">Onepage</a>{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="doc-main.html">Doc Topics</a>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="doc-tour.html">Cheatsheet</a>{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="doc-changelog.html">
                                      Changelog
                                    </a>{" "}
                                  </li>
                                </ul>
                              </div>
                              <div className="text">
                                <a href="#">
                                  <p>More Categories</p>
                                </a>
                                <a href="doc-main.html">
                                  <p>All docs</p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown submenu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <i
                    className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                    aria-hidden="false"
                    data-toggle="dropdown"
                  ></i>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="onepage.html" className="nav-link">
                        Onepage Doc
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="contact.html" className="nav-link">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="typography.html" className="nav-link">
                        Typography
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="404-error.html" className="nav-link">
                        404 Error
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown submenu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="forums.html"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Forum
                  </a>
                  <i
                    className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                    aria-hidden="false"
                    data-toggle="dropdown"
                  ></i>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="forums.html" className="nav-link">
                        Forums Root
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="forum-topics.html" className="nav-link">
                        Forum Topics
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="forum-single.html" className="nav-link">
                        Topic Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="forum-profile.html" className="nav-link">
                        User Profile
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown submenu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <i
                    className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                    aria-hidden="false"
                    data-toggle="dropdown"
                  ></i>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="blog-grid.html" className="nav-link">
                        Blog Grid
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-grid-two.html" className="nav-link">
                        Blog Grid Two
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-list.html" className="nav-link">
                        Blog List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-single.html" className="nav-link">
                        Blog Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-single2.html" className="nav-link">
                        Blog Details Two
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="right-nav">
                <a className="nav_btn" href="#">
                  Free Trail
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="doc_banner_area banner_creative1">
          <ul className="list-unstyled banner_shap_img">
            <li>
              <img src="img/new/banner_shap1.png" alt="" />
            </li>
            <li>
              <img src="img/new/banner_shap4.png" alt="" />
            </li>
            <li>
              <img src="img/new/banner_shap3.png" alt="" />
            </li>
            <li>
              <img src="img/new/banner_shap2.png" alt="" />
            </li>
            <li>
              <img
                data-parallax='{"x": -180, "y": 80, "rotateY":2000}'
                src="img/new/plus1.png"
                alt=""
              />
            </li>
            <li>
              <img
                data-parallax='{"x": -50, "y": -160, "rotateZ":200}'
                src="img/new/plus2.png"
                alt=""
              />
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="container">
            <div className="doc_banner_content">
              <h2 className="wow fadeInUp">How can we help you?</h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Search here to get answers to your questions
              </p>
              <form action="#" className="header_search_form">
                <div className="header_search_form_info">
                  <div className="form-group">
                    <div className="input-wrapper">
                      <i className="icon_search"></i>
                      <input
                        type="search"
                        id="searchbox"
                        name="search"
                        placeholder="Search the Doc"
                      />
                      <div className="header_search_form_panel">
                        <ul className="list-unstyled">
                          <li>
                            Help Desk
                            <ul className="list-unstyled search_item">
                              <li>
                                <span>Configuration</span>
                                <a href="#">How to edit host and port?</a>
                              </li>
                              <li>
                                <span>Configuration</span>
                                <a href="#">The dev Property</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            Support
                            <ul className="list-unstyled search_item">
                              <li>
                                <span>Pages</span>
                                <a href="#">The asyncData Method</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            Documentation
                            <ul className="list-unstyled search_item">
                              <li>
                                <span>Getting Started</span>
                                <a href="#">The asyncData Method</a>
                              </li>
                              <li>
                                <span>Getting Started</span>
                                <a href="#">The asyncData Method</a>
                              </li>
                              <li>
                                <span>Getting Started</span>
                                <a href="#">The asyncData Method</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <select
                        className="search-expand-types custom-select"
                        name="post_type"
                        id="search_post_type"
                      >
                        <option value="">All Docs </option>
                        <option value="manual_kb">Knowledge Base</option>
                        <option value="manual_documentation">
                          Documentation
                        </option>
                        <option value="manual_faq">FAQs</option>
                        <option value="forum">Forums</option>
                        <option value="manual_portfolio">Portfolio</option>
                        <option value="product">Products</option>
                      </select>
                    </div>
                    <button type="submit" className="header_form_submit">
                      Search
                    </button>
                  </div>
                </div>
                <div className="header_search_keyword">
                  <span className="header-search-form__keywords-label">
                    Suggested Search:
                  </span>
                  <ul className="list-unstyled">
                    <li className="wow fadeInUp" data-wow-delay="0.2s">
                      <a href="#">guest users</a>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.3s">
                      <a href="#">invoice</a>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.4s">
                      <a href="#">security</a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="doc_features_area">
          <img
            className="doc_features_shap"
            src="img/new/shap_white.png"
            alt=""
          />
          <div className="container">
            <div className="doc_features_inner">
              <div
                className="media doc_features_item wow fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="0.5s"
              >
                <img src="img/new/icon1.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Knowledge Base</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>
              <div
                className="media doc_features_item wow fadeInUp"
                data-wow-delay="0.2s"
                data-wow-duration="0.6s"
              >
                <img src="img/new/icon2.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Community Forums</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>
              <div
                className="media doc_features_item wow fadeInUp"
                data-wow-delay="0.3s"
                data-wow-duration="0.7s"
              >
                <img src="img/new/icon3.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Documentation</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>
              <div
                className="media doc_features_item wow fadeInUp"
                data-wow-delay="0.4s"
                data-wow-duration="0.8s"
              >
                <img src="img/new/icon4.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Working with Docs</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>
              <div
                className="media doc_features_item wow fadeInUp"
                data-wow-delay="0.5s"
                data-wow-duration="0.9s"
              >
                <img src="img/new/icon5.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Getting Started</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>
              <div
                className="media doc_features_item wow fadeInUp"
                data-wow-delay="0.5s"
                data-wow-duration="1s"
              >
                <img src="img/new/icon6.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Account Management</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>
              <div
                className="media doc_features_item wow fadeInUp"
                data-wow-delay="0.5s"
                data-wow-duration="0.7s"
              >
                <img src="img/new/icon7.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Productivity</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>
              <div
                className="media doc_features_item wow fadeInUp"
                data-wow-delay="0.5s"
                data-wow-duration="0.8s"
              >
                <img src="img/new/icon8.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Docs in Help Scout</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>
              <div
                className="media doc_features_item wow fadeInUp"
                data-wow-delay="0.5s"
                data-wow-duration="0.9s"
              >
                <img src="img/new/icon9.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Formatting Content</h4>
                  </a>
                  <p>245 Posts</p>
                </div>
              </div>
              <div className="see_more_item collapse-wrap">
                <div className="media doc_features_item">
                  <img src="img/new/icon7.png" alt="" />
                  <div className="media-body">
                    <a href="#">
                      <h4>Productivity</h4>
                    </a>
                    <p>245 Posts</p>
                  </div>
                </div>
                <div className="media doc_features_item">
                  <img src="img/new/icon8.png" alt="" />
                  <div className="media-body">
                    <a href="#">
                      <h4>Docs in Help Scout</h4>
                    </a>
                    <p>245 Posts</p>
                  </div>
                </div>
                <div className="media doc_features_item">
                  <img src="img/new/icon9.png" alt="" />
                  <div className="media-body">
                    <a href="#">
                      <h4>Formatting Content</h4>
                    </a>
                    <p>245 Posts</p>
                  </div>
                </div>
              </div>
              <a href="#more-features" className="collapse-btn see_btn">
                <i className="arrow_carrot-down_alt2"></i>
                <span className="text">Show More</span>
              </a>
            </div>
          </div>
        </section>
        <section className="recommended_topic_area">
          <div className="container">
            <div className="recommended_topic_inner">
              <img className="doc_shap_one" src="img/new/shap.png" alt="" />
              <div
                className="doc_round one"
                data-parallax='{"x": -80, "y": -100, "rotateY":0}'
              ></div>
              <div
                className="doc_round two"
                data-parallax='{"x": -10, "y": 70, "rotateY":0}'
              ></div>
              <div className="doc_title text-center">
                <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                  Recommended Topics
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  Loaded with awesome features like Documentation,
                  Knowledgebase,
                  <br /> Forum & more!
                </p>
              </div>
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div
                    className="recommended_item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <img src="img/new/smile.png" alt="" />
                    <a href="#">
                      <h3>Getting Started</h3>
                    </a>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Welcome to Ghost</a>
                      </li>
                      <li>
                        <a href="#">Writing posts with Ghost</a>
                      </li>
                      <li>
                        <a href="#">Publishing options</a>
                      </li>
                      <li>
                        <a href="#">Managing admin settings</a>
                      </li>
                      <li>
                        <a href="#">Organising your content</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div
                    className="recommended_item wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <img src="img/new/house.png" alt="" />
                    <a href="#">
                      <h3>Advanced Usage</h3>
                    </a>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Getting started</a>
                      </li>
                      <li>
                        <a href="#">Become a Pro</a>
                      </li>
                      <li>
                        <a href="#">Admin & Billing</a>
                      </li>
                      <li>
                        <a href="#">Mobile App</a>
                      </li>
                      <li>
                        <a href="#">Guides</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div
                    className="recommended_item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <img src="img/new/doc.png" alt="" />
                    <a href="#">
                      <h3>Knowledge Base</h3>
                    </a>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Organising content in Ghost</a>
                      </li>
                      <li>
                        <a href="#">Using the editor</a>
                      </li>
                      <li>
                        <a href="#">General publication settings</a>
                      </li>
                      <li>
                        <a href="#">Publishing Options</a>
                      </li>
                      <li>
                        <a href="#">Knowledge Base</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div
                    className="recommended_item wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <img src="img/new/bag.png" alt="" />
                    <a href="#">
                      <h3>User Settings</h3>
                    </a>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">How do I reset my password</a>
                      </li>
                      <li>
                        <a href="#">Managing your team</a>
                      </li>
                      <li>
                        <a href="#">Can I add my social accounts</a>
                      </li>
                      <li>
                        <a href="#">Imports and exports</a>
                      </li>
                      <li>
                        <a href="#">Design Settings</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
                <a href="#" className="question_text">
                  Want to know more or have a<br /> Question?
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="doc_community_area">
          <img
            className="shap_one"
            src="img/new/community_bg_shap_one.png"
            alt=""
          />
          <img
            className="shap_two"
            src="img/new/community_bg_shap_two.png"
            alt=""
          />
          <div className="container">
            <div className="doc_title text-center">
              <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                How Docy works
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                Learn languages online with the world's best tutors
              </p>
            </div>
            <div className="doc_community_info">
              <div
                className="doc_community_item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="doc_community_icon">
                  <i className="icon_folder-alt"></i>
                </div>
                <div className="doc_entry_content">
                  <a href="#">
                    <h4>The Intercom Messenger</h4>
                  </a>
                  <p>
                    Setting up and customizing your Messenger to start chatting
                    with customers
                  </p>
                  <div className="doc_entry_info">
                    <ul className="list-unstyled author_avatar">
                      <li>
                        <img src="img/new/img_02.png" alt="" />
                      </li>
                      <li>
                        <img src="img/new/img_03.png" alt="" />
                      </li>
                      <li>
                        <img src="img/new/img_04.png" alt="" />
                      </li>
                      <li>+2</li>
                    </ul>
                    <div className="text">
                      76 articles in this collection
                      <br /> Written by Ruairí Galavan, Jack Jenkins, DJ and 7
                      others
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="doc_community_item wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="doc_community_icon">
                  <i className="icon_comment_alt"></i>
                </div>
                <div className="doc_entry_content">
                  <a href="#">
                    <h4>The Intercom Messenger</h4>
                  </a>
                  <p>
                    Setting up and customizing your Messenger to start chatting
                    with customers
                  </p>
                  <div className="doc_entry_info">
                    <ul className="list-unstyled author_avatar">
                      <li>
                        <img src="img/new/img_02.png" alt="" />
                      </li>
                      <li>
                        <img src="img/new/img_03.png" alt="" />
                      </li>
                      <li>
                        <img src="img/new/img_04.png" alt="" />
                      </li>
                      <li>+2</li>
                    </ul>
                    <div className="text">
                      76 articles in this collection
                      <br /> Written by Ruairí Galavan, Jack Jenkins, DJ and 7
                      others
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="doc_community_item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="doc_community_icon">
                  <i className=" icon_lightbulb_alt"></i>
                </div>
                <div className="doc_entry_content">
                  <a href="#">
                    <h4>The Intercom Messenger</h4>
                  </a>
                  <p>
                    Setting up and customizing your Messenger to start chatting
                    with customers
                  </p>
                  <div className="doc_entry_info">
                    <ul className="list-unstyled author_avatar">
                      <li>
                        <img src="img/new/img_02.png" alt="" />
                      </li>
                      <li>
                        <img src="img/new/img_03.png" alt="" />
                      </li>
                      <li>
                        <img src="img/new/img_04.png" alt="" />
                      </li>
                      <li>+2</li>
                    </ul>
                    <div className="text">
                      76 articles in this collection
                      <br /> Written by Ruairí Galavan, Jack Jenkins, DJ and 7
                      others
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center wow fadeInUp" data-wow-delay="0.4s">
                <a href="#" className="question_text">
                  Contact us and we’ll get back to you
                  <br />
                  as soon as we can.
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="doc_testimonial_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="doc_testimonial_slider">
                  <div className="item">
                    <h3>
                      Tinkety tonk old fruit victoria sponge squiffy bleeder
                      twit the bee's knees loo David, buggered haggle pear
                      shaped bubble and squeak.”
                    </h3>
                    <div className="name">
                      Penny Tool, <span>Director of Sales and Success</span>
                    </div>
                    <a href="#" className="sign">
                      <img src="img/new/sign.png" alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <h3>
                      Hendrerit laoreet incidunt molestie eum placeat, neque
                      ridiculus? Maecenas incididunt aperiam tempora cumque
                      quos?”
                    </h3>
                    <div className="name">
                      Penny Tool, <span>Director of Sales and Success</span>
                    </div>
                    <a href="#" className="sign">
                      <img src="img/new/sign.png" alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <h3>
                      Curabitur vitae dignissimos pulvinar eligendi ullamcorper,
                      laoreet, accusantium numquam habitant quaerat minim
                      consequatur”
                    </h3>
                    <div className="name">
                      Penny Tool, <span>Director of Sales and Success</span>
                    </div>
                    <a href="#" className="sign">
                      <img src="img/new/sign.png" alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <h3>
                      Tinkety tonk old fruit victoria sponge squiffy bleeder
                      twit the bee's knees loo David, buggered haggle pear
                      shaped bubble and squeak.”
                    </h3>
                    <div className="name">
                      Penny Tool, <span>Director of Sales and Success</span>
                    </div>
                    <a href="#" className="sign">
                      <img src="img/new/sign.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="doc_img_slider">
                  <div className="item">
                    <img className="dot" src="img/new/dot.png" alt="" />
                    <div className="round one"></div>
                    <div className="round two"></div>
                    <img src="img/new/feedback_img.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img className="dot" src="img/new/dot.png" alt="" />
                    <div className="round one"></div>
                    <div className="round two"></div>
                    <img src="img/new/feedback_img_02.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img className="dot" src="img/new/dot.png" alt="" />
                    <div className="round one"></div>
                    <div className="round two"></div>
                    <img src="img/new/feedback_img_03.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img className="dot" src="img/new/dot.png" alt="" />
                    <div className="round one"></div>
                    <div className="round two"></div>
                    <img src="img/new/feedback_img_04.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="doc_subscribe_area">
          <div className="container">
            <div className="doc_subscribe_inner">
              <img className="one" src="img/new/subscribe_shap.png" alt="" />
              <img
                className="two"
                src="img/new/subscribe_shap_two.png"
                alt=""
              />
              <div className="text wow fadeInLeft" data-wow-delay="0.2s">
                <h2>
                  Great Customer <br />
                  Relationships start here
                </h2>
              </div>
              <form
                action="#"
                className="doc_subscribe_form wow fadeInRight mailchimp"
                data-wow-delay="0.4s"
                method="post"
              >
                <div className="form-group">
                  <div className="input-fill">
                    <input
                      type="email"
                      name="EMAIL"
                      id="email"
                      className="memail"
                      placeholder="Your work email"
                    />
                  </div>
                  <button type="submit" className="submit_btn">
                    Get started
                  </button>
                  <p className="mchimp-errmessage"></p>
                  <p className="mchimp-sucmessage"></p>
                </div>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Messenger</a>
                  </li>
                  <li>
                    <a href="#">Product Tours</a>
                  </li>
                  <li>
                    <a href="#">Inbox and more</a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </section>
        <footer className="doc_footer_area">
          <div className="doc_footer_top bg-transparent">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="f_widget doc_about_widget wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <a href="#">
                      <img
                        src="img/logo.png"
                        srcSet="img/logo-2x.png 2x"
                        alt=""
                      />
                    </a>
                    <p>
                      I’m available for commissions and collaborations, and i’m
                      excited to hear from you about new projects.!!
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">
                          <i className="social_facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="social_twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="social_vimeo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="social_linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <div
                    className="f_widget doc_service_list_widget pl-30 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <h3 className="f_title_two">Solutions</h3>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">
                          <img src="img/new/smile2.png" alt="" />
                          Help Docs
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="img/new/doc2.png" alt="" />
                          Docbuzz
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="img/new/house2.png" alt="" />
                          User Frontend
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="img/new/bag2.png" alt="" />
                          Lightbox
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div
                    className="f_widget doc_service_list_widget pl-100 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <h3 className="f_title_two">Support</h3>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Help Desk</a>
                      </li>
                      <li>
                        <a href="#">Knowledge Base</a>
                      </li>
                      <li>
                        <a href="#">Live Chat</a>
                      </li>
                      <li>
                        <a href="#">Integrations</a>
                      </li>
                      <li>
                        <a href="#">Reports</a>
                      </li>
                      <li>
                        <a href="#">Messages</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div
                    className="f_widget doc_service_list_widget pl-70 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <h3 className="f_title_two">Company</h3>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">Affiliates</a>
                      </li>
                      <li>
                        <a href="#">Partners</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="doc_footer_bottom">
            <div className="container d-flex justify-content-between">
              <ul
                className="doc_footer_menu list-unstyled wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Latest Projects</a>
                </li>
              </ul>
              <p className="wow fadeInUp" data-wow-delay="0.3s">
                © 2021 All Rights Reserved Design by
                <span>Spider-themes</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
