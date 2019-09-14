<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Passport\Passport;
use App\User;
use App\Project;

class ManageProjectsTest extends TestCase
{
	use RefreshDatabase, WithFaker;

	protected $owner;

	protected function setUp(): void
	{
		parent::setUp();
		$this->owner = factory('App\User')->create();
	}


	/** @test */

	public function a_guest_can_not_manage_projects()
	{
		$project = factory('App\Project')->create();

		$this->get('api/projects')->assertRedirect('login');
		$this->get('api/projects/create')->assertRedirect('login');
		$this->get($project->path().'/edit')->assertRedirect('login');
		$this->get($project->path())->assertRedirect('login');
		$this->post('api/projects', $project->toArray())->assertRedirect('login');
	}


	/** @test */

	public function a_user_can_create_a_project()
	{
		Passport::actingAs($this->owner);

		$attributes = [
			'title' => $this->faker->sentence,
			'description' => $this->faker->paragraph,
		];

		// $response = $this->post('api/projects', $attributes);
		$this->postJson('api/projects', $attributes)->assertStatus(201);
		$this->assertDatabaseHas('projects', $attributes);
	}


	/** @test */
	public function tasks_can_be_included_as_part_a_new_project_creation()
	{
		$this->withoutExceptionHandling();
		Passport::actingAs($this->owner);

		$attributes = [
			'title' => 'What',
			'description' => 'Changed',
			'notes' => 'Changed',
		];

		$attributes['tasks'] = [
			[
				'title' => 'Task 1T',
				'body' => 'Task 1D'
			],
			[
				'title' => 'Task 2T',
				'body' => 'Task 2D'
			],
		];

		$this->post('api/projects', $attributes);

		$this->assertCount(2, Project::first()->tasks);
	}


	/** @test */

	public function a_user_can_view_a_single_project_with_tasks_in_it()
	{
		$project = $this->owner->projects()->create(factory('App\Project')->raw());

		$task = $project->addTask([
					'title' => $this->faker->sentence,
					'body' => $this->faker->paragraph,
				]);

		Passport::actingAs($this->owner);

		$this->get('api/projects/'.$project->slug)->assertSee($task->title);
	}


	/** @test */
	
	public function an_authenticated_user_can_not_view_project_of_others()
	{
		Passport::actingAs($this->owner);
		$project = factory('App\Project')->create();

		$this->get($project->path())->assertStatus(403);
	}


	/** @test */
	
	public function a_user_can_update_a_project()
	{
		$project = $this->owner->projects()->create(factory('App\Project')->raw([
			'title' => 'Something',
			'description' => 'Something',
			'notes' => 'Something',
		]));

		$attributes = [
			'title' => 'Changed',
			'description' => 'Changed',
			'notes' => 'Changed',
		];

		Passport::actingAs($this->owner);
		$this->putJson($project->path(), $attributes)->assertStatus(200)->assertJson($attributes);
	}


	/** @test */
	
	public function an_authenticated_user_can_not_update_project_of_others()
	{
		Passport::actingAs($this->owner);
		$project = factory('App\Project')->create();

		$attributes = [
			'title' => 'Changed',
			'description' => 'Changed',
			'notes' => 'Changed',
		];

		$this->putJson($project->path(), $attributes)->assertStatus(403);
	}


	/** @test */
	
	public function a_user_can_delete_a_project()
	{
		$project = $this->owner->projects()->create(factory('App\Project')->raw([
			'title' => 'Something',
			'description' => 'Something',
			'notes' => 'Something',
		]));

		Passport::actingAs($this->owner);
		$this->deleteJson($project->path());
		$this->assertSoftDeleted('projects', $project->toArray());
	}


	/** @test */
	
	public function a_user_can_not_delete_a_project_of_others()
	{
		Passport::actingAs($this->owner);
		$project = factory('App\Project')->create();

		$this->delete($project->path())->assertStatus(403);
	}


	/** @test */

	public function a_project_must_have_name_and_description()
	{
		$attributes = factory('App\Project')->raw([
			'title' => '',
			'description' => '',
		]);

		Passport::actingAs($this->owner);
		$this->postJson('api/projects', $attributes)->assertStatus(401)->assertSee('The title field is required')->assertSee('The description field is required');
	}
}
