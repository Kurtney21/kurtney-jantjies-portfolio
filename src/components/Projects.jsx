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
              <h3 className="projects__row-content-title">Matt-Khai Beauty Salon</h3>
              <strong className="projects__row-content-desc">
                A Beauty Salon website designed for a local business owner.
              </strong>
              <p className="projects__row-content-desc">
                #React #TailWind
              </p>
              <a
                href="https://mattkhaibeautysalon.netlify.app/"
                className="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                View Project
              </a>
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Docter Booking Appointment</h3>
              <strong className="projects__row-content-desc">
                A app that allows users to book appointments at local Doctors.
              </strong>
              <p className="projects__row-content-desc">
                #MongDB #Express.js #React #Nodejs #Stripe
              </p>
              <a
                href="#projects"
                className="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="projects__row">
            
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">
                Python WebScraper
              </h3>
              <strong className="projects__row-content-desc">
                A web scraper is a program that extracts data from websites automatically.(coming soon!)
              </strong>
              <p className="projects__row-content-desc">
                #React JS #Flask #Python #Cheerio #Nodejs #Axios #CORD middleware #Express.js
                #MongoDB #Redis #Docker
              </p>
              <a
                href="#projects"
                className="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                View Project
              </a>
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Employee Management System API</h3>
              <strong className="projects__row-content-desc">
                An REST API Build to store employees.
              </strong>
              <p className="projects__row-content-desc">
                #Spring Boot #MySQL
              </p>
              <a
                href="https://github.com/Kurtney21/employeemanagement-rest-api"
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
  );
};

export default Projects;
