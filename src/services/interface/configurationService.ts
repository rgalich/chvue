export interface ConfigurationService {
    readonly apiEndpoint: string;

    readonly apiCallTimeout: number;

    readonly version: string;

    readonly env: string;
}
