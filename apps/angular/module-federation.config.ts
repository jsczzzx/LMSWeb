import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'angular',
  exposes: {
    './Routes': 'apps/angular/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
