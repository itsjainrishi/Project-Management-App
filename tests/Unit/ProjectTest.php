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

	function it_can_add_a_task()
	{
		$project = factory('App\Project')->create();
		$this->assertCount(0, $project->tasks);

		$project->addTask([
			'title' => $this->faker->sentence,
			'body' => $this->faker->paragraph,
		]);

		$this->assertCount(1, $project->fresh()->tasks);
	}
}
