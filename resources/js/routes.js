import Vue from 'vue';
import VueRouter from 'vue-router';

import urlBase from '@/js/url';
// import rolesmodul from '@/js/components/roles/modul'
// import rolespermission from '@/js/components/roles/permission'

const rolesmodul = () => import(/* webpackChunkName: "roles" */'@/js/components/roles/modul')
const rolespermission = () => import( /* webpackChunkName: "roles" */'@/js/components/roles/permission')


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: urlBase.base,
    hash: false,
    routes: [
        {
            path: '/roles',
            name: 'roles',
            component: rolesmodul,
            children: [{
                path: 'permission',
                component: rolespermission,
            }]
        },
        // {
        //     path: '/permission',
        //     name: 'permission',
        //     component: rolespermission,
        //     // children: [{
        //     //     path: 'permission',
        //     //     component: rolespermission,
        //     // }]
        // },


    ]
});

export default router;
