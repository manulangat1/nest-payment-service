import { plainToClass } from 'class-transformer';
import { validateSync, ValidationError } from 'class-validator';
import { EnvironmentDTO } from './dto/environment.dto';

/**
 * Validate all environment variables, and throw an error if any is missing
 *
 * @param config Object containing all provide environment variables
 * @returns list of validated env variables
 */
export const validate = (config: Record<string, any>): EnvironmentDTO => {
  const validatedConfig = plainToClass(EnvironmentDTO, config, {
    enableImplicitConversion: true, // Make sure the type is respected.
  });

  const validationError: ValidationError[] = validateSync(validatedConfig, {
    whitelist: true,
    forbidUnknownValues: true,
    forbidNonWhitelisted: true,
    skipMissingProperties: false,
  });

  if (validationError.length > 0) {
    const errors: Partial<EnvironmentDTO> = {};
    validationError.forEach(
      (error) => (errors[error.property] = error.constraints),
    );

    console.log(`❌❌ Failed environment variables =>`, errors);
    throw new Error(JSON.stringify(errors));
  }
  return validatedConfig;
};
