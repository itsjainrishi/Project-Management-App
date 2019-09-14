<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Database\Eloquent\Collection;
use App\User;
use App\Project;

class UserTest extends TestCase
{

	use RefreshDatabase, WithFaker;

	protected $owner;

	protected function setUp(): void
	{
		parent::setUp();
		$this->owner = factory('App\User')->create();
	}


	/** @test */

	public function a_user_can_have_projects()
	{
		$this->assertInstanceOf(Collection::class, $this->owner->projects);
	}


	/** @test */

	public function a_user_has_accessible_projects()
	{
		$project = $this->owner->projects()->create(factory('App\Project')->raw());

		// $this->actingAs($this->owner, 'api');

		// $this->get('/api/projects')->assertSee($project->title);
	
		$response = $this->actingAs($this->owner, 'api')->getJson('/api/projects');

		$response->assertStatus(200)->assertJson([
			'data' => [
				$project->toArray()
			]
		]);
	}

}
