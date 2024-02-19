import { React, useEffect } from './imports';

const FunFact = () => {
    return (
        <section className="ts-funfact" style={{backgroundImage: 'url(./images/funfact_bg.jpg)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="ts-single-funfact">
                            <h3 className="funfact-num"><span className="counterUp" data-counter="43">43</span>+</h3>
                            <h4 className="funfact-title">Our Visionary Speakers</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="ts-single-funfact">
                            <h3 className="funfact-num"><span className="counterUp" data-counter="62">62</span></h3>
                            <h4 className="funfact-title">International Sponsors</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="ts-single-funfact">
                            <h3 className="funfact-num"><span className="counterUp" data-counter="28">28</span>+</h3>
                            <h4 className="funfact-title">Workshops We offer</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="ts-single-funfact">
                            <h3 className="funfact-num"><span className="counterUp" data-counter="950">950</span>+</h3>
                            <h4 className="funfact-title">Event Participants</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FunFact;
