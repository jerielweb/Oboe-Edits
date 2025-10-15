import contactData from './../content/contact.content.js'


export function Contact () {
    return (
        <div>
            {contactData.map((contact, index) =>
                <article key={index}>
                    <div>
                        <h2>{contact.name}</h2>
                    </div>
                    <div>
                        <a href={contact.number}>WhatSapp</a>
                    </div>
                </article>
            )}
        </div>
    )
}
export default Contact