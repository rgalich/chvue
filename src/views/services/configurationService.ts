
import { ConfigurationService } from '../services/interface/configurationService';

export class VueConfigurationService implements ConfigurationService {
    public readonly apiEndpoint = this.getEnvProperty('API_ENDPOINT');

    public readonly apiCallTimeout = parseInt(this.getEnvProperty('API_TIMEOUT'), 10);

    public readonly version = this.getEnvProperty('VERSION');

    public readonly env = this.getEnvProperty('NODE_ENV');

    private getEnvProperty(key: string) {
        return process.env[key] || process.env['VUE_APP_' + key] || '';
    }
}