import PawLogo from '../../assets/images/paw_logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

            <img src={PawLogo} className="navbar-logo"></img>
            <a className="nav-link active navbar-text" aria-current="page" href="/"> Home </a>

            <img src={PawLogo} className="navbar-logo"></img>
            <a className="nav-link navbar-text" href="/addPet"> Add </a>

            <img src={PawLogo} className="navbar-logo"></img>
            <a className="nav-link navbar-text" href="/myPetListings"> My listings </a>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
