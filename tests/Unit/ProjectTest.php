<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Project;

class ProjectTest extends TestCase
{
	use RefreshDatabase, WithFaker;


	/** @test */
	
	public function it_has_a_path()
	{
		$project = factory('App\Project')->create();

		$this->assertEquals('api/projects/' . $project->slug, $project->path());
	}


	/** @test */

	public function it_belongs_to_an_owner()
	{
		$project = factory('App\Project')->create();

		$this->assertInstanceOf('App\User', $project->owner);
	}


	/** @test */

	public function it_can_add_a_task()
	{
		$project = factory('App\Project')->create();
		$this->assertCount(0, $project->tasks);

		$project->addTask([
			'title' => $this->faker->sentence,
			'body' => $this->faker->paragraph,
		]);

		$this->assertCount(1, $project->fresh()->tasks);
	}


	/** @test */
	
	public function it_can_invite_a_user()
	{
		$project = factory('App\Project')->create();

		$project->invite($user = factory('App\User')->create());

		$this->assertTrue($project->members->contains($user));
	}
}
