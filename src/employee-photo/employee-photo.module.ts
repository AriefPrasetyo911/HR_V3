import { Module } from '@nestjs/common';
import { EmployeePhotoService } from './employee-photo.service';
import { EmployeePhotoController } from './employee-photo.controller';
import { MulterModule } from '@nestjs/platform-express';
import { extname, join } from 'path';
import { diskStorage } from 'multer';

const uploadDir = join(process.cwd(), 'uploads/employee_photo');
@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, uploadDir)
        },
        filename: (req, file, cb) => {
          const name = file.originalname.split('.')[0];
          const ext = extname(file.originalname);
          const filename = `${name}${ext}`;
          cb(null, filename)
        }
      }),
      fileFilter(req, file, callback) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
          return callback(new Error('Only image files are allowed!'), false);
        }
        callback(null, true);
      },
    }),
  ],
  controllers: [EmployeePhotoController],
  providers: [EmployeePhotoService],
})
export class EmployeePhotoModule {}


// const storage = diskStorage({
//   destination: './uploads/employee_photo',
//   filename(req, file, callback) {
//       const name = file.originalname.split('.')[0];
//       const fileExt = extname(file.originalname);
//       // const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
//       callback(null, `${name}${fileExt}`)
//   },
// })