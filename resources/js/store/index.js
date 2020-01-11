import Vue from 'vue';
import Vuex from 'vuex';
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // State of application
    },

    mutations: {
        // Change of state
    },

    actions: {
        // Api calls and commit a mutations
    },

    modules: {
        auth
    }
});
