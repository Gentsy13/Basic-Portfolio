# Email Setup Guide for Contact Form

Your contact form is now configured to send emails to **aj.lomocso@urios.edu.ph** using EmailJS.

## Setup Steps:

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail recommended)
3. If using Gmail:
   - Click on Gmail
   - Connect your Gmail account (aj.lomocso@urios.edu.ph)
   - Authorize EmailJS to send emails on your behalf
4. Copy your **Service ID** (looks like: `service_xxxxxxx`)

### 3. Create Email Template
1. Go to "Email Templates" in the EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

**Template Name:** Portfolio Contact Form

**Subject:**
```
New Contact: {{subject}}
```

**Body:**
```
You have received a new message from your portfolio website.

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. In the "To Email" field, enter: `{{to_email}}`
5. Save the template and copy your **Template ID** (looks like: `template_xxxxxxx`)

### 4. Get Your Public Key
1. Go to "Account" in the EmailJS dashboard
2. Find "API Keys" section
3. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxx`)

### 5. Update Your Code
Open `src/App.jsx` and replace these placeholders around line 55-57:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

### Example:
```javascript
const serviceId = 'service_abc1234';
const templateId = 'template_xyz5678';
const publicKey = 'sOmEr4nd0mPubl1cK3y';
```

## Testing:

1. Run your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact section
3. Fill out the form and click "Send Message"
4. You should receive an email at aj.lomocso@urios.edu.ph

## Free Tier Limits:
- 200 emails per month
- Perfect for a portfolio website

## Troubleshooting:

### Email not sending?
1. Check browser console for errors
2. Verify all IDs and keys are correct
3. Make sure your EmailJS account is verified
4. Check your spam folder for the email

### Need more emails per month?
Consider upgrading to EmailJS paid plan or implement a backend solution with Nodemailer.

## Alternative: Backend Solution

If you prefer a backend solution instead of EmailJS, you can:
1. Create a serverless function in Vercel
2. Use Nodemailer with your email provider
3. Set up environment variables for security

Let me know if you need help with the backend approach!
