import emailjs from '@emailjs/browser';
import config from "./config"

export default function sendEmail(e, form) {
    e.preventDefault();

    emailjs
        .sendForm(config.serviceId, config.templateId, form.current, {
            publicKey: config.publicKey,
        })
        .then(
            () => {
                console.log('SUCCESS!');
                form.current.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
}