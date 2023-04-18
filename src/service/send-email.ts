import type { NextApiRequest, NextApiResponse } from 'next';
import mailjet from 'node-mailjet';

type Data = {
  success: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill all fields.',
      });
    }

    const mailjetClient = mailjet.connect(
      process.env.MJ_APIKEY_PUBLIC!,
      process.env.MJ_APIKEY_PRIVATE!
    );

    const request = mailjetClient.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MJ_SENDER_EMAIL!,
            Name: process.env.MJ_SENDER_NAME!,
          },
          To: [
            {
              Email: process.env.MJ_RECIPIENT_EMAIL!,
            },
          ],
          Subject: subject,
          TextPart: message,
          HTMLPart: `<p>${message}</p>`,
        },
      ],
    });

    try {
      await request;
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Server error.' });
    }
  }

  return res.status(404).json({ success: false, error: 'Not found.' });
}
