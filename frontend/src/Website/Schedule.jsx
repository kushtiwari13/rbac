import { React, useEffect } from './imports';

const Schedule = () => {
  return (
    <>
  {/* ts experience start*/}
  <section className="ts-schedule">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="section-title">
            <span>Schedule Details</span>
            Event Schedules
          </h2>
          <div className="ts-schedule-nav">
            <ul className="nav nav-tabs justify-content-center" role="tablist">
              <li className="nav-item">
                <a
                  className="active"
                  title="Click Me"
                  href="#date1"
                  role="tab"
                  data-toggle="tab"
                >
                  <h3>5th June</h3>
                  <span>Friday</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=""
                  href="#date2"
                  title="Click Me"
                  role="tab"
                  data-toggle="tab"
                >
                  {" "}
                  <h3>6th June</h3>
                  <span>Saturday</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=""
                  href="#date3"
                  title="Click Me"
                  role="tab"
                  data-toggle="tab"
                >
                  <h3>7th June</h3>
                  <span>Sunday</span>
                </a>
              </li>
            </ul>
            {/* Tab panes */}
          </div>
        </div>
        {/* col end*/}
      </div>
      {/* row end*/}
      <div className="row">
        <div className="col-lg-12">
          <div className="tab-content schedule-tabs schedule-tabs-item">
            <div role="tabpanel" className="tab-pane active" id="date1">
              <div className="row">
                <div className="col-lg-6">
                  <div className="schedule-listing-item schedule-left">
                    <img
                      className="schedule-slot-speakers"
                      src="images/speakers/speaker1.jpg"
                      alt=""
                    />
                    <span className="schedule-slot-time">10.30 - 11.30 AM</span>
                    <h3 className="schedule-slot-title">Marketing Matters</h3>
                    <h4 className="schedule-slot-name">@ Henrikon Rebecca</h4>
                    <p>
                      How you transform your business technolog consumer habits
                      industry dynamics change Find out from those leading the
                      charge How you
                    </p>
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="schedule-listing-item schedule-right">
                    <img
                      className="schedule-slot-speakers"
                      src="images/speakers/speaker2.jpg"
                      alt=""
                    />
                    <span className="schedule-slot-time">11.30 - 12.30 PM</span>
                    <h3 className="schedule-slot-title">
                      Reinventing Experiences
                    </h3>
                    <h4 className="schedule-slot-name">@ Johnsson Agaton</h4>
                    <p>
                      How you transform your business technolog consumer habits
                      industry dynamics change Find out from those leading the
                      charge How you
                    </p>
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="schedule-listing-item schedule-left">
                    <img
                      className="schedule-slot-speakers"
                      src="images/speakers/speaker3.jpg"
                      alt=""
                    />
                    <span className="schedule-slot-time">12.30 - 01.30 PM</span>
                    <h3 className="schedule-slot-title">
                      Cultures of Creativity
                    </h3>
                    <h4 className="schedule-slot-name">@ Lundryn Melisa</h4>
                    <p>
                      How you transform your business technolog consumer habits
                      industry dynamics change Find out from those leading the
                      charge How you
                    </p>
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="schedule-listing-item schedule-right">
                    <img
                      className="schedule-slot-speakers"
                      src="images/speakers/speaker4.jpg"
                      alt=""
                    />
                    <span className="schedule-slot-time">01.30 - 02.30 PM</span>
                    <h3 className="schedule-slot-title">
                      Human Centered Design
                    </h3>
                    <h4 className="schedule-slot-name">@ Fredric Martinsson</h4>
                    <p>
                      How you transform your business technolog consumer habits
                      industry dynamics change Find out from those leading the
                      charge How you
                    </p>
                  </div>
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
              <div className="schedule-listing-btn">
                <a href="#" className="btn">
                  More Details
                </a>
              </div>
            </div>
            {/* tab pane end*/}
            <div role="tabpanel" className="tab-pane" id="date2">
              <div className="row">
                <div className="col-lg-6">
                  <div className="schedule-listing-item schedule-left">
                    <img
                      className="schedule-slot-speakers"
                      src="images/speakers/speaker5.jpg"
                      alt=""
                    />
                    <span className="schedule-slot-time">02.30 - 03.30 PM</span>
                    <h3 className="schedule-slot-title">Marketing Matters</h3>
                    <h4 className="schedule-slot-name">@ Rebecca Henrikon</h4>
                    <p>
                      How you transform your business technolog consumer habits
                      industry dynamics change Find out from those leading the
                      charge How you
                    </p>
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="schedule-listing-item schedule-right">
                    <img
                      className="schedule-slot-speakers"
                      src="images/speakers/speaker6.jpg"
                      alt=""
                    />
                    <span className="schedule-slot-time">03.30 - 04.30 PM</span>
                    <h3 className="schedule-slot-title">
                      Reinventing Experiences
                    </h3>
                    <h4 className="schedule-slot-name">@ Fredric Martinsson</h4>
                    <p>
                      How you transform your business technolog consumer habits
                      industry dynamics change Find out from those leading the
                      charge How you
                    </p>
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="schedule-listing-item schedule-left">
                    <img
                      className="schedule-slot-speakers"
                      src="images/speakers/speaker7.jpg"
                      alt=""
                    />
                    <span className="schedule-slot-time">04.30 - 05.30 PM</span>
                    <h3 className="schedule-slot-title">
                      Cultures of Creativity
                    </h3>
                    <h4 className="schedule-slot-name">@ Melisa Lundryn</h4>
                    <p>
                      How you transform your business technolog consumer habits
                      industry dynamics change Find out from those leading the
                      charge How you
                    </p>
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="schedule-listing-item schedule-right">
                    <img
                      className="schedule-slot-speakers"
                      src="images/speakers/speaker8.jpg"
                      alt=""
                    />
                    <span className="schedule-slot-time">05.30 - 06.30 PM</span>
                    <h3 className="schedule-slot-title">
                      Human Centered Design
                    </h3>
                    <h4 className="schedule-slot-name">@ Agaton Johnsson</h4>
                    <p>
                      How you transform your business technolog consumer habits
                      industry dynamics change Find out from those leading the
                      charge How you
                    </p>
                  </div>
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
              <div className="schedule-listing-btn">
                <a href="#" className="btn">
                  More Details
                </a>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="date3">
              <div className="row">
                <div className="col-lg-6">
                  <div className="schedule-listing-item schedule-left">
                    <img
                      className="schedule-slot-speakers"
                      src="images/speakers/speaker1.jpg"
                      alt=""
                    />
                    <span className="schedule-slot-time">10.30 - 11.30 AM</span>
                    <h3 className="schedule-slot-title">Marketing Matters</h3>
                    <h4 className="schedule-slot-name">@ Rebecca Henrikon</h4>
                    <p>
                      How you transform your business technolog consumer habits
                      industry dynamics change Find out from those leading the
                      charge How you
                    </p>
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="schedule-listing-item schedule-right">
                    <img
                      className="schedule-slot-speakers"
                      src="images/speakers/speaker2.jpg"
                      alt=""
                    />
                    <span className="schedule-slot-time">11.30 - 12.30 PM</span>
                    <h3 className="schedule-slot-title">
                      Reinventing Experiences
                    </h3>
                    <h4 className="schedule-slot-name">@ Hall Building</h4>
                    <p>
                      How you transform your business technolog consumer habits
                      industry dynamics change Find out from those leading the
                      charge How you
                    </p>
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="schedule-listing-item schedule-left">
                    <img
                      className="schedule-slot-speakers"
                      src="images/speakers/speaker3.jpg"
                      alt=""
                    />
                    <span className="schedule-slot-time">01.30 - 02.30 PM</span>
                    <h3 className="schedule-slot-title">
                      Cultures of Creativity
                    </h3>
                    <h4 className="schedule-slot-name">@ Fredric Martinsson</h4>
                    <p>
                      How you transform your business technolog consumer habits
                      industry dynamics change Find out from those leading the
                      charge How you
                    </p>
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="schedule-listing-item schedule-right">
                    <img
                      className="schedule-slot-speakers"
                      src="images/speakers/speaker4.jpg"
                      alt=""
                    />
                    <span className="schedule-slot-time">03.30 - 04.30 PM</span>
                    <h3 className="schedule-slot-title">
                      Human Centered Design
                    </h3>
                    <h4 className="schedule-slot-name">@ Henrikon Rebecca</h4>
                    <p>
                      How you transform your business technolog consumer habits
                      industry dynamics change Find out from those leading the
                      charge How you
                    </p>
                  </div>
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
              <div className="schedule-listing-btn">
                <a href="#" className="btn">
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* container end*/}
  </section>
  {/* ts experience end*/}
</>

  )
}

export default Schedule