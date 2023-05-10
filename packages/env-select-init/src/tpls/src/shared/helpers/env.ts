import { AbstractEnvSelect } from '@jswork/env-select';

export class Env extends AbstractEnvSelect {
  /**
   * Auto select env by current url.
   * @returns {string} The target env string.
   */
  static select(): string {
    return location.hostname.includes('beta') ? 'beta' : 'production';
  }
}
