"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSupervisorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_supervisor_dto_1 = require("./create-supervisor.dto");
class UpdateSupervisorDto extends (0, swagger_1.PartialType)(create_supervisor_dto_1.CreateSupervisorDto) {
}
exports.UpdateSupervisorDto = UpdateSupervisorDto;
