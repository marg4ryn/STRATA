import { LogLevel } from '@core/logging/logger.types';

export interface Environment {
  production: boolean;
  enableLogging: boolean;
  logLevel: LogLevel;
}
