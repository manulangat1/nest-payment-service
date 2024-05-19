import { Module } from '@nestjs/common';
import { AppconfigService } from './appconfig.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  providers: [AppconfigService],
  controllers: [],
  exports: [AppconfigService],
})
export class AppconfigModule {}
