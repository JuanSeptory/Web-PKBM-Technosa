import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import daftar from '../components/FormDaftar.vue'
import tentangkami from '../components/TentangKami.vue'
import artikeldanpengumuman from '../components/ArtikeldanPengumuman.vue'
import hubungikami from '../components/HubungiKami.vue'



const routes = [
    {
    path : '/',
    name: 'Home',
    component: HomePage,
    meta: { title: 'Beranda - PKBM Technosa' }
    }, 
    {
    path : '/daftar',
    name: 'Daftar',
    component: daftar,
    meta: { title: 'Daftar - PKBM Technosa' }
    },
    {
    path : '/tentangkami',
    name: 'TentangKami',
    component: tentangkami,
    meta: { title: 'Tentang Kami - PKBM Technosa' }
    }, 
    {
    path : '/artikel',
    name: 'ArtikeldanPengumuman',
    component: artikeldanpengumuman,
    meta: { title: 'Artikel dan Pengumuman - PKBM Technosa' }
    }, 
    {
    path : '/hubungikami',
    name: 'HubungiKami',
    component: hubungikami,
    meta: { title: 'Hubungi Kami - PKBM Technosa' }
    },  
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'PKBM Technosa'; // Default title jika meta.title tidak ada
    next();
});

export default router;