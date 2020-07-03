import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import url from '@/js/url'
Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        url: url.web,
        console: null,
        breadcums: "rentalinaja.id"
    },
    mutations: {
        increment(state, data) {
            state.breadcums = data
        }
    },
    actions: {
        async increment({ commit }, data) {
            commit('increment', data)
        },
        async StoreDatabase({ commit }, data) {
            return axios
                .post(url.web + data.url, {
                    type: data.type
                })
                .then(r => {
                    return r.data;
                }
                );
        }
    }
});

