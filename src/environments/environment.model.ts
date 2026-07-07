import { LogLevel } from '@app/core/logging/logger.enum';

export interface Environment {
  production: boolean;
  enableLogging: boolean;
  logLevel: LogLevel;
}
