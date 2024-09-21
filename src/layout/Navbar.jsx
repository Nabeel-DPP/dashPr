import React from "react";
import "../assets/js/custom.js";
import "../assets/js/mono.js";
import { useState } from "react";
// import "../assets/css/styles.css";
function Navbar()
{
  const [isOpen, setIsOpen] = useState(false);
  
    const toggleNotifications = (event) => {
      console.log("Notification Button Cliked ! ");
      event.stopPropagation(); // Prevent event bubbling
      setIsOpen(!isOpen);
      console.log(isOpen);
    }

    return(
        <>
       
          <header className="main-header" id="header">
            <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
              
              <button id="sidebar-toggler" className="sidebar-toggle">
              <i className="mdi mdi-menu"></i>
                <span className="sr-only">Toggle navigation</span>
              </button>

              <span className="page-title">dashboard</span>

              <div className="navbar-right ">

                
                <div className="search-form">
                  <form action="index.html" method="get">
                    <div className="input-group input-group-sm" id="input-group-search">
                      <input type="text" autoComplete="off" name="query" id="search-input" className="form-control" placeholder="Search..." />
                      <div className="input-group-append">
                        <button className="btn" type="button">/</button>
                      </div>
                    </div>
                  </form>
                  <ul className="dropdown-menu dropdown-menu-search">

                    <li className="nav-item">
                      <a className="nav-link" href="index.html">Morbi leo risus</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">Dapibus ac facilisis in</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">Porta ac consectetur ac</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">Vestibulum at eros</a>
                    </li>

                  </ul>

                </div>

                <ul className="nav navbar-nav">
                  
                  <li className="custom-dropdown">
                    <a className="offcanvas-toggler active custom-dropdown-toggler" data-offcanvas="contact-off" >
                      <i className="mdi mdi-contacts icon"></i>
                    </a>
                  </li>
                  <li className="custom-dropdown">
                 
                     <button className="notify-toggler custom-dropdown-toggler" onClick={toggleNotifications}>

                      <i className="mdi mdi-bell-outline icon"></i>
                      <span className="badge badge-xs rounded-circle">21</span>
                    </button>
                    {/* {isOpen && (
                    <div className="dropdown-notify">

                      <header>
                        <div className="nav nav-underline" id="nav-tab" role="tablist">
                          <a className="nav-item nav-link active" id="all-tabs" data-toggle="tab" href="#all" role="tab" aria-controls="nav-home"
                            aria-selected="true">All (5)</a>
                          <a className="nav-item nav-link" id="message-tab" data-toggle="tab" href="#message" role="tab" aria-controls="nav-profile"
                            aria-selected="false">Msgs (4)</a>
                          <a className="nav-item nav-link" id="other-tab" data-toggle="tab" href="#other" role="tab" aria-controls="nav-contact"
                            aria-selected="false">Others (3)</a>
                        </div>
                      </header>

                      <div className="" data-simplebar style={{height: "325px"}}>
                        <div className="tab-content" id="myTabContent">

                          <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tabs">

                            <div className="media media-sm bg-warning-10 p-4 mb-0">
                              <div className="media-sm-wrapper">
                                <a href="user-profile.html">
                                  <img src="/assets/images/ProfilePic.png" alt="User Image"/>
                                </a>
                              </div>
                              <div className="media-body">
                                <a href="user-profile.html">
                                  <span className="title mb-0">John Doe</span>
                                  <span className="discribe">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at.</span>
                                  <span className="time">
                                    <time>Just now</time>...
                                  </span>
                                </a>
                              </div>
                            </div>

                            <div className="media media-sm p-4 bg-light mb-0">
                              <div className="media-sm-wrapper bg-primary">
                                <a href="user-profile.html">
                                  <i className="mdi mdi-calendar-check-outline"></i>
                                </a>
                              </div>
                              <div className="media-body">
                                <a href="user-profile.html">
                                  <span className="title mb-0">New event added</span>
                                  <span className="discribe">1/3/2014 (1pm - 2pm)</span>
                                  <span className="time">
                                    <time>10 min ago...</time>...
                                  </span>
                                </a>
                              </div>
                            </div>

                            <div className="media media-sm p-4 mb-0">
                              <div className="media-sm-wrapper">
                                <a href="user-profile.html">
                                  <img src="images/user/user-sm-03.jpg" alt="User Image"/>
                                </a>
                              </div>
                              <div className="media-body">
                                <a href="user-profile.html">
                                  <span className="title mb-0">Sagge Hudson</span>
                                  <span className="discribe">On disposal of as landlord Afraid at highly months do things on at.</span>
                                  <span className="time">
                                    <time>1 hrs ago</time>...
                                  </span>
                                </a>
                              </div>
                            </div>

                            <div className="media media-sm p-4 mb-0">
                              <div className="media-sm-wrapper bg-info-dark">
                                <a href="user-profile.html">
                                  <i className="mdi mdi-account-multiple-check"></i>
                                </a>
                              </div>
                              <div className="media-body">
                                <a href="user-profile.html">
                                  <span className="title mb-0">Add request</span>
                                  <span className="discribe">Add Dany Jones as your contact.</span>
                                  <div className="buttons">
                                    <a href="#" className="btn btn-sm btn-success shadow-none text-white">accept</a>
                                    <a href="#" className="btn btn-sm shadow-none">delete</a>
                                  </div>
                                  <span className="time">
                                    <time>6 hrs ago</time>...
                                  </span>
                                </a>
                              </div>
                            </div>

                            <div className="media media-sm p-4 mb-0">
                              <div className="media-sm-wrapper bg-info">
                                <a href="user-profile.html">
                                  <i className="mdi mdi-playlist-check"></i>
                                </a>
                              </div>
                              <div className="media-body">
                                <a href="user-profile.html">
                                  <span className="title mb-0">Task complete</span>
                                  <span className="discribe">Afraid at highly months do things on at.</span>
                                  <span className="time">
                                    <time>1 hrs ago</time>...
                                  </span>
                                </a>
                              </div>
                            </div>

                          </div>

                          <div className="tab-pane fade" id="message" role="tabpanel" aria-labelledby="message-tab">

                            <div className="media media-sm p-4 mb-0">
                              <div className="media-sm-wrapper">
                                <a href="user-profile.html">
                                  <img src="images/user/user-sm-01.jpg" alt="User Image"/>
                                </a>
                              </div>
                              <div className="media-body">
                                <a href="user-profile.html">
                                  <span className="title mb-0">Selena Wagner</span>
                                  <span className="discribe">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                  <span className="time">
                                    <time>15 min ago</time>...
                                  </span>
                                </a>
                              </div>
                            </div>

                            <div className="media media-sm p-4 mb-0">
                              <div className="media-sm-wrapper">
                                <a href="user-profile.html">
                                  <img src="images/user/user-sm-03.jpg" alt="User Image"/>
                                </a>
                              </div>
                              <div className="media-body">
                                <a href="user-profile.html">
                                  <span className="title mb-0">Sagge Hudson</span>
                                  <span className="discribe">On disposal of as landlord Afraid at highly months do things on at.</span>
                                  <span className="time">
                                    <time>1 hrs ago</time>...
                                  </span>
                                </a>
                              </div>
                            </div>

                            <div className="media media-sm bg-warning-10 p-4 mb-0">
                              <div className="media-sm-wrapper">
                                <a href="user-profile.html">
                                  <img src="images/user/user-sm-02.jpg" alt="User Image"/>
                                </a>
                              </div>
                              <div className="media-body">
                                <a href="user-profile.html">
                                  <span className="title mb-0">John Doe</span>
                                  <span className="discribe">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid
                                    at highly months do things on at.</span>
                                  <span className="time">
                                    <time>Just now</time>...
                                  </span>
                                </a>
                              </div>
                            </div>

                            <div className="media media-sm p-4 mb-0">
                              <div className="media-sm-wrapper">
                                <a href="user-profile.html">
                                  <img src="images/user/user-sm-04.jpg" alt="User Image"/>
                                </a>
                              </div>
                              <div className="media-body">
                                <a href="user-profile.html">
                                  <span className="title mb-0">Albrecht Straub</span>
                                  <span className="discribe"> Beatae quia natus assumenda laboriosam, nisi perferendis aliquid consectetur expedita non tenetur.</span>
                                  <span className="time">
                                    <time>Just now</time>...
                                  </span>
                                </a>
                              </div>
                            </div>

                          </div>
                          <div className="tab-pane fade" id="other" role="tabpanel" aria-labelledby="contact-tab">

                            <div className="media media-sm p-4 bg-light mb-0">
                              <div className="media-sm-wrapper bg-primary">
                                <a href="user-profile.html">
                                  <i className="mdi mdi-calendar-check-outline"></i>
                                </a>
                              </div>
                              <div className="media-body">
                                <a href="user-profile.html">
                                  <span className="title mb-0">New event added</span>
                                  <span className="discribe">1/3/2014 (1pm - 2pm)</span>
                                  <span className="time">
                                    <time>10 min ago...</time>...
                                  </span>
                                </a>
                              </div>
                            </div>

                            <div className="media media-sm p-4 mb-0">
                              <div className="media-sm-wrapper bg-info-dark">
                                <a href="user-profile.html">
                                  <i className="mdi mdi-account-multiple-check"></i>
                                </a>
                              </div>
                              <div className="media-body">
                                <a href="user-profile.html">
                                  <span className="title mb-0">Add request</span>
                                  <span className="discribe">Add Dany Jones as your contact.</span>
                                  <div className="buttons">
                                    <a href="#" className="btn btn-sm btn-success shadow-none text-white">accept</a>
                                    <a href="#" className="btn btn-sm shadow-none">delete</a>
                                  </div>
                                  <span className="time">
                                    <time>6 hrs ago</time>...
                                  </span>
                                </a>
                              </div>
                            </div>

                            <div className="media media-sm p-4 mb-0">
                              <div className="media-sm-wrapper bg-info">
                                <a href="user-profile.html">
                                  <i className="mdi mdi-playlist-check"></i>
                                </a>
                              </div>
                              <div className="media-body">
                                <a href="user-profile.html">
                                  <span className="title mb-0">Task complete</span>
                                  <span className="discribe">Afraid at highly months do things on at.</span>
                                  <span className="time">
                                    <time>1 hrs ago</time>...
                                  </span>
                                </a>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                      <footer className="border-top dropdown-notify-footer">
                        <div className="d-flex justify-content-between align-items-center py-2 px-4">
                          <span>Last updated 3 min ago</span>
                          <a id="refress-button" className="btn mdi mdi-cached btn-refress"></a>
                        </div>
                      </footer>
                    </div>)} */}
                    


                    {isOpen && (
        <div className="dropdown-notify">
          <header>
            <div className="nav nav-underline" id="nav-tab" role="tablist">
              <span className="nav-item nav-link active">All (5)</span>
              <span className="nav-item nav-link">Msgs (4)</span>
              <span className="nav-item nav-link">Others (3)</span>
            </div>
          </header>
          <div className="" style={{ height: "325px", overflowY: "auto" }}>
            <div className="tab-content">
              {/* All Notifications Tab */}
              <div className="tab-pane active">
                {/* Notification Item 1 */}
                <div className="media media-sm p-4 mb-0">
                  <div className="media-sm-wrapper">
                    <a href="user-profile.html">
                      <img src="/assets/images/ProfilePic.png" alt="User Image" />
                    </a>
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <span className="title mb-0">John Doe</span>
                      <span className="discribe">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</span>
                      <span className="time"><time>Just now</time></span>
                    </a>
                  </div>
                </div>

                {/* Notification Item 2 */}
                <div className="media media-sm p-4 mb-0">
                  <div className="media-sm-wrapper bg-primary">
                    <a href="user-profile.html">
                      <i className="mdi mdi-calendar-check-outline"></i>
                    </a>
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <span className="title mb-0">New event added</span>
                      <span className="discribe">1/3/2014 (1pm - 2pm)</span>
                      <span className="time"><time>10 min ago...</time></span>
                    </a>
                  </div>
                </div>

                {/* Notification Item 3 */}
                <div className="media media-sm p-4 mb-0">
                  <div className="media-sm-wrapper">
                    <a href="user-profile.html">
                      <img src="images/user/user-sm-03.jpg" alt="User Image" />
                    </a>
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <span className="title mb-0">Sagge Hudson</span>
                      <span className="discribe">On disposal of as landlord Afraid at highly months do things on at.</span>
                      <span className="time"><time>1 hrs ago</time></span>
                    </a>
                  </div>
                </div>

                {/* Notification Item 4 */}
                <div className="media media-sm p-4 mb-0">
                  <div className="media-sm-wrapper bg-info-dark">
                    <a href="user-profile.html">
                      <i className="mdi mdi-account-multiple-check"></i>
                    </a>
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <span className="title mb-0">Add request</span>
                      <span className="discribe">Add Dany Jones as your contact.</span>
                      <div className="buttons">
                        <a href="#" className="btn btn-sm btn-success shadow-none text-white">Accept</a>
                        <a href="#" className="btn btn-sm shadow-none">Delete</a>
                      </div>
                      <span className="time"><time>6 hrs ago</time></span>
                    </a>
                  </div>
                </div>

                {/* Notification Item 5 */}
                <div className="media media-sm p-4 mb-0">
                  <div className="media-sm-wrapper bg-info">
                    <a href="user-profile.html">
                      <i className="mdi mdi-playlist-check"></i>
                    </a>
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <span className="title mb-0">Task complete</span>
                      <span className="discribe">Afraid at highly months do things on at.</span>
                      <span className="time"><time>1 hrs ago</time></span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Messages Tab */}
              <div className="tab-pane">
                {/* Message Item 1 */}
                <div className="media media-sm p-4 mb-0">
                  <div className="media-sm-wrapper">
                    <a href="user-profile.html">
                      <img src="images/user/user-sm-01.jpg" alt="User Image" />
                    </a>
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <span className="title mb-0">Selena Wagner</span>
                      <span className="discribe">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                      <span className="time"><time>15 min ago...</time></span>
                    </a>
                  </div>
                </div>

                {/* Message Item 2 */}
                <div className="media media-sm p-4 mb-0">
                  <div className="media-sm-wrapper">
                    <a href="user-profile.html">
                      <img src="images/user/user-sm-03.jpg" alt="User Image" />
                    </a>
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <span className="title mb-0">Sagge Hudson</span>
                      <span className="discribe">On disposal of as landlord Afraid at highly months do things on at.</span>
                      <span className="time"><time>1 hrs ago...</time></span>
                    </a>
                  </div>
                </div>

                {/* Message Item 3 */}
                <div className="media media-sm bg-warning-10 p-4 mb-0">
                  <div className="media-sm-wrapper">
                    <a href="user-profile.html">
                      <img src="images/user/user-sm-02.jpg" alt="User Image" />
                    </a>
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <span className="title mb-0">John Doe</span>
                      <span className="discribe">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</span>
                      <span className="time"><time>Just now</time></span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Others Tab */}
              <div className="tab-pane">
                {/* Other Notification Item 1 */}
                <div className="media media-sm p-4 mb-0">
                  <div className="media-sm-wrapper bg-primary">
                    <a href="user-profile.html">
                      <i className="mdi mdi-calendar-check-outline"></i>
                    </a>
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <span className="title mb-0">New event added</span>
                      <span className="discribe">1/3/2014 (1pm - 2pm)</span>
                      <span className="time"><time>10 min ago...</time></span>
                    </a>
                  </div>
                </div>

                {/* Other Notification Item 2 */}
                <div className="media media-sm p-4 mb-0">
                  <div className="media-sm-wrapper bg-info-dark">
                    <a href="user-profile.html">
                      <i className="mdi mdi-account-multiple-check"></i>
                    </a>
                  </div>
                  <div className="media-body">
                    <a href="user-profile.html">
                      <span className="title mb-0">Add request</span>
                      <span className="discribe">Add Dany Jones as your contact.</span>
                      <div className="buttons">
                        <a href="#" className="btn btn-sm btn-success shadow-none text-white">Accept</a>
                        <a href="#" className="btn btn-sm shadow-none">Delete</a>
                      </div>
                      <span className="time"><time>6 hrs ago</time></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="border-top dropdown-notify-footer">
            <div className="d-flex justify-content-between align-items-center py-2 px-4">
              <span>Last updated 3 min ago</span>
              <a id="refress-button" className="btn mdi mdi-cached btn-refress"></a>
            </div>
          </footer>
        </div>
      )}







                  </li>
                 
                  <li className="dropdown user-menu">
                    <button className="dropdown-toggle nav-link" data-toggle="dropdown">
                      <img src="src/assets/images/ProfilePic.png" className="user-image rounded-circle" alt="Usr" />
                      <span className="d-none d-lg-inline-block">John Doe</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <a className="dropdown-link-item" href="user-profile.html">
                          <i className="mdi mdi-account-outline"></i>
                          <span className="nav-text">My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-link-item" href="email-inbox.html">
                          <i className="mdi mdi-email-outline"></i>
                          <span className="nav-text">Message</span>
                          <span className="badge badge-pill badge-primary">24</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-link-item" href="user-activities.html">
                          <i className="mdi mdi-diamond-stone"></i>
                          <span className="nav-text">Activitise</span></a>
                      </li>
                      <li>
                        <a className="dropdown-link-item" href="user-account-settings.html">
                          <i className="mdi mdi-settings"></i>
                          <span className="nav-text">Account Setting</span>
                        </a>
                      </li>

                      <li className="dropdown-footer">
                        <a className="dropdown-link-item" href="sign-in.html"> <i className="mdi mdi-logout"></i> Log Out </a>
                      </li>
                    </ul>
                  </li>
                </ul>






              </div>
            </nav>


          </header>
          

        </>
    )
}

export default Navbar;