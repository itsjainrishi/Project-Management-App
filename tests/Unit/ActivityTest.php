<?php

namespace Tests\Unit;

use App\Activity;
use App\Project;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Laravel\Passport\Passport;

class ActivityTest extends TestCase
{
	use RefreshDatabase;

	/** @test */
	function it_has_a_user()
	{
		$user = factory('App\User')->create();

		Passport::actingAs($user);

		$project = $user->projects()->create(factory('App\Project')->raw());

		$this->assertEquals($user->id, $project->activity->first()->user->id);
	}
}
