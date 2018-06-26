import Wretch from 'wretch';
import { IngredientModel } from './../../models/ingredientModel';

const state = {
    all: [],
    ingredient: IngredientModel,
  };

const getters = {};

const actions = {
    getAllProducts(context: any) {
        const ingredients: IngredientModel[] = [];
        context.commit('setProducts', ingredients);
    },
};

const mutations = {
    // tslint:disable-next-line:no-shadowed-variable
    setProducts(state: any, ingredients: IngredientModel[]) {
      state.all = ingredients;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
