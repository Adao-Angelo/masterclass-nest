import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma.service';
import { RocketMemberRepository } from './repositories/rocket-member-repository';
import { PrismaRocketMemberRepository } from './repositories/prisma/prisma-rocket-member-repository';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: RocketMemberRepository,
      useClass: PrismaRocketMemberRepository,
    },
  ],
})
export class AppModule {}
