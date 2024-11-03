import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomService } from './services/room.service';
import { PrismaService } from './database/prisma.service';
import { RoomController } from './controllers/room.controller';

@Module({
  imports: [],
  controllers: [AppController, RoomController],
  providers: [AppService, RoomService, PrismaService],
})
export class AppModule {}
