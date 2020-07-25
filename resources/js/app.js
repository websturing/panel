/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue';
import router from '@/js/routes'
import VueAxios from "vue-axios";
import axios from "axios";
import Store from "@/js/store";
import {
    Loading,
    Notification,
    Checkbox,
    Input,
    Switch,
    Select,
    Option,
    Form,
    FormItem,
    DatePicker,
    Col,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import wysiwyg from "vue-wysiwyg";
import "vue-wysiwyg/dist/vueWysiwyg.css";
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)



import Vuelidate from 'vuelidate'
import VueEvents from 'vue-events'



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(wysiwyg, {});
Vue.use(Loading);
Vue.use(Col);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Checkbox);
Vue.prototype.$notify = Notification;
Vue.use(VueEvents)
Vue.use(VueAxios, axios)
Vue.use(Vuelidate)
const app = new Vue({
    el: '#app',
    router: router,
    store: Store,
    mounted() {
        this.$store.dispatch('StoreModul/StoreUser');
    },
});
