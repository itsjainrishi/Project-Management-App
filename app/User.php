<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Notifications\VerifyApiEmail;
use App\HasUuid;
use App\Project;

class User extends Authenticatable implements MustVerifyEmail
{
	use Notifiable, HasUuid, HasApiTokens;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'name', 'email', 'password',
	];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = [
		'password', 'remember_token',
	];

	/**
	 * The attributes that should be cast to native types.
	 *
	 * @var array
	 */
	protected $casts = [
		'email_verified_at' => 'datetime',
	];

	public $incrementing = false;

	public function projects()
	{
		return $this->hasMany(Project::class, 'owner_id')->latest('updated_at');
	}

	public function accessibleProjects()
	{
		return Project::where('owner_id', $this->id)->orWhereHas('members', function ($query) {
			$query->where('user_id', $this->id);
			})->get();
	}

	public function sendApiEmailVerificationNotification()
	{
		$this->notify(new VerifyApiEmail);
	}

}
