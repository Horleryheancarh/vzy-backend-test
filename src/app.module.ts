import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './api/auth/auth.module';
import { AccountModule } from './api/account/account.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './api/auth/jwt.auth.guard';

@Module({
  imports: [DatabaseModule, AuthModule, AccountModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
