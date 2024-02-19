import { React, useEffect } from './imports';

const Blog = () => {
  return (
    <>
  {/* ts blog start*/}
  <section className="ts-blog section-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="section-title">
            <span>Info Update</span>
            Latest News
          </h2>
        </div>
        {/* col end*/}
      </div>
      {/* row end*/}
      <div className="row">
        <div
          className="col-lg-4 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="400ms"
        >
          <div className="post">
            <div className="post-media post-image">
              <a href="#">
                <img src="images/blog/blog1.jpg" className="img-fluid" alt="" />
              </a>
            </div>
            <div className="post-body">
              <div className="post-meta">
                <span className="post-author">
                  <a href="#">BY Admin</a>
                </span>
                <div className="post-meta-date">October 8, 2018</div>
              </div>
              <div className="entry-header">
                <h2 className="entry-title">
                  <a href="#">Check upcoming Events</a>
                </h2>
              </div>
              {/* header end */}
              <div className="entry-content">
                <p>
                  How you transform your business asap technology, consumer,
                </p>
              </div>
              <div className="post-footer">
                <a href="news-single.html" className="btn-link">
                  Read More <i className="icon icon-arrow-right" />
                </a>
              </div>
            </div>
            {/* post-body end */}
          </div>
          {/* post end*/}
        </div>
        {/* col end*/}
        <div
          className="col-lg-4 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="500ms"
        >
          <div className="post">
            <div className="post-media post-image">
              <a href="#">
                <img src="images/blog/blog2.jpg" className="img-fluid" alt="" />
              </a>
            </div>
            <div className="post-body">
              <div className="post-meta">
                <span className="post-author">
                  <a href="#">BY Admin</a>
                </span>
                <div className="post-meta-date">October 8, 2018</div>
              </div>
              <div className="entry-header">
                <h2 className="entry-title">
                  <a href="#">Adding a New Digital</a>
                </h2>
              </div>
              {/* header end */}
              <div className="entry-content">
                <p>
                  How you transform your business asap technology, consumer,
                </p>
              </div>
              <div className="post-footer">
                <a href="news-single.html" className="btn-link">
                  Read More <i className="icon icon-arrow-right" />
                </a>
              </div>
            </div>
            {/* post-body end */}
          </div>
          {/* post end*/}
        </div>
        {/* col end*/}
        <div
          className="col-lg-4 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="600ms"
        >
          <div className="post">
            <div className="post-media post-image">
              <a href="#">
                <img src="images/blog/blog3.jpg" className="img-fluid" alt="" />
              </a>
            </div>
            <div className="post-body">
              <div className="post-meta">
                <span className="post-author">
                  <a href="#">BY Admin</a>
                </span>
                <div className="post-meta-date">October 8, 2018</div>
              </div>
              <div className="entry-header">
                <h2 className="entry-title">
                  <a href="#">West Elm At Evantor</a>
                </h2>
              </div>
              {/* header end */}
              <div className="entry-content">
                <p>
                  How you transform your business asap technology, consumer,
                </p>
              </div>
              <div className="post-footer">
                <a href="news-single.html" className="btn-link">
                  Read More <i className="icon icon-arrow-right" />
                </a>
              </div>
            </div>
            {/* post-body end */}
          </div>
          {/* post end*/}
        </div>
        {/* col end*/}
      </div>
      {/* row end*/}
    </div>
    {/* container end*/}
    {/* shap image*/}
    <div className="speaker-shap">
      <img className="shap2" src="images/shap/news_memphis2.png" alt="" />
      <img className="shap1" src="images/shap/news_memphis1.png" alt="" />
    </div>
  </section>
  {/* ts blog end*/}
</>

  )
}

export default Blog