import contactData from './../content/contact.content.js'


export function Contact () {
    return (
        <section>
            {contactData.map((contact, index) =>
                <div key={index}>
                    <div>
                        <h2>{contact.name}</h2>
                    </div>
                    <div>
                        <a href={contact.number}>WhatsApp</a>
                    </div>
                </div>
            )}
        </section>
    )
}
export default Contact
