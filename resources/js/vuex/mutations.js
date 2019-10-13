import Vue from 'vue';

export default {
	// USER LOGIN/REGISTRATION/AUTH
	SET_AUTHORIZATION: (state, token) => {
		state.token = token
	},
	SET_AUTH_USER: (state, data) => {
		state.authUser = data;
	},
	SET_VERIFICATION_STATUS: (state, data) => {
		state.verifiedAt = data.email_verified_at
	},
	SET_USER_UNAUTHENTICATED: (state, emptyData) => {
		state.authUser = emptyData;
		state.token = '';
		state.selectedProject = {};
	},
	SET_MAIL_RESENT: (state) => state.emailresent = true,
	
	// SCREAMS/POST
	SET_PROJECTS: (state, data) => {
		state.projects = data
	},
	UPDATE_USER_PROJECTS: (state, project) => {
		state.projects.push(project)
	},
	SET_CREATE_PROJECT_MODAL_ACTIVE: (state) => {
		state.createProjectModalActive = true
	},
	SET_CREATE_PROJECT_MODAL_INACTIVE: (state) => {
		state.createProjectModalActive = false
	},
	SET_SELECTED_PROJECT: (state, data) => {
		state.selectedProject = data;
	},
	SET_EDIT_PROJECT_MODAL_ACTIVE: (state) => {
		state.editProjectModalActive = true
	},
	SET_EDIT_PROJECT_MODAL_INACTIVE: (state) => {
		state.editProjectModalActive = false
	},
	UPDATE_SELECTED_PROJECT: (state, project) => {
		state.selectedProject = project
	},
	DELETE_PROJECT: (state, index) => {
		Vue.delete(state.projects, index)
	},
	SET_CREATE_TASK_MODAL_ACTIVE: (state) => {
		state.createTaskModalActive = true
	},
	SET_CREATE_TASK_MODAL_INACTIVE: (state) => {
		state.createTaskModalActive = false
	},
	SET_SELECTED_TASK: (state, data) => {
		state.selectedTask = data;
	},
	SET_SHOW_TASK_MODAL_ACTIVE: (state) => {
		state.showTaskModalActive = true;
	},
	SET_SHOW_TASK_MODAL_INACTIVE: (state) => {
		state.showTaskModalActive = false;
	},
	SET_EDIT_TASK_MODAL_ACTIVE: (state) => {
		state.editTaskModalActive = true;
	},
	SET_EDIT_TASK_MODAL_INACTIVE: (state) => {
		state.editTaskModalActive = false;
	},
	UPDATE_SELECTED_TASK: (state, {index, task}) => {
		Vue.set(state.selectedProject.tasks, index, task)
		state.selectedTask = task
	},
	DELETE_SELECTED_TASK: (state, index) => {
		Vue.delete(state.selectedProject.tasks, index)
	},
	// SET USER IN PROFILE PAGE
	SET_DATA_USER_PROFILE: (state, userData) => state.dataUserSelected = userData
}