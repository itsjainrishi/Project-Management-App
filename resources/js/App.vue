<template>
	<div id="page-content-wrapper">
		<Navigationbar></Navigationbar>
		<div class="content">
			<div class="container">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import Navigationbar from './components/partials/navbar';
import { mapGetters } from 'vuex';

export default {
	components: {
		Navigationbar,
	},
	computed: {
		...mapGetters(["isAuthenticated"]),
	},
	created() {
		if(this.isAuthenticated) {
			this.$store.dispatch('GET_PROJECTS');
		}
	},
	watch: {
		isAuthenticated: function(val) {
			if(this.isAuthenticated) {
				this.$store.dispatch('GET_PROJECTS');
			}
		}
	},
}
</script>

<style lang="scss" scoped="">
	.content {
		background-color: hsl(210, 38%, 95%);
		padding-top: 2%;
		min-height: 100vh;
		.container {
			margin-bottom: 5%;
		}
	}
	@media screen and (max-width: 1023px) {
		.content .container {
			padding: 2rem;
		}
	}
</style>