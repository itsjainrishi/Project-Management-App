<template>
	<div :class="['modal', 'edit-task-modal', { 'is-active' : editTaskModalActive }]">
		<div class="modal-background"/>
		<div class="modal-content" v-outside-click="{ exclude: [this.$parent.$children[1].$refs.edittaskbtn] , handler: 'closemodaledit'}">
			<form role="form" method="PUT" action="#" ref="taskeditform" @submit.prevent="editTask" @keydown="taskeditform.errors.clear($event.target.name)">
				<div class="field">
					<label class="label">Title</label>
					<div class="control">
						<input class="input" type="text" name="title" v-model="taskeditform.title">
					</div>

					<span class="help is-danger"
						v-if="taskeditform.errors.has('title')"
						v-text="taskeditform.errors.get('title')">
					</span>

				</div>

				<div class="field">
					<label class="label">Description</label>
					<div class="control">
						<textarea class="textarea" name="body" v-model="taskeditform.body" type="text"></textarea>
					</div>

					<span class="help is-danger"
						v-if="taskeditform.errors.has('body')"
						v-text="taskeditform.errors.get('body')">
					</span>
				</div>

				<div class="task-status columns">
					<div class="column">
						<div class="heading">Status</div>
						<p v-if="taskeditform.completed">Completed</p>
						<p v-else>Pending</p>
					</div>
					<div class="column">
						<div class="heading">Change Status</div>
						<label class="switch">
							<input type="checkbox" :checked="taskeditform.completed" @change="changeStatus()">
							<span class="slider round"></span>
						</label>
					</div>
				</div>

				<footer class="footer edit-task-modal-footer">
					<div class="content footer-content">
						<p>
							<button class="button edit-task-modal-cancel" type="button" aria-label="close" @click="closemodaledit">Cancel</button>
							<button class="button edit-task-modal-submit is-primary" type="submit" :disabled="taskeditform.errors.any() || formloading">Done</button>			
						</p>
					</div>
				</footer>
			</form>
		</div>
	</div>
</template>

<script>
	import Form from '../../components/partials/Form.js'
	import { mapState } from 'vuex';

	export default {
		computed: {
			...mapState(['selectedProject', 'selectedTask', 'editTaskModalActive']),
		},
		data() {
			return {
				taskeditform: new Form({
					title: '',
					body: '',
					completed: false,
				}),
				formloading: false,
			}
		},
		methods: {
			closemodaledit() {
				this.$store.dispatch('CLOSE_EDIT_TASK_MODAL')
			},
			changeStatus() {
				this.taskeditform.completed = !this.taskeditform.completed
			},
			editTask() {
				this.formloading = true;
				
				this.taskeditform.submit('put', '/api/projects/'+this.selectedProject.slug+'/tasks/'+this.selectedTask.slug)
				.then((data) => {
					this.$store.dispatch('UPDATE_SELECTED_PROJECT', data)
					this.formloading = false
					this.$store.dispatch('CLOSE_EDIT_TASK_MODAL')
					toastr.success('Task updated')
				})
				.catch((err) => {
					toastr.error('Something went wrong')
					this.formloading = false
				})
			}
		},
		watch: {
			selectedTask() {
				this.taskeditform.title = this.selectedTask.title
				this.taskeditform.body = this.selectedTask.body
				this.taskeditform.completed = this.selectedTask.completed
			},
		},
	}

</script>

<style lang="scss" scoped="true">
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: hsl(0, 0%, 80%);
		-webkit-transition: .4s;
		transition: .4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: .4s;
		transition: .4s;
	}

	input:checked + .slider {
		background-color: hsl(272, 100%, 50%);
	}

	input:focus + .slider {
		box-shadow: 0 0 1px hsl(272, 100%, 50%);
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
	.edit-task-modal {
		.modal-content {
			padding: 1rem;
			background-color: white;
			border-radius: 0.25rem;
			display: block;
			overflow: auto;

			.field {
				padding: 1rem;
				margin-bottom: 0;
			
				input, textarea {
					background-color: hsl(210, 38%, 95%);
					border-color: hsl(210, 38%, 95%);

					&:hover, &:focus {
						border-color: hsl(210, 38%, 95%);
						box-shadow: none;
					}
				}
			}

			.task-status {
				padding: 1rem;
				margin-left: 0;
				margin-right: 0;
				margin-top: 0;

				.column {
					text-align: center;
				}
			}

			footer {
				margin-top: 3rem;
				padding: 1.5rem;
				background-color: hsl(210, 38%, 95%);
				margin: 3rem -1rem -1rem -1rem;
				.content p {
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
</style>