import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateMemberBody } from './dtos/create-member-body';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}
  @Post('user')
  async getUser(@Body() body: CreateMemberBody) {
    const { name, memberFunction } = body;

    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });
    return member;
  }
}
