import { resendClient, sender} from "../lib/resend.js";
import { createwelcomeEmail } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
    const {data, error} = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject: "Welcome to Chatily!",
        html: createwelcomeEmail(name, clientURL),
    })
    if(error){
        console.log("Error sending welcome email:", error);
        throw new Error("Failed to send welcome email")
    }
    else{
        console.log("Welcome email sent sucessfully:", data);
    }
};