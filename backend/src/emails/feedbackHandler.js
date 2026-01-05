import { resendClient, sender } from "../lib/resend.js";
import { createFeedbackEmail } from "../emails/feedbackForm.js";

export const sendFeedbackEmail = async ({
  userName,
  userEmail,
  rating,
  category,
  message
}) => {
  const { data, error } = await resendClient.emails.send({
    from: `${userName} <${userEmail}>`,
    to: process.env.DEV_EMAIL,
    subject: "📩 New User Feedback - Bakbac",
    html: createFeedbackEmail({
      userName,
      userEmail,
      rating,
      category,
      message
    }),
  });

  if (error) {
    console.error("Error sending feedback email:", error);
  } else {
    console.log("Feedback email sent successfully:", data);
  }
};
