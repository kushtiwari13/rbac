import { React, useEffect } from './imports';
import BannerImage from './CopySource/images/hero_area/banner7.jpg'


const Banner = () => {
    return (
        <section className="hero-area hero-speakers">
            <div className="banner-item overlay" style={{backgroundImage: `url(${BannerImage})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="banner-content-wrap">
                                <p className="banner-info wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">5 to 7 June 2019, Waterfront Hotel, London</p>
                                <h1 className="banner-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="700ms">digital thinkers Meet up</h1>
                                <div className="banner-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="800ms">
                                    <a href="#" className="btn">Buy Ticket</a>
                                    <a href="#" className="btn fill">Add to Calendar</a>
                                </div>
                            </div>
                            {/* Banner content wrap end */}
                        </div>{/* col end*/}
                        <div className="col-lg-4 offset-lg-1">
                            <div className="hero-form-content">
                                <h2>Register Now</h2>
                                <p>
                                    How you transform your business as tech consumer, habits industry
                                </p>
                                <form action="#" method="POST" className="hero-form">
                                    <input className="form-control form-control-name" placeholder="Name" name="name" id="f-name" type="text" required="" />
                                    <input className="form-control form-control-phone" placeholder="Phone" name="phone" id="f-phone" type="number" />
                                    <input className="form-control form-control-email" placeholder="Email" name="email" id="f-email" type="email" required="" />
                                    <select name="ticket" id="ticket">
                                        <option value="ticket">Ticket Type</option>
                                        <option value="ticket">Ticket 1</option>
                                        <option value="ticket">Ticket 2</option>
                                        <option value="ticket">Ticket 3</option>
                                    </select>
                                    <button className="btn" type="submit"> Register Now</button>
                                </form>{/* form end*/}
                            </div>{/* hero content end*/}
                        </div>{/* col end*/}
                    </div>{/* row end*/}
                </div>
                {/* Container end */}
            </div>
        </section>
    );
}

export default Banner;

