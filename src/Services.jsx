import './Styles/services.css'
import Code from './assets/favicons/codificacion.png'
import Grafico from './assets/favicons/diseno-grafico.png'
import Video from './assets/favicons/edicion-de-video.png'
import Archive from './assets/favicons/editar-archivo.png'

export function Services () {
    return(
        <>
                <section className="services-hero">
            <h1>Servicios de Oboe Edits</h1>
            <p>Ofrecemos una variedad de servicios de edición para satisfacer tus necesidades.</p>
        </section>

        <section className="services-content">
            <article className="card">
                <div className="banner-services">
                    <img src={Video}/>
                    <h2>Edición/Creación de Video</h2>
                </div>
                <div className="decription">
                    <p>Transforma tus grabaciones y conteni en videos profesionales, atractivos, dinamicos y de buena calidad.</p>
                    <a className="button" onclick="mostrarDialog('video')">Más Información</a>
                </div>
            </article>

            <article className="card">
                <div className="banner-services">
                    <img src={Grafico}/>
                    <h2>Diseño Grafico</h2>
                </div>
                <div className="decription">
                    <p>Transforma tus grabaciones y conteni en videos profesionales, atractivos, dinamicos y de buena calidad.</p>
                    <a className="button" onclick="mostrarDialog('grafico')" href="#popup-content">Más Información</a>
                </div>
            </article>

                        <article className="card">
                <div className="banner-services">
                    <img src={Code}/>
                    <h2>Diseño Grafico</h2>
                </div>
                <div className="decription">
                    <p>Transforma tus grabaciones y conteni en videos profesionales, atractivos, dinamicos y de buena calidad.</p>
                    <a className="button" onclick="mostrarDialog('codigo')" href="#popup-content">Más Información</a>
                </div>
            </article>
        </section>
        </>
    )
}

export default Services