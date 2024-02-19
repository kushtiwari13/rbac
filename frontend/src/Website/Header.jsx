import { React, useEffect } from './imports';



const Header = () => {
    return (
        <header id="header" className="header header-transparent">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    {/* logo*/}
                    <a className="navbar-brand" href="index.html">
                        <img src="images/logos/logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="icon icon-menu"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="dropdown nav-item active">
                                <a href="#" className="" data-toggle="dropdown">Home <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="index.html">Home One</a></li>
                                    <li><a href="index-2.html">Home Two</a></li>
                                    <li><a href="index-3.html">Home Three</a></li>
                                    <li><a href="index-4.html">Home Four</a></li>
                                    <li><a href="index-5.html">Home Five</a></li>
                                    <li><a href="index-6.html">Home Six</a></li>
                                    <li><a href="index-7.html">Home Seven</a></li>
                                </ul>
                            </li>
                            <li className="dropdown nav-item">
                                <a href="#" className="" data-toggle="dropdown">About <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="pricing.html">Pricing Table</a></li>
                                    <li><a href="sponsors-1.html">Sponsors</a></li>
                                    <li><a href="venue.html">Venue</a></li>
                                    <li><a href="404.html">Erro Page</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="" data-toggle="dropdown">Speakers <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="speakers-1.html">Speakers-1</a></li>
                                    <li><a href="speakers-2.html">Speakers-2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="" data-toggle="dropdown">Schedule <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="schedule-list.html">Schedule List</a></li>
                                    <li><a href="schedule-tab-1.html">Schedule Tab 1</a></li>
                                    <li><a href="schedule-tab-2.html">Schedule Tab 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#"> Blog <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="news-single.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html">Contact</a>
                            </li>
                            <li className="header-ticket nav-item">
                                <a className="ticket-btn btn" href="pricing.html"> Buy  Ticket
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
