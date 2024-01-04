//imports

const About = () => {
  const skillsData = [
    'Core Java',
    'Springboot',
    'SQL',
    'MySQL',
    'PostgreSQL',
    'Node.js',
    'JavaScript',
    'Android',
    'Git',
    'Github',
    'Version Control',
    'ReactJS',
    'CSS',
    'SCSS',
    'RestFul APIs',
    'CI/CD',
  ];
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            I am a Application Development Graduate Student from Cape Peninsula
            University of Technology, CPT, RSA. After this, I worked as a
            Software Support Analyst at Construct education for 2 peak seasons.
            I like to tie my projects and volunteering to social causes, and I
            intend to keep that trend trending. When I am not coding, or stuck
            in a Youtube rabbit hole, you will most likely find me mixing music.{" "}
            {"I've"} won some pretty.. nice! recognitions for my dj style, such
            as being featured by EJM Events of CPT, RSA - You can check out my
            <a
              href="https://www.facebook.com/weareteamclinty/posts/pfbid0tJpc4B4JiuxVxLVvbwvSzRta22czpqFYZoCrW9MRdqh2sSFwyWaV9KMURvhtxLj5l"
              style={{ color: "rgba(0,98,185,0.8)" }}
            >
              {" "}
              Facebook{" "}
            </a>{" "}
            if {"you'd"} like to see :)
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Experience</h3>
            <div className="about__content-details">
              {/* Construct Education */}
              <p className="about__content-details-para">
                <strong style={{ color: "rgba(0,98,185,0.8)" }}>
                  <a href="https://www.accenture.com/in-en">Construct Education, South Africa</a>
                </strong>{" "}
                &nbsp;&nbsp;(Nov 2022 - January 2024) <br /> 
                - Software Support Analyst(L1)
                <br />
              </p>
              {/* Mr. Price Home */}
              <p className="about__content-details-para">
                <strong style={{ color: "rgba(0,98,185,0.8)" }}>
                  <a href="https://www.accenture.com/in-en">Mr. Price Home, Somerset West, South Africa</a>
                </strong>{" "}
                &nbsp;&nbsp;(Dec 2018 - January 2024) <br /> 
                - Retail Associate(Sales, Furniture and Cashier)
                <br />
              </p>
            </div>
            <h3 className="about__content-title">Education</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                <strong style={{ color: "rgba(0,98,185,0.8)" }}>
                  <a href="https://www.cput.ac.za/">
                    Cape Peninsula University of Technology, Cape Town
                  </a><br/>
                </strong>
                &nbsp;&nbsp; (Sept 2023 - July 2025) <br /> 
                - Diploma: Application Development
                <br />
              </p>
            </div>
            <div className="about__content-details">
              <p className="about__content-details-para">
                <strong style={{ color: "rgba(0,98,185,0.8)" }}>
                  <a href="https://www.cput.ac.za/">Cape Peninsula University of Technology, Cape Town</a>
                </strong>{" "}
                &nbsp;&nbsp;(June 2017 - May 2021) <br />
                - HC: Information and Communication Technology
                <br />
              </p>
            </div>
          
          </div>

          {/* Improve this section by mapping the elements to an array */}
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              {skillsData.map((skill, index) => (
                <div className="skills__skill" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
