import { ApiServiceBase } from './base/apiServiceBase';
import { IngredientModel } from '@/models/ingredientModel';

export class IngredientService extends ApiServiceBase {
    public constructor() {
        super();
    }

    public async createIngredient(ingredient: IngredientModel): Promise<number> {
        const response = await this.apiCall(async (client) => await client
                .url('ingredient')
                .body(ingredient)
                .post()
                .text());

        return +response;
    }
}
