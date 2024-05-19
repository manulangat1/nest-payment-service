import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppconfigModule } from './appconfig/appconfig.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [AppconfigModule, StripeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
