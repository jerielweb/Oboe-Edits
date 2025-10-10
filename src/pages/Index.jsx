import stytleIndex from './../Styles/index.module.css'
import Code from './../assets/favicons/codificacion.png'
import Grafico from './../assets/favicons/diseno-grafico.png'
import Video from './../assets/favicons/edicion-de-video.png'
import Archive from './../assets/favicons/editar-archivo.png'

export function Index  () {
    return (
        <main className={stytleIndex.main}>
            <section className={stytleIndex.hero}>
                <h1>Bienvenido a Oboe Edits</h1>
                <p>Tu destino para servicios de edición de alta calidad.</p>
                <p>Transformamos tu contenido en algo extraordinario.</p>

                <div className={stytleIndex.buttonIndex}>
                    <a href="about.html" className={stytleIndex.learnButton}>Saber Más</a>
                    <a href="services.html" className={stytleIndex.startButton}>Haz Tu Pedido</a>
                </div>
            </section>

            <section className={stytleIndex.about}>
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
                        <h3>Edición/Creación de Video</h3>
                        <p>Transforma tus grabaciones en videos profesionales y atractivos.</p>
                    </div>

                    <div className={stytleIndex.servicesCard}>
                        <img src={Archive} alt="Edición/Creación De Documentos"/>
                        <h3>Edición/Creación De Documentos</h3>
                        <p>Transforma tus documentos en versiones pulidas y profesionales.</p>
                    </div>

                    <div className={stytleIndex.servicesCard}>
                        <img src={Grafico} alt="diseno-grafico"/>
                        <h3>Diseño Grafico</h3>
                        <p>Te ayudaremos a mejorar o crear cualquier tipo de imagen para tu negocio o perfil</p>
                    </div>
                    <div className={stytleIndex.servicesCard}>
                        <img src={Code} alt="Creación de Sitios Web Básicos" />
                        <h3>Creación de Sitios Web Básicos</h3>
                        <p>Transforma tus grabaciones de audio en producciones profesionales y claras.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Index