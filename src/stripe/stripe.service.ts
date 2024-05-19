import { Injectable, Logger } from '@nestjs/common';
import Stripe from 'stripe';
import { AppconfigService } from '../appconfig/appconfig.service';
@Injectable()
export class StripeService {
  private stripe;
  private logger = new Logger('stripe service');

  constructor(private appConfigService: AppconfigService) {
    this.stripe = new Stripe(appConfigService.STRIPE_CONFIG.secretKey, {
      apiVersion: '2024-04-10',
    });
    // this.logger = new Logger('stripe service  ');
  }

  async paymentIntent(): Promise<any> {
    // console.log(this.stripe);
    this.logger.log(`Logs retrieved successfully`);
    return this.stripe.paymentIntents.create({
      amount: 100,
      currency: 'usd',
      payment_method_types: ['card'],
    });
  }

  // TODO: there should be no data stored in this service, just it initiates and does the payment configs
}
