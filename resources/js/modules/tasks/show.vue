<template>
	<div :class="['modal', 'show-task-modal', { 'is-active' : showTaskModalActive }]">
		<div class="modal-background"/>
		<div class="modal-content" v-outside-click="{ exclude: [this.$parent.$refs.showtaskbtn] , handler: 'closemodalshow'}">
			<div class="task-title">
				<p>{{ selectedTask.title }}</p>
			</div>
			<div class="task-body">
				<p class="title">Details</p>
				<p>{{ selectedTask.body }}</p>
			</div>
			<div class="task-status">
				<div class="column">
					<div class="heading">Status</div>
					<p v-if="selectedTask.completed">Completed</p>
					<p v-else>Pending</p>
				</div>
				<div class="column">
					<div class="heading">Priority</div>
					<p>{{ selectedTask.priority }}</p>
				</div>
			</div>
			<footer class="footer show-task-modal-footer">
				<div class="content footer-content">
					<p>
						<button class="button edit-task is-primary" type="button" ref="edittaskbtn" @click="editselectedTask">Edit</button>
					</p>
				</div>
			</footer>
		</div>
		<button class="modal-close is-large" aria-label="close" @click="closemodalshow"></button>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		computed: {
			...mapState(['selectedProject', 'selectedTask', 'showTaskModalActive']),
		},
		methods: {
			closemodalshow() {
				this.$store.dispatch('CLOSE_SHOW_TASK_MODAL')
			},
			deleteTask() {
				var index = this.selectedProject.tasks.findIndex(({slug}) => slug === this.selectedTask.slug)

				axios.delete('/api/projects/'+this.selectedProject.slug+'/tasks/'+this.selectedTask.slug)
				.then((res) => {
					this.$store.dispatch('DELETE_SELECTED_TASK', index)
					this.$store.dispatch('CLOSE_SHOW_TASK_MODAL')
					toastr.success('Task Deleted')
				})
				.catch((error) => {
					toastr.success('Can not Delete task')
				})	
			},
			editselectedTask() {
				this.$store.dispatch('OPEN_EDIT_TASK_MODAL')
				this.$store.dispatch('CLOSE_SHOW_TASK_MODAL')
			}
		},
	}

</script>

<style lang="scss">
	.show-task-modal {
		.modal-content{
			text-align: center;
			background-color: white;
			border-radius: 0.25rem;
			display: block;
			overflow: auto;
		}
		.task-title {
			font-size: 1.5rem;
			padding: 2rem;
			background-color: hsl(210, 38%, 95%);
		}
		.task-body {
			margin: 1rem 0;
			padding: 1rem;
			.title {
				font-size: 1em;
			}
		}
		.task-status {
			display: flex;
			justify-content: space-between;
			padding: 1em 2em;
		}
		.show-task-modal-footer {
			padding: 1rem 2rem;
			margin-top: 3rem;
			background-color: hsl(210, 38%, 95%);
			.content p {
				display: flex;
				justify-content: flex-end;
			}
		}
	}
</style>