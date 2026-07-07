import { LogLevel } from '@app/core/logging/logger.enum';
import { Environment } from './environment.model';

export const environment: Environment = {
  production: true,
  enableLogging: false,
  logLevel: LogLevel.ERROR,
};
