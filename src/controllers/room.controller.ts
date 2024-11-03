import { Body, Controller, Post } from '@nestjs/common';
import { CreateRoomBody } from 'src/dtos/create-room-body';
import { RoomService } from 'src/services/room.service';

@Controller()
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  createRoom(@Body() body: CreateRoomBody) {
    return this.roomService.createRoom(body);
  }
}
