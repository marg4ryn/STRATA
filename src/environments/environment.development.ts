import { LogLevel } from '@app/core/logging/logger.enum';
import { Environment } from './environment.model';

export const environment: Environment = {
  production: false,
  enableLogging: true,
  logLevel: LogLevel.DEBUG,
};
