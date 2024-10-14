const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // Load environment variables

// Create the app
const app = express();
const port = process.env.PORT || 3000;  // Dynamic port for Heroku

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASSWORD,
    },
});

// Route to handle the email
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'oswaldphiri361@gmail.com',  // Replace with your email address
    subject: `Contact form submission from ${name}`,
    text: `You received a message from:
      Name: ${name}
      Email: ${email}
      Message: ${message}

      You can see more of my work at https://oswaldportfolio.vercel.app/`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send({ message: 'An error occurred while sending your message. Please try again later.' });
    }
    console.log('Email sent: ' + info.response);
    res.send({ message: 'Email sent successfully!' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
