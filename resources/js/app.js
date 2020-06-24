import './bootstrap';
import Vue from 'vue';
import Routes from '@/js/routes.js';

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';

import { Button, Select } from 'element-ui';

Vue.use(Button)

const app = new Vue({
    el: '#app',
    router: Routes,
    data: {
        activeContent: true,
        activeLogin: false
    },
});
