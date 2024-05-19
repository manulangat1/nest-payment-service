import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class EnvironmentDTO {
  @IsString()
  @IsNotEmpty()
  @Expose()
  PORT: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  ENVIRONMENT: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  STRIPE_API_KEY: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  STRIPE_SECRET_KEY: string;
}
