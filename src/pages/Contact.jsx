import contactData from './../content/contact.content.js'
import contactStyle from './../Styles/contact.module.css'

// ICONS
import Chat from './../components/Chat.Icons'
import Telegram from './../components/Telegram.Icon'
import WhatsApp from './../components/WhatsApp.icon'
import Mail from './../components/Mail.Icon'
import Messenger from '../components/Messenger.Icon'
import Instagram from './../components/Instagram.Icon'
import Tiktok from '../components/TikTok.Icon'
import Facebook from '../components/Facebook.Icon'
import Linkedin from '../components/Linkedin.Icon'
import X from '../components/X.Icon'

const EnlaceIcono = ({ href, IconoComponente }) => {
    if (!href) {
        return null;
    }
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={`${IconoComponente.name || 'enlace'}`}
        >
            <IconoComponente />
        </a>
    );
};
export function Contact () {
    return (
        <div className={contactStyle.ContactContent}>
            <div>
                {contactData.map((contact, index) => {
                    const contactLinks = [
                        { link: contact.number, Icon: WhatsApp },
                        { link: contact.number2, Icon: Telegram },
                        { link: contact.SMS, Icon: Chat },
                        { link: contact.Email, Icon: Mail },
                        { link: contact.messenger, Icon: Messenger },
                        { link: contact.ig, Icon: Instagram },
                        { link: contact.face, Icon: Facebook },
                        { link: contact.tt, Icon: Tiktok },
                        { link: contact.ld, Icon: Linkedin },
                        { link: contact.x, Icon: X }
                    ];
                    return (
                        <div key={index} className={contactStyle.ContactCard}>
                            <div>
                                <h2>{contact.name}</h2>
                            </div>
                            <div className={contactStyle.links}>
                                {contactLinks.map((item, linkIndex) => (
                                    <EnlaceIcono
                                        key={linkIndex}
                                        href={item.link}
                                        IconoComponente={item.Icon}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Contact