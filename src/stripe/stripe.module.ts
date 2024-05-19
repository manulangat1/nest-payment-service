import { Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { StripeController } from './stripe.controller';
import { AppconfigModule } from '../appconfig/appconfig.module';

@Module({
  imports: [AppconfigModule],
  controllers: [StripeController],
  providers: [StripeService],
})
export class StripeModule {}
