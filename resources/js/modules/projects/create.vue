<template>
	<div :class="['modal', 'create-project-modal', { 'is-active' : createProjectModalActive }]">
		<div class="modal-background"/>
		<div class="modal-content" v-outside-click="{ exclude: [this.$parent.$refs.createprojectbtn] , handler: 'closemodalcreate'}">
			<form role="form" method="POST" action="#" ref="projectcreateform" @submit.prevent="createproject" @keydown="projectcreateform.errors.clear($event.target.name)">
				<div class="field">
					<label class="label">Title</label>
					<div class="control">
						<input class="input" type="text" name="title" v-model="projectcreateform.title" placeholder="New project">
					</div>

					<span class="help is-danger"
						v-if="projectcreateform.errors.has('title')"
						v-text="projectcreateform.errors.get('title')">
					</span>

				</div>

				<div class="field">
					<label class="label">Description</label>
					<div class="control">
						<textarea class="textarea" name="description" v-model="projectcreateform.description" type="text"></textarea>
					</div>

					<span class="help is-danger"
						v-if="projectcreateform.errors.has('description')"
						v-text="projectcreateform.errors.get('description')">
					</span>
				</div>

				<div class="field">
					<label class="label">Notes</label>
					<div class="control">
						<textarea class="textarea" name="notes" v-model="projectcreateform.notes" type="text"></textarea>
					</div>

					<span class="help is-danger"
						v-if="projectcreateform.errors.has('notes')"
						v-text="projectcreateform.errors.get('notes')">
					</span>
				</div>

				<footer class="footer create-project-modal-footer">
					<div class="content footer-content">
						<p>
							<button class="button create-project-modal-cancel" type="button" aria-label="close" @click="closemodalcreate">Cancel</button>
							<button class="button create-project-modal-submit is-primary" type="submit" :disabled="projectcreateform.errors.any() || formloading">Create</button>			
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
			...mapState(['createProjectModalActive']),
		},
		data() {
			return {
				projectcreateform: new Form({
					title: '',
					description: '',
					notes: '',
				}),
				formloading: false,
			}
		},
		methods: {
			closemodalcreate() {
				this.$store.dispatch('CLOSE_CREATE_PROJECT_MODAL')
			},
			createproject() {
				this.formloading = true;
				this.projectcreateform.submit('post', '/api/projects/')
				.then((data) => {
					this.$store.dispatch('UPDATE_USER_PROJECTS', data)
					toastr.success('Project Created')
					this.formloading = false;
					this.$store.dispatch('CLOSE_CREATE_PROJECT_MODAL')
				})
				.catch((error) => {
					toastr.error('Could not create Project')
					this.formloading = false;
					console.log(error)
				})
			}
		},
	}

</script>

<style lang="scss">
.create-project-modal {
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
