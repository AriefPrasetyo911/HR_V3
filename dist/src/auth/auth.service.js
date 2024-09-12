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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt_1 = require("bcrypt");
const jwt_config_1 = require("./jwt/jwt.config");
const lodash_1 = require("lodash");
let AuthService = class AuthService {
    constructor(jwtService, dbService) {
        this.jwtService = jwtService;
        this.dbService = dbService;
        this.tokenData = [];
    }
    async register(data) {
        let user = await this.dbService.user.findFirst({
            where: {
                email: data.email
            }
        });
        if (user) {
            throw new common_1.HttpException('User Exists', common_1.HttpStatus.BAD_REQUEST);
        }
        let createUser = await this.dbService.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                role: {
                    connect: {
                        id: data.role
                    }
                }
            }
        });
        if (createUser) {
            return {
                statusCode: 200,
                message: 'Register success',
            };
        }
        throw new common_1.HttpException('Bad request', common_1.HttpStatus.BAD_REQUEST);
    }
    async login(dto) {
        let user = await this.dbService.user.findFirst({
            where: {
                email: dto.email
            }
        });
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        let checkPassword = await (0, bcrypt_1.compare)(dto.password, user.password);
        if (!checkPassword) {
            throw new common_1.HttpException('Credential Incorrect', common_1.HttpStatus.UNAUTHORIZED);
        }
        return await this.generateJwt(user.id, user.email, user, user.roleId, jwt_config_1.JwtConfig.user_secret, jwt_config_1.JwtConfig.user_expired);
    }
    async generateJwt(userId, email, user, role, secret, expired = jwt_config_1.JwtConfig.user_expired) {
        this.accessToken = await this.jwtService.sign({
            sub: userId,
            email,
            name: user.name,
            role: role
        }, {
            expiresIn: expired,
            secret
        });
        this.checkIsTokenExpired(this.accessToken);
        this.tokenData.push(this.accessToken);
        return {
            message: 'Login Success',
            statusCode: 200,
            user: (0, lodash_1.omit)(user, ['password', 'created_at', 'updated_at'])
        };
    }
    async checkIsTokenExpired(token) {
        if (token == undefined) {
            this.tokenData.pop();
            console.log('token expired');
        }
        else {
            this.existingToken = token;
        }
    }
    async getJwtAccessToken() {
        if (this.tokenData.length == 0 || this.existingToken == undefined) {
            return 'token not found';
        }
        let buildData = {
            data_token: this.existingToken
        };
        return JSON.stringify(buildData);
    }
    async getCurrentUserData() {
        if (this.existingToken == undefined) {
            return 'token not found';
        }
        let base64URL = this.existingToken.split('.')[1];
        let base64 = base64URL.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
    async findUserByEmail(email) {
        return this.dbService.user.findUnique({
            where: {
                email
            },
            include: {
                role: true
            }
        });
    }
    async findUserById(id) {
        return this.dbService.user.findUnique({
            where: {
                id
            },
            include: {
                role: true
            }
        });
    }
    async getAllUser() {
        return this.dbService.user.findMany({
            include: {
                role: true
            }
        });
    }
    async removeUser(id) {
        return this.dbService.user.delete({
            where: {
                id
            }
        });
    }
    async updateRole(id, data) {
        return this.dbService.user.update({
            where: {
                id
            },
            data: data
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService])
], AuthService);
