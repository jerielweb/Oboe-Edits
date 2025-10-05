import { useLocation } from 'react-router-dom';
import './index.css'
import logoindex from './assets/favicons/logo-index.png'

export function HeadersApp () {
    const location = useLocation()
    const currentPath = location.pathname
    return (
        <header className="header">
        <a className="logo" href="/">
            <img src={logoindex} alt="Oboe Edits Logo" /><span id="beta">Beta</span>
        </a>
        <nav className="navigation">
            <aside className="nav-links">
                <a href="/index" className={ currentPath === '/index' ? 'active' : '' }>Inicio</a>
                <a href="/services" className={ currentPath === '/services' ? 'active' : '' }>Servicios</a>
                <a href="/contact" className={ currentPath === '/contact' ? 'active' : '' }>Contacto</a>
                <a href="/about" className={currentPath === '/about' ? 'active' : '' }>Acerca de</a>
            </aside>
        </nav>
        <div className="menu-icon">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    </header>
    )
}

export default HeadersApp
