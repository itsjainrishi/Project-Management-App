import store from '../../vuex/store';

const requireAuth = (to, from, next) => {
	if (store.getters.isAuthenticated) {
		next()
		return
	}
	next('/api/login')
}

export default [{
	path: '',
	component: () => import('../Main.vue'),
	beforeEnter: requireAuth,
	children: [{
		path: 'home',
		name: 'api.home',
		component: () => import('../User/home')
	},
	{
		path: 'projects/',
		name: 'api.projects',
		component: () => import('./projects')
	},
	{
		path: 'projects/:slug',
		name: 'api.selectedproject',
		component: () => import('./selectedproject')
	},
	]
}]