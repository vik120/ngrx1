
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EnvironmentConfig, ENV_CONFIG } from './envoirment-config';

@NgModule({
  imports: [
    CommonModule
  ],
})
export class HttpModule {
  static forRoot(config: EnvironmentConfig): ModuleWithProviders<any> {
    return {
      ngModule: HttpModule,
      providers: [
        {
          provide: ENV_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
