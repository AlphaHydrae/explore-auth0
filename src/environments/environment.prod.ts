import * as env from './env.json';
import { Environment } from './types';

export const environment: Environment = {
  ...env,
  production: true
};
