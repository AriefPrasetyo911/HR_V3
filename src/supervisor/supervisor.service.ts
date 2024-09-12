import { Injectable } from '@nestjs/common';
import { UpdateSupervisorDto } from './dto/update-supervisor.dto';
import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SupervisorService {  
  async create(createSupervisorDto: any) {
    const createData = await prisma.supervisor.create({
      data: createSupervisorDto
    });

    return {
      statusCode: 200,
      message: 'Success Register New Supervisor',
      data: createData
    }
  }

  async findAll() {
    return await prisma.supervisor.findMany();
  }

  findOne(id: number) {
    let supervisorData = prisma.supervisor.findUnique({
      where: {
        id
      }
    });

    return supervisorData;
  }

  findOneByName(name: string) {
    let supervisorDetailData = prisma.supervisor.findFirst({
      where: {
        name: name
      }
    });

    return supervisorDetailData;
  }

  update(id: number, updateSupervisorDto: UpdateSupervisorDto) {
    return `This action updates a #${id} supervisor`;
  }

  async remove(id: number) {
    return await prisma.supervisor.delete({
      where: {
        id
      }
    })
  }
}