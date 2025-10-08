import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoindex from './../assets/favicons/logo-index.png'

export function HeadersApp () {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrolled])
    const headerClass = scrolled ? 'header scroll-header' : 'header'
    const getNavLinkClass = ({ isActive }) => {
        return isActive ? 'nav-link active' : 'nav-link'
    }


    return (
        <header className={headerClass}>
            <a className="logo" href="/">
                <img src={logoindex} alt="Oboe Edits Logo" /><span id="beta">Beta</span>
            </a>
            <nav className="navigation">
                <aside className="nav-links">
                    <NavLink to="/" className={getNavLinkClass} end>Inicio</NavLink>
                    <NavLink to="/services" className={getNavLinkClass}>Servicios</NavLink>
                    <NavLink to="/contact" className={getNavLinkClass}>Contacto</NavLink>
                    <NavLink to="/about" className={getNavLinkClass}>Acerca de</NavLink>
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