<template>
	<div>
		<section class="hero">
			<div class="hero-body">
				<div class="container">
					<h3 class="title">
						{{selectedProject.title}}
					</h3>
					<p>
						{{selectedProject.description}}
					</p>
					<div class="flex flex-wrap edit-project-btn">
						<div class="w-full">
							<div class="text-center">
								<button class="button edit-project shadow is-primary" @click="showeditProject" ref="editprojectbtn">Edit Project</button>
							</div>
						</div>
					</div>
					
					<div class="members flex justify-center">
						<span class="add-member color-primary bg-white shadow flex full-rounded justify-center cursor-pointer" v-if="$can('manage', selectedProject)" @click="showmodalMember">
							<font-awesome-icon icon="plus"/>
						</span>
						<a class="cursor-pointer" v-for="member in selectedProject.members">
							<div class="member-image">
								<figure class="image is-32x32">
									<img class="full-rounded" src="/images/user.jpg">
								</figure>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
		<Projectedit/>
		<div :class="[ 'modal', 'invite-modal', { 'is-active' : membermodalActive }]">
			<div class="modal-background"></div>
			<div class="modal-content">
				<p class="subtitle">ADD MEMBER</p>
				<form role="form" method="POST" action="/api/projects/project-slug/invitations" @submit.prevent="inviteUser" @keydown="inviteUserform.errors.clear('email')">
					<input class="input invite-email is-shadowless" type="email" placeholder="Email Address" v-model="inviteUserform.email" required="required">
					<span class="help is-danger"
						v-if="inviteUserform.errors.has('email')"
						v-text="inviteUserform.errors.get('email')">
					</span>
					<footer class="footer invite-modal-footer">
						<div class="content footer-content">
							<p>
								<button class="button invite-modal-cancel" type="button" aria-label="close" @click="closemodalMember">Cancel</button>
								<button class="button invite-modal-submit is-primary" type="submit" :disabled="inviteUserform.errors.any()" aria-label="close">Invite</button>			
							</p>
						</div>
					</footer>
				</form>
			</div>
		</div>
		<div class="tabs is-fullwidth shadow mrl-2">
			<ul>
				<li :class="[{ 'is-active' : isActive.tab0 }]" @click="switchTab" data-index="0">
					<a class="flex flex-column">
						<span class="fa-icon">
							<font-awesome-icon icon="tasks"/>
						</span>
						<span class="fa-icon-text">Tasks</span>
					</a>
				</li>
				<li :class="[{ 'is-active' : isActive.tab1 }]" @click="switchTab" data-index="1">
					<a class="flex flex-column">
						<span class="fa-icon">
							<font-awesome-icon icon="bolt"/>
						</span>
						<span class="fa-icon-text">Activities</span>
					</a>
				</li>
				<li :class="[{ 'is-active' : isActive.tab2 }]" @click="switchTab" data-index="2">
					<a class="flex flex-column">
						<span class="fa-icon">
							<font-awesome-icon icon="tasks"/>
						</span>
						<span class="fa-icon-text">Tasks</span>
					</a>
				</li>
				<li :class="[{ 'is-active' : isActive.tab3 }]" @click="switchTab" data-index="3">
					<a class="flex flex-column">
						<span class="fa-icon">
							<font-awesome-icon icon="tasks"/>
						</span>
						<span class="fa-icon-text">Tasks</span>
					</a>
				</li>
			</ul>
		</div>

		<div class="tasks tab-content" v-if="isActive.tab0">
			<TasksComponent/>
		</div>

		<div class="activity tab-content bg-white shadow" v-else-if="isActive.tab1">
			<ActivitiesComponent/>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Form from '../../components/partials/Form.js';
import TasksComponent from '../tasks/index.vue'
import ActivitiesComponent from '../activity/index.vue'
import Projectedit from '../projects/edit'

export default{
	data() {
		return {
			membermodalActive: false,
			inviteUserform: new Form({
				email: '',
			}),
			isActive: {
		
			},
		}
	},
	components: {
		TasksComponent,
		ActivitiesComponent,
		Projectedit,
	},
	computed: {
		...mapState(["selectedProject"]),
	},
	methods: {
		showmodalMember() {
			this.membermodalActive = true;
		},
		closemodalMember() {
			this.membermodalActive = false;	
		},
		showeditProject() {
			this.$store.dispatch('OPEN_EDIT_PROJECT_MODAL')	
		},
		inviteUser() {
			this.inviteUserform.submit('post', '/api/projects/'+this.selectedProject.slug+'/invitations')
			.then((data) => {
				this.$store.dispatch('UPDATE_SELECTED_PROJECT', data)
				toastr.success('User now has access to the project');
			})
			.catch((err) => {
				toastr.error('Something went wrong');
			})
		},
		switchTab(event) {
			var tabindex = event.currentTarget.getAttribute('data-index')
			for (let i=0; i < 4; i++) {
				this.$set(this.isActive, 'tab'+i, false)
			}
			this.$set(this.isActive, 'tab'+tabindex, true);
		}
	},
	mounted() {
		for (let i=1; i < 4; i++) {
			this.$set(this.isActive, 'tab'+i, false)
		}
		this.$set(this.isActive, 'tab0', true)
	}
}
</script>

<style lang="scss" scoped="">
	.hero-body {
		text-align: center;
	}
	.edit-project-btn {
		margin-bottom: 1.5rem;
	}
	.members {
		flex-wrap: wrap;

		a {
			margin-left: 0.25rem;
		}
	}
	.add-member {
		width: 2rem;
		height: 2rem;
		padding: 0.5rem;
		margin-right: 0.25rem;
	}
	.member-image {
		height: 2rem;
		width: 2rem;
	}
	.content figure {
		margin: 0;
	}
	.tabs {
		.fa-icon {
			font-size: 1.5rem;
		}
		.fa-icon-text {
			font-size: 0.75rem;
		}
	}
	.tabs li.is-active {
		.fa-icon {
			color: hsl(272, 100%, 50%);
		}
		.fa-icon-text {
			color: hsl(272, 100%, 50%);
		}
		a {
			border-bottom-color: hsl(272, 100%, 50%);
		}
	}
	.activity.tab-content {
		padding: 2rem;
	}
	button.create-task {
		padding: 1.25rem 1rem;
		margin: 1rem 0;
	}
	.modal-content {
		text-align: center;
		padding-top: 2rem;
		background-color: white;
		border-radius: 0.25rem;
		display: block;
		overflow: auto;
	}
	.invite-email {
		width: 80%;
		display: block;
		margin: auto;
		background-color: hsl(210, 38%, 95%);
		border-color: hsl(210, 38%, 95%);

		&:hover, &:focus {
			border-color: hsl(210, 38%, 95%);
		}
	}
	.invite-modal-footer {
		margin-top: 3rem;
		padding: 1.5rem;
		width: 100%;
		background-color: hsl(210, 38%, 95%);
		.content p {
			display: flex;
			justify-content: space-between;
		}
	}
	@media screen and (min-width: 768px) {
		.tabs {
			margin-left: 2rem;
			margin-right: 2rem;
		}
		.activity.tab-content {
			margin-left: 2rem;
			margin-right: 2rem;
		}
	}
</style>