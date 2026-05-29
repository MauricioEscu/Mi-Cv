import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ tema, toggleTema }) {
  return (
    <nav className={`navbar navbar-expand-lg ${tema === 'dark' ? 'navbar-dark bg-dark border-bottom border-secondary' : 'navbar-light bg-light border-bottom'}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Mi Portafolio 
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre Mí</Link>
            </li>
            
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button 
                className={`btn btn-sm ${tema === 'dark' ? 'btn-outline-warning' : 'btn-outline-dark'}`}
                onClick={toggleTema}
              >
                {tema === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  tema: PropTypes.string.isRequired,
  toggleTema: PropTypes.func.isRequired
};

export default Navbar;