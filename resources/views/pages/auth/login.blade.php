@extends('layouts.app')

@section('content')

	<div class="columns is-marginless is-centered">
		<div class="column is-5">
			<div class="card">
				<header class="card-header">
						<p class="card-header-title">Login</p>
				</header>

				<div class="card-content">
					<form class="login-form" method="POST" action="{{ route('login') }}">
						{{ csrf_field() }}

						<div class="field">
							<label class="label">Email</label>
							<div class="control">
								<input class="input" type="email" name="email" value="{{ old('email') }}" required>
								@if ($errors->has('email'))
									<p class="help is-danger">
										{{ $errors->first('email') }}
									</p>
								@endif
							</div>
						</div>

						<div class="field">
							<label class="label">Password</label>
							<div class="control">
								<input class="input" type="password" name="password" required autocomplete="off">
								@if ($errors->has('password'))
									<p class="help is-danger">
										{{ $errors->first('password') }}
									</p>
								@endif
							</div>
						</div>

						<div class="field">
							<p class="control">
								<label class="checkbox">
									<input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
								</label>
							</p>
						</div>

						<div class="field is-grouped">
							<div class="control">
								<button type="submit" class="button is-primary">Login</button>
							</div>

							<div class="control">
								<a href="{{ route('password.request') }}">
									Forgot Your Password?
								</a>
							</div>
						</div>
						
					</form>
				</div>
			</div>
		</div>
	</div>
@endsection