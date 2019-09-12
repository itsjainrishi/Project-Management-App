<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserAuthTest extends TestCase
{
	use RefreshDatabase;

	/** @test */

	public function guest_can_not_logout()
	{
		$this->post('/logout')->assertRedirect('/login');
	}
}
