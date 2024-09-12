"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupervisorService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let SupervisorService = class SupervisorService {
    async create(createSupervisorDto) {
        const createData = await prisma.supervisor.create({
            data: createSupervisorDto
        });
        return {
            statusCode: 200,
            message: 'Success Register New Supervisor',
            data: createData
        };
    }
    async findAll() {
        return await prisma.supervisor.findMany();
    }
    findOne(id) {
        let supervisorData = prisma.supervisor.findUnique({
            where: {
                id
            }
        });
        return supervisorData;
    }
    findOneByName(name) {
        let supervisorDetailData = prisma.supervisor.findFirst({
            where: {
                name: name
            }
        });
        return supervisorDetailData;
    }
    update(id, updateSupervisorDto) {
        return `This action updates a #${id} supervisor`;
    }
    async remove(id) {
        return await prisma.supervisor.delete({
            where: {
                id
            }
        });
    }
};
exports.SupervisorService = SupervisorService;
exports.SupervisorService = SupervisorService = __decorate([
    (0, common_1.Injectable)()
], SupervisorService);
