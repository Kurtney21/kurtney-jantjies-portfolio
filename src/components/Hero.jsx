import logo from '../assets/jpeg/kurtney-jantjies.jpg'
import linkedin from '../assets/png/linkedin-ico.png'
import insta from '../assets/png/insta-ico.png'
import github from '../assets/png/github-ico.png'



const Hero = () => {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hi! I am Kurtney</h1>
        <div style={{ textAlign: 'center' }}>
          <img style={{ height: '200px' }} src={logo} alt="Avatar" />
        </div>
        <div className="home-hero__info">
          <p className="text-primary">
            Application Developer | Music Enthusiast | Fun Friday Fanatic
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn btn--bg">
            Projects
          </a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a
            href="https://www.linkedin.com/in/kurtney-jantjies/"
            className="home-hero__social-icon-link"
          >
            <img src={linkedin} alt="icon" className="home-hero__social-icon" />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://github.com/Kurtney21" className="home-hero__social-icon-link">
            <img src={github} alt="icon" className="home-hero__social-icon" />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://www.instagram.com/op_kurtney/"
            className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
          >
            <img src={insta} alt="icon" className="home-hero__social-icon" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
