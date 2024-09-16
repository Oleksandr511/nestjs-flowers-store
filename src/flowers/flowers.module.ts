import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { FlowersController } from './flowers.controller';
import { LoggerMiddleware } from 'src/conception/middleware';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [FlowersController],
  providers: [FlowersService, PrismaService, ConfigService],
  exports: [FlowersService],
})
export class FlowersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('flowers');
  }
}
