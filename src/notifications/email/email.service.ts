import { Injectable, Logger } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import * as nodemailer from 'nodemailer';
import { IMailgunClient } from 'mailgun.js/Interfaces';
import Mailgun from 'mailgun.js';
import { ConfigService } from '@nestjs/config';
import * as sgMail from '@sendgrid/mail';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmailService {
  private transporter;
  private readonly logger = new Logger(EmailService.name);

  constructor(private configService: ConfigService,
    private dbService: PrismaService) {
    // Configure the Nodemailer transporter
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST'),
      port: this.configService.get<number>('SMTP_PORT'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: this.configService.get<string>('SMTP_USER'),
        pass: this.configService.get<string>('SMTP_PASS'),
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  async sendMail(to: string, subject: string, text: string, html?: string) {
    const fromEmail = this.configService.get<string>('FROM_EMAIL');

    const mailOptions = {
      from: `"Kaigangames HR System" <${fromEmail}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body (optional)
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      this.logger.log(`Email sent: ${info.messageId}`);
      return info;
    } catch (error) {
      this.logger.error(`Error sending email to ${to}`, error);
      throw error;
    }
  }
}
