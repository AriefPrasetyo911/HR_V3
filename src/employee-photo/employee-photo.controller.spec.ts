import { Test, TestingModule } from '@nestjs/testing';
import { EmployeePhotoController } from './employee-photo.controller';
import { EmployeePhotoService } from './employee-photo.service';

describe('EmployeePhotoController', () => {
  let controller: EmployeePhotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeePhotoController],
      providers: [EmployeePhotoService],
    }).compile();

    controller = module.get<EmployeePhotoController>(EmployeePhotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
