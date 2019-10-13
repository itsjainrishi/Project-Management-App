<template>
	<div class="columns is-marginless is-centered">
		<div class="column is-5">
			<div class="card">
				<header class="card-header">
					<p class="card-header-title">Login</p>
				</header>

				<div class="card-content">
					<form role="form" method="POST" action="/login" ref="loginform" @submit.prevent="loginsubmit" @keydown="loginform.errors.clear('email')">
						
						<div class="field">
							<label class="label">E-Mail</label>
							<div class="control">
								<input class="input" type="email" name="email" v-model="loginform.email" placeholder="johndoe@hotmail.com" required>
							</div>

							<span class="help is-danger"
								v-if="loginform.errors.has('email')"
								v-text="loginform.errors.get('email')">
							</span>

						</div>

						<div class="field">
							<label class="label">Password</label>
							<div class="control">
								<input class="input" name="password" v-model="loginform.password" type="password" required>
							</div>

							<span class="forgotpass" href="">Forgot Password?</span>

							<span class="help is-danger"
								v-if="loginform.errors.has('password')"
								v-text="loginform.errors.get('password')">
							</span>
						</div>
						
						<br>

						<div class="field">
							<div class="control">
								<button :class="['button is-primary', { 'is-loading': formloading }]" :disabled="loginform.errors.any() || formloading">SIGN In</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>


</template>

<script>
	import Form from '../../../components/partials/Form.js';

	export default {
		data() {
			return {
				loginform: new Form({
					email: '',
					password: '',
				}),
				formloading: false,
			}
		},
		methods: {
			loginsubmit() {
				this.formloading = true;
				this.loginform.submit('post', '/api/login', false)
					.then(data => {
						var token = data.access_token;
						var tokenArray = token.split(".");
						this.$cookies.set("at-pmbin", tokenArray[0], "0")
						this.$cookies.set("at-pmdbin", tokenArray[1], "0")
						this.$cookies.set("sst-pmbin", tokenArray[2], "0")
						this.$store.dispatch('AUTH_SUCCESS', token)
						this.afterloginHandler();
					})
					.catch(error => {
						toastr.error('Something went wrong');
						this.formloading = false;
					});
			},
			afterloginHandler() {
				this.$store.dispatch('FETCH_AUTH_USER')
				.then(() => {
					this.formloading = false;
					this.$router.push({name: 'api.home'})
				})
			}
		}
	}
</script>