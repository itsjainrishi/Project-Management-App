<?php

use Faker\Generator as Faker;

$factory->define(App\Task::class, function (Faker $faker) {
	return [
		'title' => $faker->sentence,
		'body' => $faker->paragraph,
		'project_id' => factory(\App\Project::class),
		'completed' => false
	];
});
