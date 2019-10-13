<template>
	<div class="card">
		<div class="card-content">
			<p v-if="activity.description === 'created_task'"> {{activity.user.name}} created "{{activity.subject.title}}".</p>
			<p v-else-if="activity.description === 'created_project'"> {{activity.user.name}} created the project.</p>
			<p v-else-if="activity.description === 'completed_task'"> {{activity.user.name}} completed "{{activity.subject.title}}".</p>
			<p v-else-if="activity.description === 'incompleted_task'"> {{activity.user.name}} incompleted "{{activity.subject.title}}".</p>
			<p v-else-if="activity.description === 'updated_project' && changesCount === 1"> {{activity.user.name}} updated the {{ changedKey }} of the project.</p>
			<p v-else-if="activity.description === 'updated_project'"> {{activity.user.name}} updated the project.</p>
			<p class="time">{{activity.created_at | day}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			activity: {
				type: Object,
			},
		},
		computed: {
			keys() {
				return Object.keys( this.activity.changes['after'] );
			},
			changesCount() {
				return this.keys.length
			},
			changedKey() {
				return this.keys[0];
			}
		},
	}
</script>

<style lang="scss" scoped="true">
	.card {
		background-color: hsl(210, 38%, 95%);
		border-radius: 0.25rem;
	}
	.card-content p {
		display: inline-block;
		margin-bottom: 0;
	}
	.time {
		font-size: 0.8rem;
		float: right;
	}
</style>