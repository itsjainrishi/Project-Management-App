<template>
	<div>
		<Tabs/>
		<nav class="level">
			<div class="level-left">
				<div class="level-item">
					<h5 class="subtitle">My Projects</h5>
				</div>
			</div>
			<div class="level-right">
				<div class="level-item">
					<button class="button is-primary" @click="showcreateProject" ref="createprojectbtn">Create Project</button>
				</div>
			</div>
		</nav>
		<div class="tile is-ancestor" v-if="projects.length">
			<div class="tile is-parent is-4" v-for="project in projects">
				<div class="tile is-child box">
					<div class="content" @click="showProject" :data-index="project.slug">
						<p class="title">{{ project.title }}</p>
						<p class="description">{{ project.description }}</p>
					</div>
					<nav class="level">
						<a class="color-primary" v-if="$can('manage', project)" :data-index="project.slug" @click="deleteProject">Delete</a>
					</nav>
				</div>
			</div>
		</div>
		<h5 class="subtitle" v-else>No Projects found</h5>
		<Projectcreate/>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Tabs from '../../components/partials/tabs';
import Projectcreate from './create'

export default{
	components: {
		Tabs,
		Projectcreate,
	},
	computed: {
		...mapState(["authUser", "projects"]),
	},
	methods: {
		showProject(event) {
			var slug = event.currentTarget.getAttribute('data-index');

			axios.get('/api/projects/'+slug)
			.then((res) => {
				this.$store.dispatch('SET_SELECTED_PROJECT', res.data)
				this.$router.push({name: 'api.selectedproject', params: { slug: slug }});
			})
			.catch((err) => {
				toastr.error('Error retreving information');
				console.log(err);
			})
		},
		showcreateProject() {
			this.$store.dispatch('OPEN_CREATE_PROJECT_MODAL')
		},
		deleteProject(event) {
			var index = this.projects.findIndex(({slug}) => slug === event.currentTarget.getAttribute('data-index'))
			axios.delete('/api/projects/'+event.currentTarget.getAttribute('data-index'))
			.then((res) => {
				this.$store.dispatch('DELETE_PROJECT', index)
				toastr.success('Project Deleted')
			})
			.catch((error) => {
				toastr.success('Can not Delete Project')
			})	
		},
	}
}
</script>

<style lang="scss" scoped="">
	.tile.is-ancestor {
		flex-wrap: wrap;
	}

	.tile.is-child.box {
		overflow: hidden;
		height: 200px;
		position: relative;

		.content {
			cursor: pointer;
		}

		.title {
			font-size: 1.25rem;
			padding-bottom: 1rem;
		}

		.level {
			justify-content: flex-end;
			position: absolute;
			bottom: 15px;
			right: 15px;

			a {
				font-size: 0.85rem;
			}
		}

		.description {
			overflow: hidden;
			text-overflow: ellipsis;
			height: 3rem;
		}
	}

	@media screen and (min-width: 769px) and (max-width: 1023px) {
		.tile.is-parent {
			width: 50%;
		}
	}
</style>