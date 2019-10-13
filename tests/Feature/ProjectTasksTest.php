<?php

namespace Tests\Feature;

use App\Project;
use App\User;
use App\Task;
use Laravel\Passport\Passport;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProjectTasksTest extends TestCase
{
	use RefreshDatabase, WithFaker;

	protected $owner;
	protected $project;

	protected function setUp(): void
	{
		parent::setUp();
		$this->owner = factory('App\User')->create();
		$this->project = $this->owner->projects()->create(factory('App\Project')->raw());
	}


	/** @test */

	public function a_project_can_have_tasks()
	{
		$this->withoutExceptionHandling();
		Passport::actingAs($this->owner);
		$attributes =  [
			'title' => 'Test title',
			'body' => 'Test task'
		];
		$this->post($this->project->path() . '/tasks', $attributes);

		$this->getJson($this->project->path())->assertSee($attributes['title']);
	}


	/** @test */

	public function guest_can_not_add_task_to_project() {

		$this->post($this->project->path() . '/tasks')->assertRedirect('/api/login');
	}


	/** @test */
	
	public function only_the_owner_of_a_project_may_add_tasks()
	{
		Passport::actingAs($this->owner);

		$randomproject = factory('App\Project')->create();

		$attributes = [
			'title' => $this->faker->sentence,
			'body' => $this->faker->paragraph
		];

		$this->post($randomproject->path() .'/tasks', $attributes)->assertStatus(403);

		$this->assertDatabaseMissing('tasks', $attributes);
	}


	// /** @test */

	public function a_task_can_be_updated()
	{
		Passport::actingAs($this->owner);
		
		factory('App\Task')->create([
			'project_id' => $this->project
		]);

		$attributes = [
			'title' => 'changed',
			'body' => 'changed'
		];
		
		$this->put($this->project->tasks[0]->path(), $attributes);

		$this->assertDatabaseHas('tasks', $attributes);
	}

	/** @test */
	
	public function only_the_owner_of_a_project_may_update_tasks()
	{
		Passport::actingAs($this->owner);

		$randomproject = factory('App\Project')->create();

		factory('App\Task')->create([
			'project_id' => $randomproject
		]);

		$attributes = [
			'title' => 'changed',
			'body' => 'changed'
		];

		$this->put($randomproject->tasks[0]->path(), $attributes)->assertStatus(403);

		$this->assertDatabaseMissing('tasks', $attributes);
	}


	/** @test */
	
	public function a_task_can_be_completed()
	{
		Passport::actingAs($this->owner);
		
		factory('App\Task')->create([
			'project_id' => $this->project
		]);

		$attributes = [
			'title' => 'changed title',
			'body' => 'changed body',
			'completed' => true,
		];

		$this->put($this->project->tasks[0]->path(), $attributes);

		$this->assertDatabaseHas('tasks', $attributes);
	}

	
	/** @test */
	
	public function a_task_can_be_marked_as_incomplete()
	{
		$this->withoutExceptionHandling();

		Passport::actingAs($this->owner);
		
		factory('App\Task')->create([
			'project_id' => $this->project
		]);

		$attributes = [
			'title' => 'changed title',
			'body' => 'changed body',
			'completed' => false,
		];

		$this->put($this->project->tasks[0]->path(), $attributes);

		$this->assertDatabaseHas('tasks', $attributes);
	}

	
	/** @test */
	
	public function a_task_requires_a_title_and_a_body()
	{
		$attributes = factory('App\Task')->raw([
			'title' => '',
			'body' => '',
			'project_id' => $this->project,
		]);

		Passport::actingAs($this->owner);
		$this->postJson($this->project->path() . '/tasks', $attributes)->assertStatus(422)->assertSee('The title field is required')->assertSee('The body field is required');
	}
}
