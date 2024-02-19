import { React, useEffect } from './imports';
const EventOutcome = () => {
    return (
        <section className="ts-event-outcome event-intro">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="">
                            <div className="outcome-content ts-exp-content">
                                <h2 className="column-title">
                                    <span>Event Outcomes</span>
                                    Learn new things and
                                    connect people
                                </h2>
                                <p>
                                    How you transform your business technology consumer, habits industry dynamic change the Find
                                    out from those leading
                                </p>
                                <a href="#" className="btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="outcome-content">
                            <div className="outcome-img overlay">
                                <img className="" src="images/about/learn_img.jpg" alt="" />
                            </div>
                            <h3 className="img-title text-white"><a href="#" className="text-white">Learn Things</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="outcome-content">
                            <div className="outcome-img overlay">
                                <img className="" src="images/about/connect_img.jpg" alt="" />
                            </div>
                            <h3 className="img-title"><a href="#" className="text-white">Connect People</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventOutcome;
