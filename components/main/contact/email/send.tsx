"use server";
import { defaultPostMail, defaultPrivateEmail } from "@/lib/consts";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY || "");

export async function sendEmail({
  fromName,
  fromEmail,
  subject,
  message,
  html,
}: {
  fromName: string;
  fromEmail: string;
  subject: string;
  message: string;
  html: string;
}): Promise<{ isSuccess: boolean }> {
  const msg: MailDataRequired = {
    from: defaultPostMail,
    to: defaultPrivateEmail,
    subject,
    text: message,
    html: html,
  };

  try {
    await sgMail.send(msg);
    return { isSuccess: true };
  } catch (error) {
    return { isSuccess: false };
  }
}
