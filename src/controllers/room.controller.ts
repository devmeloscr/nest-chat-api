import { Body, Controller, Post } from '@nestjs/common';
import { CreateRoomBody } from '../dtos/create-room-body';
import { RoomService } from '../services/room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post('create')
  createRoom(@Body() body: CreateRoomBody) {
    return this.roomService.createRoom(body);
  }
}
