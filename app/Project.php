<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\HasSlug;
use App\RecordsActivity;

class Project extends Model
{
	use SoftDeletes, HasSlug, RecordsActivity;

	protected $guarded = [];

	public function setSlugFromField() {
		return 'title';
	}

	public function getRouteKeyName()
	{
		return 'slug';
	}

	public function owner()
	{
		return $this->belongsTo(User::class);
	}

	public function tasks()
	{
		return $this->hasMany(Task::class);
	}

	public function addTask($task)
	{
		return $this->tasks()->create($task);
	}

	public function addTasks($tasks)
	{
		return $this->tasks()->createMany($tasks);
	}

	public function invite(User $user)
	{
		$this->members()->attach($user);
	}

	public function members()
	{
		return $this->belongsToMany(User::class, 'project_members');
	}

	public function path()
	{
		return "api/projects/{$this->slug}";
	}
}
