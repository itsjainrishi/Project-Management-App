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

	/** @test */

	// public function a_guest_can_register()
	// {
	// 	$this->assertInstanceOf(Collection::class, $this->owner->projects);
	// }

	public function testUserCanAccessApi()
	{
        Passport::actingAs(
            factory(\App\User::class)->create()
        );

        $response = $this->get('/api/user');
        $response->assertStatus(200);
	}
}
