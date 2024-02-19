import React from 'react'

const Experience = () => {
  return (
    <>
  {/* ts experience start*/}
  <section id="ts-experiences" className="ts-experiences">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 no-padding">
          <div
            className="exp-img"
            style={{ backgroundImage: "url(./images/cta_img.jpg)" }}
          >
            {/* <img class="img-fluid" src="images/cta_img.jpg" alt=""> */}
          </div>
        </div>
        {/* col end*/}
        <div
          className="col-lg-6 no-padding align-self-center wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="500ms"
        >
          <div className="ts-exp-wrap">
            <div className="ts-exp-content">
              <h2 className="column-title">
                <span>Get Experience</span>
                Shift your perspective on digital business
              </h2>
              <p>
                How you transform your business as technology, consumer, habits
                industry dynamic s change? Find out from those leading the
                charge.
              </p>
            </div>
          </div>
        </div>
        {/* col end*/}
      </div>
      {/* row end*/}
    </div>
    {/* container fluid end*/}
  </section>
  {/* ts experience end*/}
</>

  )
}

export default Experience