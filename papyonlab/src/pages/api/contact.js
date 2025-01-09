import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT, 10),
        secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        // IPv6 yerine IPv4'ü zorla
        connectionTimeout: 5000,
        greetingTimeout: 5000,
        socketTimeout: 5000,
      });

    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Gönderici
      to: process.env.EMAIL_USER, // Alıcı
      subject: 'New Contact Message',
      text: message,
      html: `<p>${message}</p>`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    // Hata mesajını konsola yazdır
    console.error('Error sending email:', error);

    // API istemcisine hata yanıtı döndür
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
