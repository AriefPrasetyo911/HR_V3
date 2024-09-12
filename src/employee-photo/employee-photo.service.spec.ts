import { Test, TestingModule } from '@nestjs/testing';
import { EmployeePhotoService } from './employee-photo.service';

describe('EmployeePhotoService', () => {
  let service: EmployeePhotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeePhotoService],
    }).compile();

    service = module.get<EmployeePhotoService>(EmployeePhotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
