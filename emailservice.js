import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';

const mailgunAPIKey = '096045e10040036758df5d92e03b3e85-ac3d5f74-02b191d2';  // Mailgun API anahtarınız
const domain = 'sandbox2baebbcd90c140fdb077016f16ccea6a.mailgun.org'; // Sandbox domaininiz
const recipient = 'anindateslimkurye@gmail.com'; // E-posta alıcı adresi, bu adresin onaylı olması gerekir.

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors()); // CORS'u burada ekliyoruz

// E-posta gönderme endpoint'i
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const sendEmail = async () => {
    try {
      const response = await axios.post(
        `https://api.mailgun.net/v3/${domain}/messages`,
        new URLSearchParams({
          from: 'mailgun@sandbox2baebbcd90c140fdb077016f16ccea6a.mailgun.org',  // Gönderen adres
          to: recipient,  // Alıcı adresi
          subject: ' E-posta Başlığı',
          text: `İsim: ${name}\nE-posta: ${email}\nMesaj: ${message}`
        }),
        {
          auth: {
            username: 'api',
            password: mailgunAPIKey // API anahtarınızı buraya ekleyin
          }
        }
      );
      console.log('E-posta başarıyla gönderildi:', response.data);
      res.status(200).json({ message: 'E-posta başarıyla gönderildi!' });
    } catch (error) {
      console.error('E-posta gönderim hatası:', error);
      res.status(500).json({ error: 'E-posta gönderimi başarısız oldu' });
    }
  };

  sendEmail();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
