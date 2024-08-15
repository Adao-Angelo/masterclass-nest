import { PrismaService } from 'src/database/prisma.service';
import { RocketMemberRepository } from '../rocket-member-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRocketMemberRepository implements RocketMemberRepository {
  constructor(private prisma: PrismaService) {}
  async create(name: string, memberFunction: string): Promise<void> {
    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });
  }
}
