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
exports.SupervisorController = void 0;
const common_1 = require("@nestjs/common");
const supervisor_service_1 = require("./supervisor.service");
const create_supervisor_dto_1 = require("./dto/create-supervisor.dto");
const update_supervisor_dto_1 = require("./dto/update-supervisor.dto");
let SupervisorController = class SupervisorController {
    constructor(supervisorService) {
        this.supervisorService = supervisorService;
    }
    create(createSupervisorDto) {
        return this.supervisorService.create(createSupervisorDto);
    }
    findAll() {
        return this.supervisorService.findAll();
    }
    findOne(id) {
        return this.supervisorService.findOne(+id);
    }
    findOneByName(name) {
        return this.supervisorService.findOneByName(name);
    }
    update(id, updateSupervisorDto) {
        return this.supervisorService.update(+id, updateSupervisorDto);
    }
    remove(id) {
        return this.supervisorService.remove(+id);
    }
};
exports.SupervisorController = SupervisorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_supervisor_dto_1.CreateSupervisorDto]),
    __metadata("design:returntype", void 0)
], SupervisorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SupervisorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SupervisorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SupervisorController.prototype, "findOneByName", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_supervisor_dto_1.UpdateSupervisorDto]),
    __metadata("design:returntype", void 0)
], SupervisorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SupervisorController.prototype, "remove", null);
exports.SupervisorController = SupervisorController = __decorate([
    (0, common_1.Controller)('supervisor'),
    __metadata("design:paramtypes", [supervisor_service_1.SupervisorService])
], SupervisorController);
