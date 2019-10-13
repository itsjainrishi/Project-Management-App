<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		// $faker = Faker\Factory::create();

		// for($i=0; $i<=50; $i++) {
		// 	$user = factory('App\User')->create();
		// 	for($j=0; $j<=10; $j++) {
		// 		$project = $user->projects()->create(factory('App\Project')->raw());
				
		// 		for($k=0; $k<=5; $k++) {
		// 			$tasks = $project->tasks()->create(factory('App\Task')->raw());
		// 		}

		// 	}
		// }

		factory(App\User::class, 10)->create()->each(function ($user) {
			$projects = factory(App\Project::class, 5)->make();
			$user->projects()->saveMany($projects);
			foreach ($projects as $project) {
				$tasks = factory(App\Task::class, 5)->make();
				$project->tasks()->saveMany($tasks);
			}
		});
	}
}
