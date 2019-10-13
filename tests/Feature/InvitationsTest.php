<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Passport\Passport;
use App\User;
use App\Project;

class InvitationsTest extends TestCase
{
	use RefreshDatabase, WithFaker;


	/** @test */
	
	public function non_owners_may_not_invite_users()
	{
		$project = factory('App\Project')->create();
		$user = factory('App\User')->create();

		$assertInvitationForbidden = function () use ($user, $project) {
			Passport::actingAs($user);
			$this->post($project->path() . '/invitations')->assertStatus(403);
		};

		$assertInvitationForbidden();

		$project->invite($user);

		$assertInvitationForbidden();
	}


	/** @test */

	public function a_project_owner_can_invite_a_user()
	{
		$project = factory('App\Project')->create([
			'owner_id' => factory('App\User')
		]);

		$userToInvite = factory('App\User')->create();

		Passport::actingAs($project->owner);
		$this->postJson($project->path() . '/invitations', [
				'email' => $userToInvite->email
			])
			->assertStatus(201);

		$this->assertTrue($project->members->contains($userToInvite));
	}


	/** @test */

	public function the_email_address_must_be_associated_with_a_valid_birdboard_account()
	{
		$project = factory('App\Project')->create([
			'owner_id' => factory('App\User')
		]);

		Passport::actingAs($project->owner);
		$this->post($project->path() . '/invitations', [
				'email' => 'notauser@example.com'
			])
			->assertSessionHasErrors([
				'email' => 'The user you are inviting must have a Projectboard account.'
			], null, 'invitations');
	}


	/** @test */

	public function the_email_address_must_not_be_a_member_already()
	{
		$project = factory('App\Project')->create([
			'owner_id' => factory('App\User')
		]);

		$inviteUser = factory('App\User')->create();

		Passport::actingAs($project->owner);
		$this->post($project->path() . '/invitations', [
			'email' => 'notauser@example.com'
		])
		->assertSessionHasErrors([
			'email' => 'The user you are inviting must have a Projectboard account.'
		], null, 'invitations');


		$project->invite($inviteUser);

		$this->post($project->path() . '/invitations', [
			'email' => $inviteUser->email,
		])
		->assertSessionHasErrors([
			'email' => 'The user is already a member of the project.'
		], null, 'default');
	}


	/** @test */

	public function invited_users_may_update_project_details()
	{
		$project = factory('App\Project')->create([
			'owner_id' => factory('App\User')
		]);

		$project->invite($newUser = factory('App\User')->create());

		Passport::actingAs($newUser);
		$this->post(action('API\ProjectTasksController@store', $project), $task = [
			'title' => 'Foo title', 
			'body' => 'Foo body'
		])->assertStatus(200);

		$this->assertDatabaseHas('tasks', $task);
	}
}

