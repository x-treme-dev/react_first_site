 import './Header.css'

const Header = () => {
    return (
          <ul className="header__ul">
            <a className="header__a"  href="#">
            <li className="header__li">About me</li>
            </a>
            <a className="header__a"  href="#">
            <li className="header__li">Portfolio</li>
            </a>
            <a className="header__a" href="#">
            <li className="header__li">Skills</li>
            </a>
            <a className="header__a"  href="#">
            <li className="header__li">Contacts</li>
            </a>
          </ul> 
    );
};

export default Header;
