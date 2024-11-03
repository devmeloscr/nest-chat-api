import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateRoomBody } from '../dtos/create-room-body';

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
    if (await this.getRoomByName(name)) {
      throw new BadRequestException('Já existe uma sala com esse nome!');
    }
    return this.prisma.room.create({
      data: {
        name,
        description,
      },
    });
  }
}
