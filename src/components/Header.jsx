import myProfile from '../assets/jpeg/kurtney-jantjies.jpg'

const Header = () => {
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
    // Implement the small menu toggle logic here
    console.log('Inside handleSmallMenuToggle');
  };

  const handleSmallMenuLinkClick = () => {
    // Implement the logic for small menu link click here
    console.log('Inside handleSmallMenuLinkClick');
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
              <a href="./index.html" className="header__link"> Home </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./index.html#about" className="header__link">About </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./index.html#projects" className="header__link">
                Projects
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./index.html#contact" className="header__link"> Resume/ Contact </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont">
            <img
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className="header__main-ham-menu"
              onClick={handleSmallMenuToggle}
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
              onClick={handleSmallMenuToggle}
            />
          </div>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link" onClick={handleSmallMenuLinkClick}>
              <a href="./index.html"> Home </a>
            </li>
            <li className="header__sm-menu-link" onClick={handleSmallMenuLinkClick}>
              <a href="./index.html#about"> About </a>
            </li>
            <li className="header__sm-menu-link" onClick={handleSmallMenuLinkClick}>
              <a href="./index.html#projects"> Projects </a>
            </li>
            <li className="header__sm-menu-link" onClick={handleSmallMenuLinkClick}>
              <a href="./index.html#contact"> Resume/ Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
