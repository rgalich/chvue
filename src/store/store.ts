import Vue from 'vue';
import Vuex from 'vuex';
import ingredient from './modules/ingredient';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    ingredient,
  },
});
