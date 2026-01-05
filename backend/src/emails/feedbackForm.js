export const createFeedbackEmail = ({
  userName,
  userEmail,
  rating,
  category,
  message
}) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>📩 New Feedback Received</h2>

      <p><strong>User:</strong> ${userName}</p>
      <p><strong>Email:</strong> ${userEmail}</p>
      <p><strong>Rating:</strong> ${rating} ⭐</p>
      <p><strong>Category:</strong> ${category}</p>

      <p><strong>Message:</strong></p>
      <p style="background:#f4f4f4;padding:10px;border-radius:6px;">
        ${message || "No message provided"}
      </p>

      <hr />
      <small>Bakbac Feedback System</small>
    </div>
  `;
};
