import { ApiServiceBase } from './base/apiServiceBase';

export class OrigamiApiService extends ApiServiceBase {
    public constructor() {
        super();
    }

    public async changePassword(newPassword: string): Promise<void> {
        await this.apiCall(async (client) => await client
            .url('/user/changePassword')
            .post()
            .res());
    }
}
