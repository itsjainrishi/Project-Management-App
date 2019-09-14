<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
	/*
	|--------------------------------------------------------------------------
	| Login Controller
	|--------------------------------------------------------------------------
	|
	| This controller handles authenticating users for the application and
	| redirecting them to your home screen. The controller uses a trait
	| to conveniently provide its functionality to your applications.
	|
	*/

	use AuthenticatesUsers;

	/**
	 * Where to redirect users after login.
	 *
	 * @var string
	 */
	protected $redirectTo = 'api/projects';

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('guest')->except('logout');
	}

	public function showLoginForm() {
		return view('pages.auth.login');
	}

	public function login(Request $request) 
	{
		$this->validateLogin($request);

		$credentials = request(['email', 'password']);

		if(!Auth::attempt($credentials))
			return response()->json([
				'message' => 'Unauthorized'
			], 401);
		
		$user = $request->user();
		$token = $user->createToken('ProjectBoard');

		return response()->json([
			'access_token' => $token->accessToken,
			'token_type' => 'Bearer',
		]);
	}

	public function logout(Request $request)
	{
		$user_tokens = \Auth::user()->tokens;

		foreach($user_tokens as $token) {
			$token->revoke();
			$token->delete(); 
		}

		return response()->json([
			'message' => 'Successfully logged out'
		]);
	}
}
