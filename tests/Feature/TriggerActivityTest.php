<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Passport\Passport;
use App\Task;
use App\Project;
use App\User;

class TriggerActivityTest extends TestCase
{
	use RefreshDatabase;


	/** @test */
	
	public function creating_a_project()
	{
		$project = factory('App\Project')->create([
			'owner_id' => factory('App\User')
		]);
		
		$this->assertCount(1, $project->activity);

		tap($project->activity->last(), function ($activity) {
			$this->assertEquals('created_project', $activity->description);

			$this->assertNull($activity->changes);
		});
	}


	/** @test */
	
	public function updating_a_project()
	{
		$project = factory('App\Project')->create([
			'owner_id' => factory('App\User')
		]);
		$originalTitle = $project->title;

		$project->update(['title' => 'Changed']);

		$this->assertCount(2, $project->activity);

		tap($project->activity->last(), function ($activity) use ($originalTitle) {
			$this->assertEquals('updated_project', $activity->description);

			$expected = [
				'before' => ['title' => $originalTitle],
				'after' => ['title' => 'Changed']
			];

			$this->assertEquals($expected, $activity->changes);
		});
	}


	/** @test */
	
	public function creating_a_new_task()
	{
		$project = factory('App\Project')->create([
			'owner_id' => factory('App\User')
		]);

		$project->addTask([
			'title' => 'Some task',
			'body' => 'Some body'
		]);

		$this->assertCount(2, $project->activity);

		tap($project->activity->last(), function ($activity) {
			$this->assertEquals('created_task', $activity->description);
			$this->assertInstanceOf(Task::class, $activity->subject);
			$this->assertEquals('Some task', $activity->subject->title);
		});
	}


	/** @test */
	
	public function completing_a_task()
	{
		$project = factory('App\Project')->create([
			'owner_id' => factory('App\User')
		]);

		factory('App\Task')->create([
			'project_id' => $project
		]);

		$project->tasks[0]->complete();

		$this->assertCount(3, $project->activity);

		tap($project->activity->last(), function ($activity) {
			$this->assertEquals('completed_task', $activity->description);
			$this->assertInstanceOf(Task::class, $activity->subject);
		});
	}


	/** @test */
	
	public function incompleting_a_task()
	{

		$project = factory('App\Project')->create([
			'owner_id' => factory('App\User')
		]);

		factory('App\Task')->create([
			'project_id' => $project
		]);

		$project->tasks[0]->complete();

		$this->assertCount(3, $project->activity);
		$project->tasks[0]->incomplete();
		
		$project->refresh();

		$this->assertCount(4, $project->activity);

		$this->assertEquals('incompleted_task', $project->activity->last()->description);
	}


	/** @test */
	
	public function deleting_a_task()
	{
		$project = factory('App\Project')->create([
			'owner_id' => factory('App\User')
		]);

		factory('App\Task')->create([
			'project_id' => $project
		]);

		$project->tasks[0]->delete();

		$this->assertCount(3, $project->activity);
	}
}
