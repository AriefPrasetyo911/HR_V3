import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';

@Controller('notification/email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(
    @Body('to') to: string,
    @Body('subject') subject: string,
    @Body('text') text: string,
    @Body('html') html?: string,
  ) {
    return await this.emailService.sendMail(to, subject, text, html);
  }
  // async sendEmail(@Body() body) {
  //   const { to, subject, text, html } = body;
  //   return this.emailService.sendEmail(to, subject, text, html);
  // }
  // @Post()
  // create(@Body() createEmailDto: CreateEmailDto) {
  //   return this.emailService.create(createEmailDto);
  // }

  // @Get()
  // findAll() {
  //   return this.emailService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.emailService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmailDto: UpdateEmailDto) {
  //   return this.emailService.update(+id, updateEmailDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.emailService.remove(+id);
  // }
}