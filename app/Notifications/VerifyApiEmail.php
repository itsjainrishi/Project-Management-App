<?php

namespace App\Notifications;

use Illuminate\Support\Carbon;

use Illuminate\Support\Facades\URL;

use Illuminate\Auth\Notifications\VerifyEmail as VerifyEmailBase;

use Illuminate\Bus\Queueable;

use Illuminate\Contracts\Queue\ShouldQueue;

class VerifyApiEmail extends VerifyEmailBase implements ShouldQueue
{
	use Queueable;

	/**
	 * Create a new notification instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		//
	}

	protected function verificationUrl($notifiable)
	{

		return URL::temporarySignedRoute(

			'apiverification.verify', Carbon::now()->addMinutes(60), ['id' => $notifiable->getKey()]

		);

	}
}
