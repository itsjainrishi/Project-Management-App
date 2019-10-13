<?php

namespace Tests\Unit;

use App\Project;
use App\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TaskTest extends TestCase
{
	use RefreshDatabase;


	/** @test */
	
	public function it_belongs_to_a_project()
	{
		$task = factory('App\Task')->create();

		$this->assertInstanceOf('App\Project', $task->project);
	}

	
	/** @test */
	
	public function it_has_a_path()
	{
		$task = factory('App\Task')->create();

		$this->assertEquals("api/projects/{$task->project->slug}/tasks/{$task->slug}", $task->path());
	}

	
	/** @test */
	
	public function it_can_be_completed()
	{
		$task = factory('App\Task')->create();

		$this->assertFalse($task->completed);

		$task->complete();

		$this->assertTrue($task->fresh()->completed);
	}

	
	/** @test */
	
	public function it_can_be_marked_as_incomplete()
	{
		$task = factory('App\Task')->create(['completed' => true]);

		$this->assertTrue($task->completed);

		$task->incomplete();

		$this->assertFalse($task->fresh()->completed);
	}
}
