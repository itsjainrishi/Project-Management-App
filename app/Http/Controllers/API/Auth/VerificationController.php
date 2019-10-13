<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Carbon;
use App\User;

class VerificationController extends Controller
{
	/*
	|--------------------------------------------------------------------------
	| Email Verification Controller
	|--------------------------------------------------------------------------
	|
	| This controller is responsible for handling email verification for any
	| user that recently registered with the application. Emails may also
	| be re-sent if the user didn't receive the original email message.
	|
	*/

	use VerifiesEmails;

	/**
	 * Where to redirect users after verification.
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
		$this->middleware('auth:api');
		$this->middleware('signed')->only('verify');
		$this->middleware('throttle:6,1')->only('verify', 'resend');
	}

	public function show()
	{

	}

	public function verify(Request $request) {

		$userID = $request[‘id’];

		$user = User::findOrFail($userID);

		$date = Carbon::now();

		$user->email_verified_at = $date;

		$user->save();

		return response()->json('Email verified!');

	}

	public function resend(Request $request)
	{

		if ($request->user()->hasVerifiedEmail()) {
			return response()->json('User already have verified email!', 422);
		}

		$request->user()->sendApiEmailVerificationNotification();
		return response()->json('The notification has been resubmitted');
	}
}
