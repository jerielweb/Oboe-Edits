import { useEffect } from 'react'
import EImage from '../assets/img/404.png'
import errorStyle from './../Styles/404.module.css'
import { Link } from 'react-router-dom'
export function Error404() {

    useEffect(() => {
        document.title = 'Error | Página no encontrada - Oboe Edits';
        const description = '404 | La página solicitada no fue encontrada en Oboe Edits.';
        let meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', description);
        else {
            meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description;
            document.head.appendChild(meta);
        }
    }, [])
    return (
        <div className={errorStyle.container}>
           <div className={errorStyle.imageContainer}>
                <img src={EImage} alt="Error 404" className={errorStyle.image} loading='lazy'/>
           </div>
           <div className={errorStyle.textContainer}>
                <div>
                    <h1 className={errorStyle.title}>404</h1>
                    <h2 className={errorStyle.subtitle}>Página No Encontrada</h2>
                </div>
                <div className={errorStyle.messageContainer}>
                    <p className={errorStyle.text}>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
                </div>
                <div className={errorStyle.buttonContainer}>
                    <Link to="/" className={errorStyle.button}>Volver al Inicio</Link>
                </div>
           </div>
        </div>
    )
}
export default Error404