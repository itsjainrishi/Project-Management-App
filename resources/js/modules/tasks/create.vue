<template>
	<div :class="['modal', 'create-task-modal', { 'is-active' : createTaskModalActive }]">
		<div class="modal-background"/>
		<div class="modal-content" v-outside-click="{ exclude: [this.$parent.$refs.createtaskbtn] , handler: 'closemodalcreate'}">
			<form role="form" method="POST" action="#" ref="taskcreateform" @submit.prevent="createTask" @keydown="taskcreateform.errors.clear($event.target.name)">
				<div class="field">
					<label class="label">Title</label>
					<div class="control">
						<input class="input" type="text" name="title" v-model="taskcreateform.title" placeholder="New Task">
					</div>

					<span class="help is-danger"
						v-if="taskcreateform.errors.has('title')"
						v-text="taskcreateform.errors.get('title')">
					</span>

				</div>

				<div class="field">
					<label class="label">Description</label>
					<div class="control">
						<textarea class="textarea" name="body" v-model="taskcreateform.body" type="text"></textarea>
					</div>

					<span class="help is-danger"
						v-if="taskcreateform.errors.has('body')"
						v-text="taskcreateform.errors.get('body')">
					</span>
				</div>

				<footer class="footer create-task-modal-footer">
					<div class="content footer-content">
						<p>
							<button class="button create-task-modal-cancel" type="button" aria-label="close" @click="closemodalcreate">Cancel</button>
							<button class="button create-task-modal-submit is-primary" type="submit" :disabled="taskcreateform.errors.any() || formloading">Create</button>			
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
			...mapState(['selectedProject', 'createTaskModalActive']),
		},
		data() {
			return {
				taskcreateform: new Form({
					title: '',
					body: '',
				}),
				formloading: false,
			}
		},
		methods: {
			closemodalcreate() {
				this.$store.dispatch('CLOSE_CREATE_TASK_MODAL')
			},
			createTask() {
				this.formloading = true;
				this.taskcreateform.submit('post', '/api/projects/'+this.selectedProject.slug+'/tasks')
				.then((data) => {
					this.$store.dispatch('UPDATE_SELECTED_PROJECT', data)
					toastr.success('Task added')
					this.formloading = false;
					this.$store.dispatch('CLOSE_CREATE_TASK_MODAL')
				})
				.catch((error) => {
					toastr.error('Could not add Task')
					this.formloading = false;
				})
			}
		},
	}

</script>

<style lang="scss">
.create-task-modal {
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

		footer {
			padding: 1.5rem;
			background-color: hsl(210, 38%, 95%);
			margin: 3rem 1rem -1rem 1rem;
			.content p {
				display: flex;
				justify-content: space-between;
			}
		}
	}
}
</style>
