<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\HasSlug;
use App\RecordsActivity;

class Task extends Model
{
	use HasSlug, RecordsActivity;

	protected $guarded = [];

	protected $casts = [
		'completed' => 'boolean'
	];

	protected static $recordableEvents = ['created', 'deleted'];
	
	public function setSlugFromField() {
		return 'title';
	}

	public function getRouteKeyName()
	{
		return 'slug';
	}

	public function complete()
	{
		$this->update(['completed' => true]);

		$this->recordActivity('completed_task');
	}

	public function incomplete()
	{
		$this->update(['completed' => false]);

		$this->recordActivity('incompleted_task');
	}

	public function project()
	{
		return $this->belongsTo(Project::class);
	}

	public function path()
	{
		return "api/projects/{$this->project->slug}/tasks/{$this->slug}";
	}
}
