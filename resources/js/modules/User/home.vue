<template>
	<div>
		<Tabs/>
		<div class="content">
			<div class="pending-tasks">
				<div class="card">
					Pending Tasks
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Tabs from '../../components/partials/tabs';

export default {
	components: {
		Tabs,
	},
}
</script>

<style lang="scss">
	.content {
		background-color: white;
		padding: 1rem;
	}
</style>