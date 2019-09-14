@extends('layouts.app')

@section('content')
	<div class="columns is-marginless is-centered">
		<div class="column is-5">
			<div class="card">
				<header class="card-header">
					<p class="card-header-title">Register</p>
				</header>

				<div class="card-content">
					<form class="register-form" method="POST" action="/api/register">

						{{ csrf_field() }}


						<div class="field">
							<label class="label">Name</label>
							<div class="control">
								<input class="input" type="text" name="name" value="{{ old('name') }}" required autocomplete="off">
								@if ($errors->has('name'))
									<p class="help is-danger">
										{{ $errors->first('name') }}
									</p>
								@endif
							</div>
						</div>

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
							<label class="label">Confirm Password</label>
							<div class="control">
								<input class="input" type="password" name="password_confirmation" required autocomplete="off">
							</div>
						</div>

						<div class="field">
							<div class="control">
								<button class="button is-primary">Submit</button>
							</div>
						</div>

					</form>
				</div>
			</div>
		</div>
	</div>
@endsection