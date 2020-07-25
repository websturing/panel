import Vue from 'vue';
import VueRouter from 'vue-router';

import urlBase from '@/js/url';
// import rolesmodul from '@/js/components/roles/modul'
// import rolespermission from '@/js/components/roles/permission'

const rolesmodul = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/modul')
const rolesmodulform = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/modul_form')
const rolespermission = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/permission')
const rolespermissionform = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/permission_form')
const artikelberita = () => import( /* webpackChunkName: "roles" */ '@/js/components/artikel/berita')
const artikelberitaform = () => import( /* webpackChunkName: "roles" */ '@/js/components/artikel/berita_form')


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: urlBase.base,
    hash: false,
    routes: [{
            path: '/roles/modul',
            name: 'roles-modul',
            component: rolesmodul,
            children: [{
                path: 'form',
                name: 'roles-modul-form',
                component: rolesmodulform,
            }]
        },
        {
            path: '/artikel/berita',
            name: 'artikel-berita',
            component: artikelberita,
            children: [{
                path: 'form',
                name: 'artikel-berita-form',
                component: artikelberitaform,
            }]
        },
        {
            path: '/roles/permission',
            name: 'roles-permission',
            component: rolespermission,
            children: [{
                path: 'form',
                name: 'roles-permission-form',
                component: rolespermissionform,
            }]
        }


    ]
});

export default router;
