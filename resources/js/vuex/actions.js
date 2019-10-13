export default {
	AUTH_SUCCESS: ({dispatch, commit}, token) => {
		commit('SET_AUTHORIZATION', token);
		localStorage.setItem('token', token)
	},
	RESEND_VERIFICATION_MAIL: ({ commit }) => {commit('SET_EMAIL_RESENT')},	
	FETCH_AUTH_USER: ({commit}) => new Promise((resolve, reject) => {
		axios.get('/api/user')
		.then((res) => {
			commit('SET_AUTH_USER', res.data)
			commit('SET_VERIFICATION_STATUS', res.data)
			resolve(res.data);
		})
		.catch((error) => {
			reject(error)
		})
	}),
	LOGOUT_USER: ({commit}) => {
		commit('SET_USER_UNAUTHENTICATED', {})
		localStorage.removeItem('token');
	},
	GET_PROJECTS: ({commit, dispatch}) => new Promise((resolve) => {
		axios.get('/api/projects')
		.then((res) => {
			dispatch('SET_USER_PROJECTS', res.data)
			resolve()
		})
		.catch((err) => {
		
		})
	}),
	SET_USER_PROJECTS: ({commit}, projects) => {
		commit('SET_PROJECTS', projects)
	},
	OPEN_CREATE_PROJECT_MODAL: ({commit}) => {
		commit('SET_CREATE_PROJECT_MODAL_ACTIVE')
	},
	CLOSE_CREATE_PROJECT_MODAL: ({commit}) => {
		commit('SET_CREATE_PROJECT_MODAL_INACTIVE')
	},
	UPDATE_USER_PROJECTS: ({commit}, project) => {
		commit('UPDATE_USER_PROJECTS', project)
	},
	SET_SELECTED_PROJECT: ({commit}, selProject) => {
		commit('SET_SELECTED_PROJECT', selProject)
	},
	OPEN_EDIT_PROJECT_MODAL: ({commit}) => {
		commit('SET_EDIT_PROJECT_MODAL_ACTIVE')
	},
	CLOSE_EDIT_PROJECT_MODAL: ({commit}) => {
		commit('SET_EDIT_PROJECT_MODAL_INACTIVE')
	},
	UPDATE_SELECTED_PROJECT: ({commit}, project) => {
		commit('UPDATE_SELECTED_PROJECT', project)
	},
	DELETE_PROJECT: ({commit}, index) => {
		commit('DELETE_PROJECT', index)
	},
	OPEN_CREATE_TASK_MODAL: ({commit}) => {
		commit('SET_CREATE_TASK_MODAL_ACTIVE')
	},
	CLOSE_CREATE_TASK_MODAL: ({commit}) => {
		commit('SET_CREATE_TASK_MODAL_INACTIVE')
	},
	SET_SELECTED_TASK: ({commit}, selTask) => {
		commit('SET_SELECTED_TASK', selTask)
		commit('SET_SHOW_TASK_MODAL_ACTIVE')
	},
	CLOSE_SHOW_TASK_MODAL: ({commit}) => {
		commit('SET_SHOW_TASK_MODAL_INACTIVE')
	},
	OPEN_EDIT_TASK_MODAL: ({commit}) => {
		commit('SET_EDIT_TASK_MODAL_ACTIVE')
	},
	CLOSE_EDIT_TASK_MODAL: ({commit}) => {
		commit('SET_EDIT_TASK_MODAL_INACTIVE')
	},
	DELETE_SELECTED_TASK: ({commit}, index) => {
		commit('DELETE_SELECTED_TASK', index)
	},
}