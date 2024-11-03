import { Test, TestingModule } from '@nestjs/testing';
import { RoomController } from './controllers/room.controller';
import { PrismaService } from './database/prisma.service';
import { RoomService } from './services/room.service';
import { BadRequestException } from '@nestjs/common';
import { CreateRoomBody } from './dtos/create-room-body';

describe('RoomController', () => {
  let roomController: RoomController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RoomController],
      providers: [PrismaService, RoomService],
    }).compile();

    roomController = app.get<RoomController>(RoomController);
  });

  describe('Room creation', () => {
    let mockCreateRoomBody: CreateRoomBody = {
      name: 'mock-name',
      description: 'mock-description',
    };
    beforeAll(async () => {
      const randomName = Math.random().toString(36).substring(7);
      mockCreateRoomBody = {
        name: randomName,
        description: 'mock-description',
      };
    });
    it('should create a room', async () => {
      const response = await roomController.createRoom(mockCreateRoomBody);
      expect(response).toEqual({
        id: expect.any(Number),
        name: mockCreateRoomBody.name,
        description: mockCreateRoomBody.description,
      });
    });
    it('should throw error if room exists', async () => {
      await expect(
        roomController.createRoom(mockCreateRoomBody),
      ).rejects.toThrow(
        new BadRequestException('Já existe uma sala com esse nome!'),
      );
    });
  });
});
