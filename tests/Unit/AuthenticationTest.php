<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;
use Laravel\Passport\Passport;

class AuthenticationTest extends TestCase
{
	use RefreshDatabase, WithFaker;

	public function testUserCanAccessApi()
	{
		Passport::actingAs(
			factory(\App\User::class)->create()
		);

		$response = $this->get('/api/user');
		$response->assertStatus(200);
	}
}
