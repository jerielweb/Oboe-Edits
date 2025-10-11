import Service from './../Styles/services.module.css'
import serviceData from './../content/services.content.js';
export function Services () {
    return (
        <div className={Service.main}>
            <section className={Service.hero}>
                <h1>Nuestros Servicios</h1>
            </section>

        {serviceData.map((serviceData, ServiceList) => (
            <article className={Service.card} key={ServiceList}>
            <div className={Service.banner_servises}>
                    <h2>{serviceData.name}</h2>
                <div className={Service.card}>
                    {serviceData.description instanceof Array ? (
                        serviceData.description.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))
                    ) : (
                        <p>{serviceData.description}</p>
                    )}
                </div>
                <div className={Service.icon}>
                    <div>
                        <ul className={Service.list}>
                            {serviceData.list && serviceData.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={Service.ejem}>
                <h2>Ejemplo:<br />{serviceData.example}</h2>
                <div className={Service.ejemContent}>
                    {serviceData.type === 'image' && serviceData.image && (<img src={serviceData.image} alt={serviceData.name} />)}
                    {serviceData.type === 'video' && serviceData.video && (
                        <iframe
                        src={serviceData.video}
                        title={serviceData.name}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        />
                        )}
                        {/* Puedes agregar más tipos, por ejemplo PDF, audio, etc. */}
                </div>
                <div className={Service.button}>
                    <a className={Service.WhatsAppLink} href={serviceData.link} target="_blank" rel="noopener noreferrer">Pedir Por WhatsApp</a>
                    <a className={Service.EmailLink} href={serviceData.email} target="_blank" rel="noopener noreferrer">Pedir Por Email</a>
                </div>
            </div>
            </article>
            ))}
        </div>
    )
}

export default Services