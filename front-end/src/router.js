import Vue from 'vue';
import Router from 'vue-router';
import WordList from './views/WordList.vue';
import WordNew from './views/WordNew.vue';
import WordShow from './views/WordShow.vue';
import WordEdit from './views/WordEdit.vue';
import WordTest from './views/WordTest.vue';

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/words'
        },
        {
            path: '/words',
            name: 'word-list',
            component: WordList
        },
        {
            path: '/words/new',
            name: 'new-word',
            component: WordNew
        },
        {
            path: '/words/:id',
            name: 'word-show',
            component: WordShow
        },
        {
            path: '/words/:id/edit',
            name: 'word-edit',
            component: WordEdit
        },
        {
            path: '/test',
            name: 'test',
            component: WordTest
        },
    ]
})