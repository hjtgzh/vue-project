import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/home/Home.vue';
import Layout from '../components/layout/Layout.vue';
import Table from '../components/layout/Table.vue';
import Form from '../components/layout/Form.vue';
Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/layout',
            component: Layout,
            // redirect: '/layout/table',
            children: [
                {
                    path: 'table',
                    component: Table
                },
                {
                    path: 'form',
                    component: Form
                }
            ]
        }
    ]
});
