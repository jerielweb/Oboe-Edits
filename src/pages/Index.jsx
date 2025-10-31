import { NavLink } from 'react-router-dom'
import Code from './../assets/favicons/codificacion.png'
import Grafico from './../assets/favicons/diseno-grafico.png'
import Video from './../assets/favicons/edicion-de-video.png'
import Archive from './../assets/favicons/editar-archivo.png'

import { useEffect } from 'react'
import stytleIndex from './../Styles/index.module.css'
export function Index  () {

    useEffect(() => {
        document.title = 'Oboe Edits | Bienvenido';
        const description = 'Oboe Edits - Servicios de edición profesional: edición de video, documentos, diseño gráfico y creación de sitios web básicos.';
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
        <div className={stytleIndex.main}>
            <section className={stytleIndex.hero}>
                <h1>Bienvenido a Oboe Edits</h1>
                <p>Tu destino para servicios de edición de alta calidad.</p>
                <p>Transformamos tu contenido en algo extraordinario.</p>

                <div className={stytleIndex.buttonIndex}>
                    <a href="#about" className={stytleIndex.learnButton}>Saber Más</a>
                    <NavLink to="/services" className={stytleIndex.startButton}>Haz Tu Pedido</NavLink>
                </div>
            </section>

            <section className={stytleIndex.about} id='about'>
                <h2>Acerca de Oboe Edits</h2>
                <p>En Oboe Edits, nos especializamos en ofrecer servicios de edición de alta calidad para ayudar a nuestros clientes a transformar su contenido. Nuestro equipo de editores expertos está comprometido a proporcionar resultados excepcionales que superen las expectativas.</p>
            </section>

            <section className={stytleIndex.services}>
                <div className={stytleIndex.service_header}>
                    <h2>Nuestros Servicios</h2>
                    <p>Ofrecemos una variedad de servicios de edición para satisfacer tus necesidades.</p>
                </div>
                <div className={stytleIndex.servicesContainer}>
                    <div className={stytleIndex.servicesCard}>
                        <img src={Video} alt="Edición/Creación de Audio"/>
                        <h3>Edición de Videos</h3>
                    </div>

                    <div className={stytleIndex.servicesCard}>
                        <img src={Archive} alt="Edición/Creación De Documentos"/>
                        <h3>Edición/Creación De Documentos</h3>
                    </div>

                    <div className={stytleIndex.servicesCard}>
                        <img src={Grafico} alt="diseno-grafico"/>
                        <h3>Diseño Grafico</h3>
                    </div>
                    <div className={stytleIndex.servicesCard}>
                        <img src={Code} alt="Creación de Sitios Web Básicos" />
                        <h3>Creación de Sitios Web Básicos</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Index