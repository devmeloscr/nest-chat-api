import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateRoomBody } from 'src/dtos/create-room-body';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async getRoomByName(name: string) {
    return this.prisma.room.findUnique({
      where: { name },
    });
  }

  async createRoom(body: CreateRoomBody) {
    const { name, description } = body;
    try {
      return this.prisma.room.create({
        data: {
          name,
          description,
        },
      });
    } catch (error) {
      console.error('Ocorreu um problema ao tentar criar a sala!', error);
      throw new Error('Ocorreu um problema ao tentar criar a sala!');
    }
  }
}
