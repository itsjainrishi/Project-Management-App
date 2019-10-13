<template>
	<div :class="['modal', 'edit-project-modal', { 'is-active' : editProjectModalActive }]">
		<div class="modal-background"/>
		<div class="modal-content" v-outside-click="{ exclude: [this.$parent.$refs.editprojectbtn] , handler: 'closemodaledit'}">
			<form role="form" method="PUT" action="#" ref="projecteditform" @submit.prevent="editProject" @keydown="projecteditform.errors.clear($event.target.name)">
				<div class="field">
					<label class="label">Title</label>
					<div class="control">
						<input class="input" type="text" name="title" v-model="projecteditform.title">
					</div>

					<span class="help is-danger"
						v-if="projecteditform.errors.has('title')"
						v-text="projecteditform.errors.get('title')">
					</span>

				</div>

				<div class="field">
					<label class="label">Description</label>
					<div class="control">
						<textarea class="textarea" name="description" v-model="projecteditform.description" type="text"></textarea>
					</div>

					<span class="help is-danger"
						v-if="projecteditform.errors.has('description')"
						v-text="projecteditform.errors.get('description')">
					</span>
				</div>

				<footer class="footer edit-project-modal-footer">
					<div class="content footer-content">
						<p>
							<button class="button edit-project-modal-cancel" type="button" aria-label="close" @click="closemodaledit">Cancel</button>
							<button class="button edit-project-modal-submit is-primary" type="submit" :disabled="projecteditform.errors.any() || formloading">Done</button>			
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
			...mapState(['selectedProject', 'editProjectModalActive']),
		},
		data() {
			return {
				projecteditform: new Form({
					title: '',
					description: '',
				}),
				formloading: false,
			}
		},
		methods: {
			closemodaledit() {
				this.$store.dispatch('CLOSE_EDIT_PROJECT_MODAL')
			},
			editProject() {
				this.formloading = true;
				
				this.projecteditform.submit('put', '/api/projects/'+this.selectedProject.slug)
				.then((data) => {
					this.$store.dispatch('UPDATE_SELECTED_PROJECT', data)
					this.formloading = false
					this.$store.dispatch('CLOSE_EDIT_PROJECT_MODAL')
					toastr.success('Project updated')
				})
				.catch((err) => {
					toastr.error('Something went wrong')
					this.formloading = false
				})
			}
		},
		mounted() {
			this.projecteditform.title = this.selectedProject.title
			this.projecteditform.description = this.selectedProject.description
		}
	}

</script>

<style lang="scss" scoped="true">
	.edit-project-modal {
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

			.project-status {
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