import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMemberBody } from './dtos/create-member-body';
import { RocketMemberRepository } from './repositories/rocket-member-repository';

@Controller('app')
export class AppController {
  constructor(private rocketMemberRepository: RocketMemberRepository) {}
  @Post('user')
  async getUser(@Body() body: CreateMemberBody) {
    const { name, memberFunction } = body;

    await this.rocketMemberRepository.create(name, memberFunction);
  }
}
