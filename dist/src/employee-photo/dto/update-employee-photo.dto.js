"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmployeePhotoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_employee_photo_dto_1 = require("./create-employee-photo.dto");
class UpdateEmployeePhotoDto extends (0, swagger_1.PartialType)(create_employee_photo_dto_1.CreateEmployeePhotoDto) {
}
exports.UpdateEmployeePhotoDto = UpdateEmployeePhotoDto;
