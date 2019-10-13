<template>
	<div>
		<div class="flex flex-wrap create-task-btn">
			<div class="w-full">
				<div class="text-center">
					<button class="button create-task shadow is-primary" @click="showcreateTask" ref="createtaskbtn">Create Task</button>
				</div>
			</div>
		</div>
		<div class="tile is-ancestor" v-if="selectedProject.tasks.length" ref="showtaskbtn">
			<div class="tile is-parent is-3" v-for="(task, i) in selectedProject.tasks" :data-slug="task.slug" :key="task.slug" @click="showTask">
				<div class="tile is-child box">
					<span class="task-status color-primary" v-if="task.completed">Completed</span>
					<span class="task-status color-primary" v-else>Pending</span>
					<p class="title">{{ task.title }}</p>
				</div>
			</div>
		</div>
		<Taskcreate/>
		<Taskshow/>
		<Taskedit/>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import Taskcreate from '../tasks/create'
	import Taskshow from '../tasks/show'
	import Taskedit from '../tasks/edit'
	
	export default {
		computed: {
			...mapState(["selectedProject"]),
		},
		components: {
			Taskcreate,
			Taskshow,
			Taskedit,
		},
		methods: {
			showTask(event) {
				var taskslug = event.currentTarget.getAttribute('data-slug')
				var selected = this.selectedProject.tasks.find(({slug}) => slug === taskslug)
				this.$store.dispatch('SET_SELECTED_TASK', selected)
			},
			showcreateTask(event) {
				this.$store.dispatch('OPEN_CREATE_TASK_MODAL')
			},
		},
	}
</script>

<style lang="scss" scoped="">
	.create-task-btn {
		margin-bottom: 1.5rem;
	}

	.tile.is-ancestor {
		flex-wrap: wrap;
		margin-left: 1.25rem;
		margin-right: 1.25rem;
	}

	.tile.is-child.box {
		overflow: hidden;
		cursor: pointer;
		position: relative;

		.title {
			font-size: 1rem;
			padding-bottom: 1rem;
			padding-top: 1rem;
		}

		.content {
			overflow: hidden;
			text-overflow: ellipsis;
			height: 3rem;
		}
	}

	.task-status {
		font-size: 0.75rem;
	}
</style>