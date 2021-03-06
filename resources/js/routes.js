import Vue from 'vue';
import VueRouter from 'vue-router';

import urlBase from '@/js/url';
// import rolesmodul from '@/js/components/roles/modul'
// import rolespermission from '@/js/components/roles/permission'

const dashboard = () => import( /* webpackChunkName: "dashboard" */ '@/js/components/dashboard/dashboard')
const rolesmodul = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/modul')
const rolesmodulform = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/modul_form')
const rolespermission = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/permission')
const rolespermissionform = () => import( /* webpackChunkName: "roles" */ '@/js/components/roles/permission_form')
const artikelberita = () => import( /* webpackChunkName: "roles" */ '@/js/components/artikel/berita')
const artikelberitaform = () => import( /* webpackChunkName: "roles" */ '@/js/components/artikel/berita_form')

const videos = () => import( /* webpackChunkName: "roles" */ '@/js/components/videos/videos')
const videosform = () => import( /* webpackChunkName: "roles" */ '@/js/components/videos/videos_form')


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: urlBase.base,
    hash: false,
    routes: [{
            path: '/Dashboard',
            name: 'dashboard',
            component: dashboard,
        },
        {
            path: '/',
            name: 'dashboard-d',
            component: dashboard,
        }, {
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
        },
        {
            path: '/videos',
            name: 'videos',
            component: videos,
            children: [{
                path: 'form',
                name: 'videos-form',
                component: videosform,
            }]
        }


    ]
});

export default router;
