import myProfile from "../assets/jpeg/kurtney-jantjies.jpg";
import hamMenuClose from "../assets/svg/ham-menu-close.svg";
import hamMenu from "../assets/svg/ham-menu.svg";
import { useState } from "react";

const Header = () => {
  const [isSmallMenuActive, setSmallMenuActive] = useState(false);
  // const handleComposeEmail = () => {
  //   const emailAddress = 'kurtney71011@gmail.com';
  //   const subject = 'Portfolio Inquiry';
  //   const body = '';
  //   const mailtoLink = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  //   window.open(mailtoLink, '_blank');
  // };

  // const handlePlayPause = () => {
  //   // Implement the play/pause logic here
  //   console.log('Inside handlePlayPause');
  // };

  const handleSmallMenuToggle = () => {
    setSmallMenuActive(!isSmallMenuActive);
  };

  const handleSmallMenuLinkClick = () => {
    setSmallMenuActive(false);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src={myProfile}
              alt="Kurtney Jantjies Logo Image"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Kurtney Jantjies</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="#" className="header__link">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#about" className="header__link">
                About{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#projects" className="header__link">
                Projects
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#contact" className="header__link">
                {" "}
                Resume/ Contact{" "}
              </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont">
            <img
              src={hamMenu}
              alt="hamburger menu"
              className="header__main-ham-menu"
              onClick={handleSmallMenuToggle}
            />
            <img
              src={hamMenuClose}
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
              onClick={handleSmallMenuToggle}
            />
          </div>
        </div>
      </div>
      <div
        className={`header__sm-menu${
          isSmallMenuActive ? "header__sm-menu--active" : ""
        }`}
      >
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li
              className="header__sm-menu-link"
              onClick={handleSmallMenuLinkClick}
            >
              <a href="./index.html"> Home </a>
            </li>
            <li
              className="header__sm-menu-link"
              onClick={handleSmallMenuLinkClick}
            >
              <a href="./index.html#about"> About </a>
            </li>
            <li
              className="header__sm-menu-link"
              onClick={handleSmallMenuLinkClick}
            >
              <a href="./index.html#projects"> Projects </a>
            </li>
            <li
              className="header__sm-menu-link"
              onClick={handleSmallMenuLinkClick}
            >
              <a href="./index.html#contact"> Resume/ Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
