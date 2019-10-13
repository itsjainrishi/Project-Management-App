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

		$this->assertCount(1, $this->owner->accessibleProjects());

		$sean = factory('App\User')->create();
		$malone = factory('App\User')->create();

		$sean_project = tap($sean->projects()->create(factory('App\Project')->raw()))->invite($malone);

		$this->assertCount(1, $this->owner->accessibleProjects());

		$sean_project->invite($this->owner);

		$this->assertCount(2, $this->owner->accessibleProjects());
	}

}
