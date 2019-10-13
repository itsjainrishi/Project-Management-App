import Vue from 'vue'
import Router from 'vue-router'
import { routes as auth } from './modules/User/auth/index'
import { routes as projects } from './modules/projects/index'

Vue.use(Router);

const AppRoute = {
	path: '/api',
	component: () => import('./modules/Main.vue'),
	children: [
		...auth,
		...projects,
	],
};

const routes = [AppRoute];

const router = new Router({
	routes,
	mode: 'history',
});

export default router
