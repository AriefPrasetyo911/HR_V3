"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailController = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("./email.service");
let EmailController = class EmailController {
    constructor(emailService) {
        this.emailService = emailService;
    }
    async sendEmail(to, subject, text, html) {
        return await this.emailService.sendMail(to, subject, text, html);
    }
};
exports.EmailController = EmailController;
__decorate([
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)('to')),
    __param(1, (0, common_1.Body)('subject')),
    __param(2, (0, common_1.Body)('text')),
    __param(3, (0, common_1.Body)('html')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendEmail", null);
exports.EmailController = EmailController = __decorate([
    (0, common_1.Controller)('notification/email'),
    __metadata("design:paramtypes", [email_service_1.EmailService])
], EmailController);
