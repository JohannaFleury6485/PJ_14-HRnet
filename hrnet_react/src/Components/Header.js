import logo from '../Assets/logo.png'
import '../Style/header.css';

function Header() {
  return (
    <div className="header_main">
      <header className="app_header">
        <img src={logo} alt="logo enterprise" className='logo'></img>
        <h2 className='title_header'>HRnet</h2>
        <p>Welcome !</p>

      </header>

    </div>
  );
}

export default Header;
