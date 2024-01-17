import linkedinIcon from "../assets/png/linkedin-ico.png";
import githubIcon from "../assets/png/github-ico.png";
import instaIcon from "../assets/png/insta-ico.png";
import resume from "../assets/pdf/Kurtney Jantjies.pdf";

const Footer = () => {
  const getFullYear = new Date().getFullYear();

  return (
    <footer id="contact" className="main-footer">
      <div className="main-container">
        <div className="main-footer__row main-footer__row-1">
          <h2>
            <a
              target="_blank"
              rel="noreferrer"
              href={resume}
              className="main-footer__icon heading heading-sm main-footer__heading-sm"
              // style={{ marginBottom: "15rem" }}
            >
              Resume
            </a>
          </h2>
          <h3>
            <p>
              <br />
              kurtjanties18@gmail.com
            </p>
          </h3>
          <div className="main-footer__social-cont">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kurtney-jantjies/"
            >
              <img
                className="main-footer__icon"
                src={linkedinIcon}
                alt="icon"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kurtney21"
            >
              <img className="main-footer__icon" src={githubIcon} alt="icon" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/op_kurtney/"
            >
              <img
                className="main-footer__icon main-footer__icon--mr-none"
                src={instaIcon}
                alt="icon"
              />
            </a>
          </div>
        </div>
        <div className="main-footer__lower">
          &copy; Copyright {getFullYear}. Made by
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/kurtney-jantjies/"
          >
            Kurtney jantjies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
