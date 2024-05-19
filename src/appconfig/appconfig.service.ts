import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentDTO } from './dto/environment.dto';

@Injectable()
export class AppconfigService {
  constructor(private configService: ConfigService<EnvironmentDTO>) {}

  get port(): string {
    return this.configService.getOrThrow<string>('PORT');
  }

  get environment(): string {
    return this.configService.getOrThrow<string>('ENVIRONMENT');
  }

  STRIPE_CONFIG = {
    apiKey: this.configService.getOrThrow('STRIPE_API_KEY'),
    secretKey: this.configService.getOrThrow('STRIPE_SECRET_KEY'),
  };
}
