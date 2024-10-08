import { Module } from '@nestjs/common';
import { SupervisorService } from './supervisor.service';
import { SupervisorController } from './supervisor.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SupervisorController],
  providers: [SupervisorService],
  exports: [SupervisorService],
})
export class SupervisorModule {}
