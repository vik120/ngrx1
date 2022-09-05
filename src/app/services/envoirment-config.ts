import { InjectionToken } from '@angular/core';

export interface EnvironmentConfig {
  environment: {
    BASE_URL: string;
  };
}

export const ENV_CONFIG = new InjectionToken<EnvironmentConfig>('EnvironmentConfig');
