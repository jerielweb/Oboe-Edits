import { NavLink } from 'react-router-dom'


export function Footer () {
    return (
    <footer className="footer">
        <p>&copy; 2025 Oboe Edits. Todos los derechos reservados.</p>
        <div className="footer-links">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/services">Servicios</NavLink>
            <NavLink to="/contact">Contacto</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </div>
    </footer>
    )
}

export default Footer