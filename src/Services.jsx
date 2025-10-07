import Code from './assets/favicons/codificacion.png'
import Grafico from './assets/favicons/diseno-grafico.png'
import Video from './assets/favicons/edicion-de-video.png'
import Archive from './assets/favicons/editar-archivo.png'

import Service from './Styles/services.module.css'
export function Services () {
    return(
        <>
        <section className={Service.hero}>
            <h1>Servicios de Oboe Edits</h1>
            <p>Ofrecemos una variedad de servicios de edición para satisfacer tus necesidades.</p>
        </section>

        <section className={Service.Content}>
            <article className={Service.card}>
                <div className={Service.banner_servises}>
                    <img src={Video}/>
                    <h2>Edición/Creación de Video</h2>
                </div>
                <div className={Service.card}>
                    <p>Transforma tus grabaciones y conteni en videos profesionales, atractivos, dinamicos y de buena calidad.</p>
                </div>
                    <a className={Service.button}>Más Información</a>
            </article>

            <article className={Service.card}>
                <div className={Service.banner_servises}>
                    <img src={Grafico}/>
                    <h2>Diseño Grafico</h2>
                </div>
                <div className={Service.card}>
                    <p>Transforma tus grabaciones y conteni en videos profesionales, atractivos, dinamicos y de buena calidad.</p>
                </div>
                    <a className={Service.button} href="#popup-content">Más Información</a>
            </article>

            <article className={Service.card}>
                <div className={Service.banner_servises}>
                    <img src={Code}/>
                    <h2>Diseño Grafico</h2>
                </div>
                <div className={Service.card}>
                    <p>Transforma tus grabaciones y conteni en videos profesionales, atractivos, dinamicos y de buena calidad.</p>
                </div>
                    <a className={Service.button} href="#popup-content">Más Información</a>
            </article>
        </section>
        </>
    )
}

export default Services