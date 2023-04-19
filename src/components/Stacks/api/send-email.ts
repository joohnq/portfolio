const nodemailer = require("nodemailer");
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
};

type MailData = {
  to: string;
  from: string;
  subject: string;
  text: string;
};

export default function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {

    
}
