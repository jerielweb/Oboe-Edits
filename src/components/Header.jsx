import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoindex from './../assets/favicons/logo-index.png'
import Close from './../components/Close.Button'

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
    const [isOpen, setIsOpen] = useState(false);
    const closeNav = () => setIsOpen(!isOpen);

    return (
        <header className={headerClass}>
            <a className="logo" href="/">
                <img src={logoindex} alt="Oboe Edits Logo" /><span id="beta">Beta</span>
            </a>
            <div className={`overlay ${isOpen ? 'active': ''}`} onClick={closeNav}></div>
            <nav className={`navigation ${isOpen ? 'active': ''}`}>
                    <button className='NavBtn' onClick={closeNav}>
                        <Close />
                    </button>
                <aside className="nav-links">
                    <NavLink to="/" className={getNavLinkClass} onClick={closeNav} end>Inicio</NavLink>
                    <NavLink to="/services" className={getNavLinkClass} onClick={closeNav}>Servicios</NavLink>
                    <NavLink to="/contact" className={getNavLinkClass} onClick={closeNav}>Contacto</NavLink>
                    <NavLink to="/about" className={getNavLinkClass} onClick={closeNav}>Acerca de</NavLink>
                </aside>
            </nav>
            <div className="menu-icon" onClick={closeNav}>
                <span className="bar" onClick={closeNav}></span>
                <span className="bar" onClick={closeNav}></span>
                <span className="bar" onClick={closeNav}></span>
            </div>
        </header>
    )
}

export default HeadersApp