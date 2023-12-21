import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from './news/news.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
