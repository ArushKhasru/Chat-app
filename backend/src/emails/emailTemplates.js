export const createwelcomeEmail=(name, clientURL)=>{
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px;">
    <tr>
      <td align="center">
        
        <!-- Main Container -->
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff; border-radius:8px; overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#4f46e5; padding:20px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:24px;">
                Welcome to Chatily🎉
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px; color:#333333;">
              <p style="font-size:16px; margin:0 0 15px 0;">
                Hi <strong>${name}</strong>,
              </p>

              <p style="font-size:15px; line-height:1.6; margin:0 0 20px 0;">
                We’re excited to have you on board! Your account has been successfully created.
                You can now start chatting, connecting, and exploring all the features we offer.
              </p>

              <!-- Button -->
              <div style="text-align:center; margin:30px 0;">
                <a href="${clientURL}"
                   style="background-color:#4f46e5; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-size:16px; display:inline-block;">
                  Get Started
                </a>
              </div>

              <p style="font-size:14px; color:#555555; margin:0;">
                If you have any questions, feel free to reply to this email.
              </p>

              <p style="font-size:14px; color:#555555; margin-top:20px;">
                Cheers,<br/>
                <strong>Chatily Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f4f6f8; padding:15px; text-align:center; font-size:12px; color:#888888;">
              © ${new Date().getFullYear()} Chat App. All rights reserved.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`
}