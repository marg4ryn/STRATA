import { LogLevel } from '@core/logging/logger.types';
import { Environment } from './environment.types';

export const environment: Environment = {
  production: true,
  enableLogging: false,
  logLevel: LogLevel.ERROR,
};
