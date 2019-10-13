require('./bootstrap');

import VueRouter from 'vue-router'
import Cookies from 'vue-cookies'
import router from './routes'
import App from './App.vue'
import store from './vuex/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTasks, faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { abilitiesPlugin } from '@casl/vue'
import ability from './ability'
import handleOutsideClick from './components/directives/outsideclick';
import day from './filters/day';

window.Vue = require('vue');
window.toastr = require('toastr/build/toastr.min.js')

window.toastr.options = {
	positionClass: "toast-bottom-right",
	showDuration: "300",
	hideDuration: "1000",
	timeOut: "5000",
	extendedTimeOut: "1000",
	showEasing: "swing",
	hideEasing: "linear",
	showMethod: "fadeIn",
	hideMethod: "fadeOut"
}

Vue.use(VueRouter)
Vue.use(Cookies)
Vue.use(abilitiesPlugin, ability)
Vue.directive('outside-click', handleOutsideClick)

library.add([faPlus, faTasks, faBolt])

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(day);

axios.interceptors.request.use(
	request => requestHandler(request)
)

const requestHandler = (request) => {
	if (isHandlerEnabled(request)) {
		var header = $cookies.get('at-pmbin')
		var payload = $cookies.get('at-pmdbin')
		var signature = $cookies.get('sst-pmbin')
		var token = header + '.' + payload + '.' + signature;
		request.headers['Authorization'] = 'Bearer ' + token;
	}
	return request
}

const isHandlerEnabled = (config={}) => {
	return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? 
	false : true
}

new Vue({
	router,
	store,
	render: (h) => h(App),
	beforeCreate() {
		if (!!store.state.token) {
			this.$store.dispatch('FETCH_AUTH_USER')
			.then((res) => {

			})
			.catch((err) => {
				this.$store.dispatch('LOGOUT_USER')
			})
		}
	},
}).$mount('#app')
