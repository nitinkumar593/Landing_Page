import emailjs from '@emailjs/browser';
import config from "./config"
import axios from "axios";
import { toast } from 'sonner';


export default async function sendEmail(e, form) {
    e.preventDefault();

    // connect backend logic 
    const formData = new FormData(form.current);

    const data = Object.fromEntries(formData.entries());

    try {
        const response = await axios.post(
            "http://localhost:8080/signup",
            data,
        );
        console.log("Registration success");

        //    email sending code
        const emailResponse = await emailjs
            .sendForm(config.serviceId, config.templateId, form.current, {
                publicKey: config.publicKey,
            });

        console.log("Email sent successfully");

        // reset after success
        toast.success("Registration successful !")
        form.current.reset();

    } catch (error) {
        toast.error(
            error.response?.data?.message || "Registration failed!"
        )
        console.log("Registration failed")
    }
}