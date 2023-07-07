import PawEnMijLogo from '../../assets/images/header-logo.png'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {
  return (
    <div className="header">
        <img src={PawEnMijLogo} width="500px" height="125"/>
    </div>
  )
}

export default Header
