import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getPaymentIntent(): Promise<any> {
    return this.stripeService.paymentIntent();
  }

  // @HttpCode(HttpStatus.CREATED)
  // @Post()
  // checkout ()
}
