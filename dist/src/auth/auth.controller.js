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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const transform_password_pipe_1 = require("./pipes/transform-password/transform-password.pipe");
const login_auth_dto_1 = require("./dto/login-auth.dto");
const jwt_auth_guard_1 = require("./guards/jwt-auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const nest_access_control_1 = require("nest-access-control");
let AuthController = class AuthController {
    constructor(authService, rolesBuilder) {
        this.authService = authService;
        this.rolesBuilder = rolesBuilder;
    }
    async register(userData) {
        return await this.authService.register(userData);
    }
    async login(dto) {
        return await this.authService.login(dto);
    }
    async profile() {
        return {
            message: "Profile"
        };
    }
    async getAccessToken() {
        return await this.authService.getJwtAccessToken();
    }
    async getCurrentUser() {
        return await this.authService.getCurrentUserData();
    }
    async findAll() {
        return await this.authService.getAllUser();
    }
    async findOne(id) {
        return await this.authService.findUserById(Number(id));
    }
    async remove(id) {
        return await this.authService.removeUser(Number(id));
    }
    async updateRole(id, data) {
        return await this.authService.updateRole(Number(id), data);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe, transform_password_pipe_1.TransformPasswordPipe),
    (0, common_1.HttpCode)(200),
    (0, nest_access_control_1.UseRoles)({
        possession: 'any',
        action: 'create',
        resource: 'user'
    }),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_auth_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('profile'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "profile", null);
__decorate([
    (0, common_1.Get)('access-token'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAccessToken", null);
__decorate([
    (0, common_1.Get)('current-user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getCurrentUser", null);
__decorate([
    (0, common_1.Get)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, nest_access_control_1.ACGuard),
    (0, nest_access_control_1.UseRoles)({
        possession: 'own',
        action: 'read',
        resource: 'user'
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, nest_access_control_1.ACGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)('role/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateRole", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __param(1, (0, nest_access_control_1.InjectRolesBuilder)()),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        nest_access_control_1.RolesBuilder])
], AuthController);
