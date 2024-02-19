import { React, useEffect } from './imports';

const Sponsors = () => {
  return (
<>
  {/* ts sponsors start*/}
  <section
    className="ts-intro-sponsors"
    style={{ backgroundImage: "url(./images/sponsors/sponsor_img.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="section-title white">
            <span>Who helps us</span>
            Our Sponsors
          </h2>
          {/* section title end*/}
        </div>
        {/* col end*/}
      </div>
      {/* row end*/}
      <div className="row">
        <div className="col-lg-12">
          <div className="sponsors-logo text-center">
            <a href="">
              <img src="images/sponsors/sponsor1.png" alt="" />
            </a>
            <a href="">
              <img src="images/sponsors/sponsor2.png" alt="" />
            </a>
            <a href="">
              <img src="images/sponsors/sponsor3.png" alt="" />
            </a>
            <a href="">
              <img src="images/sponsors/sponsor4.png" alt="" />
            </a>
            <a href="">
              <img src="images/sponsors/sponsor5.png" alt="" />
            </a>
            <a href="">
              <img src="images/sponsors/sponsor6.png" alt="" />
            </a>
            <a href="">
              <img src="images/sponsors/sponsor7.png" alt="" />
            </a>
            <a href="">
              <img src="images/sponsors/sponsor8.png" alt="" />
            </a>
            <a href="">
              <img src="images/sponsors/sponsor9.png" alt="" />
            </a>
            <div className="sponsor-btn text-center">
              <a href="#" className="btn">
                Become a Sponsor
              </a>
            </div>
          </div>
          {/* sponsors logo end*/}
        </div>
        {/* col end*/}
      </div>
      {/* row end*/}
    </div>
    {/* container end*/}
  </section>
  {/* ts sponsors end*/}
</>

    )
}

export default Sponsors