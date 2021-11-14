import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { GlobalEntitiesModule } from './global-entities/global-entities.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ConfigModule.forRoot(), UsersModule, GlobalEntitiesModule],
  providers: [],
})
export class AppModule {}
