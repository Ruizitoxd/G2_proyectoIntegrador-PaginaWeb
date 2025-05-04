import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import '../styles/Header.css';

export default function Header() {
    const navigate = useNavigate();

    const irAlLogin = () => {
        navigate('/Login');
    };

    return (
        <header className="navbar">
            <div className="container-fluid">
                <div className="navbar-brand montserrat-title-font" href="#">
                    <img
                        src={require('../Images/Logo_Ideam.png')}
                        alt="Logo_Ideam"
                    />
                    Instituto de Hidrología, Meteorología y Estudios Ambientales
                </div>
                <div className="navbar-user-container">
                    <FontAwesomeIcon icon={faCircleUser} size="3x" />
                    <button className="login-button" onClick={irAlLogin}>
                        Inciar sesión
                    </button>
                </div>
            </div>
        </header>
    );
}
