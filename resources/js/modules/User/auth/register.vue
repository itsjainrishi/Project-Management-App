<template>
	<div class="columns is-marginless is-centered">
		<div class="column is-5">
			<div class="card">
				<header class="card-header">
					<p class="card-header-title">Register</p>
				</header>

				<div class="card-content">
					<form class="register-form" method="POST" action="/api/register" ref="regform" @submit.prevent="registerSubmit" @keydown="regform.errors.clear($event.target.name)">

						<div class="field">
							<label class="label">Name</label>
							<div class="control">
								<input class="input" type="text" name="name" v-model="regform.name" required autocomplete="off">
							</div>
							<span class="help is-danger"
								v-if="regform.errors.has('name')"
								v-text="regform.errors.get('name')">
							</span>
						</div>

						<div class="field">
							<label class="label">Email</label>
							<div class="control">
								<input class="input" type="email" name="email" v-model="regform.email" required>
							</div>
							<span class="help is-danger"
								v-if="regform.errors.has('email')"
								v-text="regform.errors.get('email')">
							</span>
						</div>

						<div class="field">
							<label class="label">Password</label>
							<div class="control">
								<input class="input" type="password" v-model="regform.password" name="password" required>
							</div>
							<span class="help is-danger"
								v-if="regform.errors.has('password')"
								v-text="regform.errors.get('password')">
							</span>
						</div>

						<div class="field">
							<label class="label">Confirm Password</label>
							<div class="control">
								<input class="input" type="password" v-model="regform.password_confirmation" name="password" required>
							</div>
						</div>

						<div class="field">
							<div class="control">
								<button :class="['button is-primary', { 'is-loading': formloading }]" :disabled="regform.errors.any()">SIGN UP</button>
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
				regform: new Form({
					name: '',
					email: '',
					password: '',
					password_confirmation: '',	
				}),
				formloading: false,
			}
		},
		methods: {
			registerSubmit() {
				this.formloading = true;
				this.regform.submit('post', '/api/register')
					.then(data => {
						toastr.success('A verification mail has been sent to your email. Verify your email address to continue');
						this.formloading = false;
					})
					.catch(error => {
						toastr.error('Something went wrong');
						this.formloading = false;
					});
			},
		}
	}
</script>