<template>
	<nav class="navbar has-shadow">
		<div class="container">
			<div class="navbar-brand">
				<router-link to="/" class="navbar-item links">Projectboard</router-link>

				<div class="navbar-burger burger" data-target="navMenu">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div class="navbar-menu" id="navMenu">
				<div class="navbar-start"></div>

				<div class="navbar-end">
					<router-link to="/api/login" class="navbar-item links" v-if="!isAuthenticated">
						<span>Login</span>
					</router-link>
					
					<router-link to="/api/register" class="navbar-item links" v-if="!isAuthenticated">
						<span>Register</span>
					</router-link>
					
					<div class="navbar-item has-dropdown is-hoverable" v-else>
						<a class="navbar-link">
							{{ authUser.name }}
						</a>
						<div class="navbar-dropdown is-boxed is-right">
							<a class="navbar-item" href="#" @click.prevent="logout">
								Logout
							</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	</nav>
</template>

<script>
	import { mapGetters, mapState } from 'vuex';

	export default {
		data() {
			return{
				currentUser: {},
			}
		},
		methods: {
			logout() {	
				axios.post('/api/logout')
				.then((res) => {
					this.$store.dispatch('LOGOUT_USER');
					this.$router.push({name: 'api.login'})
					this.$cookies.remove('at-pmbin')
					this.$cookies.remove('at-pmdbin')
					this.$cookies.remove('sst-pmbin')
				})
				.catch(error => {
					console.log(error)
				});
			}
		},
		computed: {
			...mapGetters(["isAuthenticated"]),
			...mapState(['authUser']),
		},
	}
</script>

<style lang="scss">
	.navbar-item.links {
		background-color: transparent;
		text-decoration: none;
	}
	.navbar-end .navbar-item.links:hover,
	.navbar-end .navbar-item.links:focus,
	.navbar-end .navbar-item.router-link-exact-active,
	{
		color: hsl(272, 100%, 50%);
		background-color: transparent;
	}

	.navbar-item.has-dropdown {
		.navbar-link:hover, .navbar-item:hover {
			color: hsl(272, 100%, 50%);
			background-color: transparent;
		}
	}
</style>