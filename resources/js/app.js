/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue';
import router from '@/js/routes'
import VueAxios from "vue-axios";
import axios from "axios";

import Vuelidate from 'vuelidate'
import VueEvents from 'vue-events'
import wysiwyg from "vue-wysiwyg";
import "vue-wysiwyg/dist/vueWysiwyg.css";
import urlBase from "@/js/url";

import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(Element, {
    locale,
    size: 'small',
    zIndex: 3000
});

Vue.config.ignoredElements = [/^ion-/]

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(wysiwyg, {
    image: {
        uploadURL: urlBase.web + "/MasterberitaUploadIsi" + "?_token=" + document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        dropzoneOptions: {}
      },
});
Vue.use(VueEvents)
Vue.use(VueAxios, axios)
Vue.use(Vuelidate)
const app = new Vue({
    el: '#app',
    router: router,
});
