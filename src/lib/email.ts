import nodemailer from "nodemailer";

const getTransporter = () => {
  if (!process.env.SPACEMAIL_EMAIL || !process.env.SPACEMAIL_PASSWORD) {
    throw new Error("Missing Spacemail credentials in environment variables");
  }
  return nodemailer.createTransport({
    host: "mail.spacemail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SPACEMAIL_EMAIL,
      pass: process.env.SPACEMAIL_PASSWORD,
    },
  });
};

export const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"SkyGear Contact Form" <${process.env.SPACEMAIL_EMAIL}>`,
    to: process.env.SPACEMAIL_EMAIL, // Send to the admin
    replyTo: email, // Allow admin to reply directly to the user
    subject: `New Contact Request: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p style="white-space: pre-wrap;">${message}</p>
    `,
  });

  // Send confirmation to the customer
  await transporter.sendMail({
    from: `"SkyGear Support" <${process.env.SPACEMAIL_EMAIL}>`,
    to: email,
    subject: `We've received your message: ${subject}`,
    text: `Hi ${name},\n\nWe have received your information and our support team will get back to you shortly.\n\nThank you,\nThe SkyGear Team`,
    html: `
      <p>Hi ${name},</p>
      <p>We have received your information and our support team will get back to you shortly.</p>
      <p>Thank you,<br/>The SkyGear Team</p>
    `,
  });
};

export const sendCheckoutEmail = async ({
  orderId,
  customerEmail,
  customerName,
  total,
}: {
  orderId: string;
  customerEmail: string;
  customerName: string;
  total: number;
}) => {
  const transporter = getTransporter();

  // Send email to admin
  await transporter.sendMail({
    from: `"SkyGear Orders" <${process.env.SPACEMAIL_EMAIL}>`,
    to: process.env.SPACEMAIL_EMAIL,
    subject: `New Order Received: #${orderId}`,
    text: `A new order has been placed.\n\nOrder ID: ${orderId}\nCustomer: ${customerName} (${customerEmail})\nTotal: $${total.toFixed(2)}`,
    html: `
      <h2>New Order Received</h2>
      <p><strong>Order ID:</strong> #${orderId}</p>
      <p><strong>Customer:</strong> ${customerName} (${customerEmail})</p>
      <p><strong>Total:</strong> $${total.toFixed(2)}</p>
    `,
  });

  // Send confirmation to the customer
  await transporter.sendMail({
    from: `"SkyGear Orders" <${process.env.SPACEMAIL_EMAIL}>`,
    to: customerEmail,
    subject: `Order Confirmation: #${orderId}`,
    text: `Hi ${customerName},\n\nThank you for your order! Your order will be processed and support is going to get back to you shortly with shipping details.\n\nOrder ID: #${orderId}\nTotal: $${total.toFixed(2)}\n\nThank you,\nThe SkyGear Team`,
    html: `
      <p>Hi ${customerName},</p>
      <p>Thank you for your order! Your order will be processed and support is going to get back to you shortly with shipping details.</p>
      <p><strong>Order ID:</strong> #${orderId}</p>
      <p><strong>Total:</strong> $${total.toFixed(2)}</p>
      <p>Thank you,<br/>The SkyGear Team</p>
    `,
  });
};
