import Service from './../Styles/services.module.css'
import serviceData from './../content/services.content.js'


export function Services () {
    return (
        <div className={Service.main}>
            <section className={Service.hero}>
                <h1>Nuestros Servicios</h1>
            </section>

        {serviceData.map((service, index) => (
            <article className={Service.card} key={index}>
            <div className={Service.banner_servises}>
                    <h2>{service.name}</h2>
                <div className={Service.card}>
                    {service.description instanceof Array ? (
                        service.description.map((desc, i) => (
                            <p key={i}>{desc}</p>
                        ))
                    ) : (
                        <p>{service.description}</p>
                    )}
                </div>
                <div className={Service.icon}>
                    <div>
                        <ul className={Service.list}>
                            {service.list && service.list.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={Service.ejem}>
                <h2>Ejemplo:<br />{service.example}</h2>
                <div className={Service.ejemContent}>
                    {service.type === 'image' && service.image && (<img src={service.image} alt={service.name} />)}
                    {service.type === 'video' && service.video && (
                        <iframe
                        src={service.video}
                        title={service.name}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        />
                        )}
                        {service.type === 'PDF' && service.Document && (
                            <div className={Service.pdfPreview}>
                                <iframe
                                    src={service.Document}
                                    title={service.name}
                                    width="100%"
                                    height="500"
                                    className={Service.file}
                                />
                                <div>
                                    <a href={service.Document} target="_blank" rel="noopener noreferrer">Abrir PDF en nueva pestaña</a>
                                </div>
                            </div>
                        )}
                </div>
                <div className={Service.button}>
                    <a className={Service.WhatsAppLink} href={service.link} target="_blank" rel="noopener noreferrer">Pedir Por WhatsApp</a>
                    <a className={Service.EmailLink} href={service.email} target="_blank" rel="noopener noreferrer">Pedir Por Email</a>
                </div>
            </div>
            </article>
            ))}
        </div>
    )
}

export default Services
