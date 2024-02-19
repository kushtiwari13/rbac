import { React, useEffect } from './imports';

const Speakers = () => {
  return (
    <>
    {/* ts speaker start*/}
    <section
      id="ts-speakers"
      className="ts-speakers"
      style={{ backgroundImage: "url(./images/speakers/speaker_bg.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-title text-center">
              <span>Listen to the</span>
              Event Speakers
            </h2>
          </div>
          {/* col end*/}
        </div>
        {/* row end*/}
        <div className="row">
          <div
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="400ms"
          >
            <div className="ts-speaker">
              <div className="speaker-img">
                <img
                  className="img-fluid"
                  src="images/speakers/speaker1.jpg"
                  alt=""
                />
                <a
                  href="#popup_1"
                  className="view-speaker ts-image-popup"
                  data-effect="mfp-zoom-in"
                >
                  <i className="icon icon-plus" />
                </a>
              </div>
              <div className="ts-speaker-info">
                <h3 className="ts-title">
                  <a href="#">Fredric Martinsson</a>
                </h3>
                <p>Founder, Edilta</p>
              </div>
            </div>
            {/* popup start*/}
            <div id="popup_1" className="container ts-speaker-popup mfp-hide">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-img">
                    <img src="images/speakers/speaker1.jpg" alt="" />
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-content">
                    <h3 className="ts-title">David Robert</h3>
                    <span className="speakder-designation">
                      Cheif Architecture
                    </span>
                    <img
                      className="company-logo"
                      src="images/sponsors/sponsor-6.png"
                      alt=""
                    />
                    <p>
                      World is committed to making participation in the event a
                      harass ment free experience for everyone, regardless of
                      level experience gender, gender identity and expression
                    </p>
                    <h4 className="session-name">Sessions by David</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                    </div>
                    <div className="ts-speakers-social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                  {/* ts-speaker-popup-content end*/}
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
            </div>
            {/* popup end*/}
          </div>{" "}
          {/* col end*/}
          <div
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="500ms"
          >
            <div className="ts-speaker">
              <div className="speaker-img">
                <img
                  className="img-fluid"
                  src="images/speakers/speaker2.jpg"
                  alt=""
                />
                <a
                  href="#popup_2"
                  className="view-speaker ts-image-popup"
                  data-effect="mfp-zoom-in"
                >
                  <i className="icon icon-plus" />
                </a>
              </div>
              <div className="ts-speaker-info">
                <h3 className="ts-title">
                  <a href="#">Melisa Lundryn</a>
                </h3>
                <p>Lead Designer, Payol</p>
              </div>
            </div>
            {/* popup start*/}
            <div id="popup_2" className="container ts-speaker-popup mfp-hide">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-img">
                    <img src="images/speakers/speaker2.jpg" alt="" />
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-content">
                    <h3 className="ts-title">David Robert</h3>
                    <span className="speakder-designation">
                      Cheif Architecture
                    </span>
                    <img
                      className="company-logo"
                      src="images/sponsors/sponsor-6.png"
                      alt=""
                    />
                    <p>
                      World is committed to making participation in the event a
                      harass ment free experience for everyone, regardless of
                      level experience gender, gender identity and expression
                    </p>
                    <h4 className="session-name">Sessions by David</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                    </div>
                    <div className="ts-speakers-social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                  {/* ts-speaker-popup-content end*/}
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
            </div>
            {/* popup end*/}
          </div>{" "}
          {/* col end*/}
          <div
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="600ms"
          >
            <div className="ts-speaker">
              <div className="speaker-img">
                <img
                  className="img-fluid"
                  src="images/speakers/speaker3.jpg"
                  alt=""
                />
                <a
                  href="#popup_3"
                  className="view-speaker ts-image-popup"
                  data-effect="mfp-zoom-in"
                >
                  <i className="icon icon-plus" />
                </a>
              </div>
              <div className="ts-speaker-info">
                <h3 className="ts-title">
                  <a href="#">Agaton Johnsson</a>
                </h3>
                <p>Developer Expert</p>
              </div>
            </div>
            {/* popup start*/}
            <div id="popup_3" className="container ts-speaker-popup mfp-hide">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-img">
                    <img src="images/speakers/speaker3.jpg" alt="" />
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-content">
                    <h3 className="ts-title">David Robert</h3>
                    <span className="speakder-designation">
                      Cheif Architecture
                    </span>
                    <img
                      className="company-logo"
                      src="images/sponsors/sponsor-6.png"
                      alt=""
                    />
                    <p>
                      World is committed to making participation in the event a
                      harass ment free experience for everyone, regardless of
                      level experience gender, gender identity and expression
                    </p>
                    <h4 className="session-name">Sessions by David</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                    </div>
                    <div className="ts-speakers-social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                  {/* ts-speaker-popup-content end*/}
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
            </div>
            {/* popup end*/}
          </div>{" "}
          {/* col end*/}
          <div
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="700ms"
          >
            <div className="ts-speaker">
              <div className="speaker-img">
                <img
                  className="img-fluid"
                  src="images/speakers/speaker4.jpg"
                  alt=""
                />
                <a
                  href="#popup_4"
                  className="view-speaker ts-image-popup"
                  data-effect="mfp-zoom-in"
                >
                  <i className="icon icon-plus" />
                </a>
              </div>
              <div className="ts-speaker-info">
                <h3 className="ts-title">
                  <a href="#">Rebecca Henrikon</a>
                </h3>
                <p>Founder, Cards</p>
              </div>
            </div>
            {/* popup start*/}
            <div id="popup_4" className="container ts-speaker-popup mfp-hide">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-img">
                    <img src="images/speakers/speaker4.jpg" alt="" />
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-content">
                    <h3 className="ts-title">David Robert</h3>
                    <span className="speakder-designation">
                      Cheif Architecture
                    </span>
                    <img
                      className="company-logo"
                      src="images/sponsors/sponsor-6.png"
                      alt=""
                    />
                    <p>
                      World is committed to making participation in the event a
                      harass ment free experience for everyone, regardless of
                      level experience gender, gender identity and expression
                    </p>
                    <h4 className="session-name">Sessions by David</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                    </div>
                    <div className="ts-speakers-social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                  {/* ts-speaker-popup-content end*/}
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
            </div>
            {/* popup end*/}
          </div>{" "}
          {/* col end*/}
          <div
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="800ms"
          >
            <div className="ts-speaker">
              <div className="speaker-img">
                <img
                  className="img-fluid"
                  src="images/speakers/speaker5.jpg"
                  alt=""
                />
                <a
                  href="#popup_5"
                  className="view-speaker  ts-image-popup"
                  data-effect="mfp-zoom-in"
                >
                  <i className="icon icon-plus" />
                </a>
              </div>
              <div className="ts-speaker-info">
                <h3 className="ts-title">
                  <a href="#">Fredric Martinsson</a>
                </h3>
                <p>Founder, Edilta</p>
              </div>
            </div>
            {/* popup start*/}
            <div id="popup_5" className="container ts-speaker-popup mfp-hide">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-img">
                    <img src="images/speakers/speaker5.jpg" alt="" />
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-content">
                    <h3 className="ts-title">David Robert</h3>
                    <span className="speakder-designation">
                      Cheif Architecture
                    </span>
                    <img
                      className="company-logo"
                      src="images/sponsors/sponsor-6.png"
                      alt=""
                    />
                    <p>
                      World is committed to making participation in the event a
                      harass ment free experience for everyone, regardless of
                      level experience gender, gender identity and expression
                    </p>
                    <h4 className="session-name">Sessions by David</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                    </div>
                    <div className="ts-speakers-social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                  {/* ts-speaker-popup-content end*/}
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
            </div>
            {/* popup end*/}
          </div>{" "}
          {/* col end*/}
          <div
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="900ms"
          >
            <div className="ts-speaker">
              <div className="speaker-img">
                <img
                  className="img-fluid"
                  src="images/speakers/speaker6.jpg"
                  alt=""
                />
                <a
                  href="#popup_6"
                  className="view-speaker ts-image-popup"
                  data-effect="mfp-zoom-in"
                >
                  <i className="icon icon-plus" />
                </a>
              </div>
              <div className="ts-speaker-info">
                <h3 className="ts-title">
                  <a href="#">Lundryn Melisa </a>
                </h3>
                <p>Lead Designer, Payol</p>
              </div>
            </div>
            {/* popup start*/}
            <div id="popup_6" className="container ts-speaker-popup mfp-hide">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-img">
                    <img src="images/speakers/speaker1.jpg" alt="" />
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-content">
                    <h3 className="ts-title">David Robert</h3>
                    <span className="speakder-designation">
                      Cheif Architecture
                    </span>
                    <img
                      className="company-logo"
                      src="images/sponsors/sponsor-6.png"
                      alt=""
                    />
                    <p>
                      World is committed to making participation in the event a
                      harass ment free experience for everyone, regardless of
                      level experience gender, gender identity and expression
                    </p>
                    <h4 className="session-name">Sessions by David</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                    </div>
                    <div className="ts-speakers-social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                  {/* ts-speaker-popup-content end*/}
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
            </div>
            {/* popup end*/}
          </div>{" "}
          {/* col end*/}
          <div
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="1000ms"
          >
            <div className="ts-speaker">
              <div className="speaker-img">
                <img
                  className="img-fluid"
                  src="images/speakers/speaker7.jpg"
                  alt=""
                />
                <a
                  href="#popup_7"
                  className="view-speaker ts-image-popup"
                  data-effect="mfp-zoom-in"
                >
                  <i className="icon icon-plus" />
                </a>
              </div>
              <div className="ts-speaker-info">
                <h3 className="ts-title">
                  <a href="#">Johnsson Agaton </a>
                </h3>
                <p>Developer Expert</p>
              </div>
            </div>
            {/* popup start*/}
            <div id="popup_7" className="container ts-speaker-popup mfp-hide">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-img">
                    <img src="images/speakers/speaker7.jpg" alt="" />
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-content">
                    <h3 className="ts-title">David Robert</h3>
                    <span className="speakder-designation">
                      Cheif Architecture
                    </span>
                    <img
                      className="company-logo"
                      src="images/sponsors/sponsor-6.png"
                      alt=""
                    />
                    <p>
                      World is committed to making participation in the event a
                      harass ment free experience for everyone, regardless of
                      level experience gender, gender identity and expression
                    </p>
                    <h4 className="session-name">Sessions by David</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                    </div>
                    <div className="ts-speakers-social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                  {/* ts-speaker-popup-content end*/}
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
            </div>
            {/* popup end*/}
          </div>{" "}
          {/* col end*/}
          <div
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="1100ms"
          >
            <div className="ts-speaker">
              <div className="speaker-img">
                <img
                  className="img-fluid"
                  src="images/speakers/speaker8.jpg"
                  alt=""
                />
                <a
                  href="#popup_8"
                  className="view-speaker ts-image-popup"
                  data-effect="mfp-zoom-in"
                >
                  <i className="icon icon-plus" />
                </a>
              </div>
              <div className="ts-speaker-info">
                <h3 className="ts-title">
                  <a href="#">Henrikon Rebecca </a>
                </h3>
                <p>Founder, Cards</p>
              </div>
            </div>
            {/* popup start*/}
            <div id="popup_8" className="container ts-speaker-popup mfp-hide">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-img">
                    <img src="images/speakers/speaker8.jpg" alt="" />
                  </div>
                </div>
                {/* col end*/}
                <div className="col-lg-6">
                  <div className="ts-speaker-popup-content">
                    <h3 className="ts-title">David Robert</h3>
                    <span className="speakder-designation">
                      Cheif Architecture
                    </span>
                    <img
                      className="company-logo"
                      src="images/sponsors/sponsor-6.png"
                      alt=""
                    />
                    <p>
                      World is committed to making participation in the event a
                      harass ment free experience for everyone, regardless of
                      level experience gender, gender identity and expression
                    </p>
                    <h4 className="session-name">Sessions by David</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="speaker-session-info">
                          <h4>Day 1</h4>
                          <span>10.30 - 11.30 am</span>
                          <p>Marketing Matters</p>
                        </div>
                      </div>
                    </div>
                    <div className="ts-speakers-social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                  {/* ts-speaker-popup-content end*/}
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
            </div>
            {/* popup end*/}
          </div>{" "}
          {/* col end*/}
        </div>
        {/* row end*/}
      </div>
      {/* container end*/}
      {/* shap img*/}
      <div className="speaker-shap">
        <img
          className="shap1"
          src="images/shap/home_speaker_memphis1.png"
          alt=""
        />
        <img
          className="shap2"
          src="images/shap/home_speaker_memphis2.png"
          alt=""
        />
        <img
          className="shap3"
          src="images/shap/home_speaker_memphis3.png"
          alt=""
        />
      </div>
      {/* shap img end*/}
    </section>
    {/* ts speaker end*/}
  </>
  
  )
}

export default Speakers