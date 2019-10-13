<template>
	<div class="columns activities is-multiline">
		<div class="column is-full" v-for="activity in selectedProject.activity">
			<Activitycard :activity="activity"></Activitycard>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import Activitycard from './show.vue'

	export default {
		components: {
			Activitycard,
		},
		computed: {
			...mapState(["selectedProject"]),
		},
	}
</script>
