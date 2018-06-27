
import wretch from 'wretch';
import { Wretcher } from 'wretch/dist/wretcher';
import { VueConfigurationService } from '../configurationService';
import { ConfigurationService } from '../interface/configurationService';

export abstract class ApiServiceBase {

    private configurationService: ConfigurationService = new VueConfigurationService();

    private apiEndpoint!: string;

    protected constructor() {
        this.apiEndpoint = this.configurationService.apiEndpoint;
    }

    protected getDefaultHeaders(): {[headerName: string]: any} {
        return {
            'Accept-Encoding': 'gzip,deflate',
        };
    }

    protected async createClient(baseEndpoint: string): Promise<Wretcher> {

        const callChain: Wretcher = wretch()
            .url(baseEndpoint)
            .headers(this.getDefaultHeaders());


        return callChain;
    }

    protected async apiCall<TResult>(call: (wretcher: Wretcher) => Promise<TResult>): Promise<TResult> {
        const response = await call(await this.createClient(this.apiEndpoint));

        return response;
    }
}
