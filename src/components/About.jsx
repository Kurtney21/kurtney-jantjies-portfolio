//imports

const About = () => {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            I am a Application Development Graduate Student from Cape Peninsula University of Technology, CPT, RSA.
            
            After this, I worked as a Software Support Analyst at Construct education for 2 peak seasons. I like to tie my projects and volunteering to social causes, and I intend to keep that trend trending.
            When I am not coding, or stuck in a Youtube rabbit hole, you will most likely find me mixing music. {"I've"} won some pretty.. nice! recognitions for my dj style, such as being featured by EJM Events of CPT, RSA - You can check out my
            <a href="https://www.facebook.com/weareteamclinty/posts/pfbid0tJpc4B4JiuxVxLVvbwvSzRta22czpqFYZoCrW9MRdqh2sSFwyWaV9KMURvhtxLj5l" style={{ color: 'rgba(0,98,185,0.8)' }}> Facebook </a> if {"you'd"} like to see :)
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            
            <h3 className="about__content-title">Experience</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                <strong style={{ color: 'rgba(0,98,185,0.8)' }}><a href="https://www.accenture.com/in-en">Accenture, India</a></strong> &nbsp;&nbsp;(June 2021 - July 2023) <br /> - Packaged Application Developer: Salesforce Developer<br />
              </p>
            </div>
            <h3 className="about__content-title">Education</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                <strong style={{ color: 'rgba(0,98,185,0.8)' }}><a href="https://www.scu.edu/">Santa Clara University, California</a></strong>&nbsp;&nbsp; (Sept 2023 - July 2025) <br /> -Master of Science in Computer Science<br />
              </p>
            </div>
            <div className="about__content-details">
              <p className="about__content-details-para">
                <strong style={{ color: 'rgba(0,98,185,0.8)' }}><a href="https://mu.ac.in/">University of Mumbai, India</a></strong> &nbsp;&nbsp;(June 2017 - May 2021) <br />
                 -Bachelor of Engineering in Information Technology<br />
                 -GPA: 7.91/10.00 <br /><br />
              </p>
            </div>
            <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">Apex</div>
              <div className="skills__skill">Java</div>
              <div className="skills__skill">C</div>
              <div className="skills__skill">Salesforce</div>
              <div className="skills__skill">Aura</div>
              <div className="skills__skill">SOQL</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">Android</div>
              <div className="skills__skill">Git</div>
              <div className="skills__skill">Copado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
