//impports

const Projects = () => {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub"></span>
        </h2>

        <div className="projects__content">
          <div className="projects__row">
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Campus Placement Predictor</h3>
              <strong className="projects__row-content-desc">
                A web app built to help faculty predict student placements
              </strong>
              <p className="projects__row-content-desc">
                #React JS #Machine Learning #Python #Logistic Regression #CSS #Jupyter
              </p>
              <a
                href="./campusPlacement.html"
                className="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                View Project
              </a>
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">SheSafe</h3>
              <strong className="projects__row-content-desc">Women Safety App</strong>
              <p className="projects__row-content-desc">
                #Android #Java #Telephony API #Camera API #Google play services location API
              </p>
              <a
                href="./sheSafe.html"
                className="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Un-barrier</h3>
              <strong className="projects__row-content-desc">
                Real-time Sign Language translation in Video Calls
              </strong>
              <p className="projects__row-content-desc">#SimplePeer #TensorFlow.js #ml5.js #Sign Language</p>
              <a
                href="./Unbarrier.html"
                className="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                View Project
              </a>
            </div>

            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Marianarrt</h3>
              <strong className="projects__row-content-desc">
                My Oil Paintings Portfolio! (Beta)
              </strong>
              <p className="projects__row-content-desc">#React #Typescript #Netlify</p>
              <a
                href="./marianarrt.html"
                className="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
