import store from '../../../vuex/store';

const ifNotAuthenticated = (to, from, next) => {
	if (!store.getters.isAuthenticated) {
		next()
		return
	}
	next({ name: 'api.home'})
}

export default [{
	path: '/',
	component: () => import('../../Main.vue'),
	children: [{
		path: 'login',
		name: 'api.login',
		beforeEnter: ifNotAuthenticated,
		component: () => import('./login')
	}, {
		path: 'register',
		name: 'api.register',
		beforeEnter: ifNotAuthenticated,
		component: () => import('./register')
	}]
}]