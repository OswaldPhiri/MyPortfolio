const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create the app
const app = express();
const port = 3000; // You can change the port if needed

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Load environment variables (replace with actual setup for your environment)
require('dotenv').config();

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'oswaldphiri361@gmail.com',  // Replace with your email
      pass: 'cehr gsjm tfvi ouaa',  // Replace with your app-specific password
    },
  });
  

// Route to handle the email
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'oswaldphiri361@gmail.com', 
    subject: `Contact form submission from ${name}`,
    text: `You received a message from:
      Name: ${name}
      Email: ${email}
      Message: ${message}

      You can see more of my work at https://oswaldportfolio.vercel.app/ `,
  };

  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      // Provide a more specific error message based on the type of error
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