import { AbstractEnvSelect } from '@jswork/env-select';

export default class Env extends AbstractEnvSelect {
  /**
   * Auto select env by current url.
   * @returns {string} The target env string.
   */
  static select(): string {
    return window.location.hostname.includes('/production/') ? 'production' : 'beta';
  }
}
