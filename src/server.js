const express = require('express');
const nodemailer = require('nodemailer');
const app = express();



app.use(express.json());

app.post('/api/contact', async (req, res) => {
	try {
		const { name, email, message } = req.body;

		// Create a transporter object to send email
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'your-email@gmail.com',
				pass: 'your-email-password',
			},
		});

		// Set up email options
		const mailOptions = {
			from: 'your-email@gmail.com',
			to: 'joagon85@gmail.com',
			subject: 'New message from your website',
			html: `
            <p>You have a new message from your website:</p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `,
		};

		// Send email
		await transporter.sendMail(mailOptions);

		// Send response to frontend
		res.status(200).send('Email sent successfully!');
	} catch (error) {
		console.error(error);
		res.status(500).send('Failed to send email.');
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
