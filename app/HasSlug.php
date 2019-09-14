<?php

namespace App;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

trait HasSlug
{
	protected $generateSlugFrom;

	abstract public function setSlugFromField(): string;

	public static function boot()
	{
		parent::boot();
		static::creating(function ($model) {
			$model->generateSlugOnCreate();
		});
	}

	protected function generateSlugOnCreate() {
		$this->generateSlugFrom = $this->setSlugFromField();
		$this->addSlug();
	}

	protected function addSlug() {
		$slug = $this->makeSlugUnique();

		$this->slug = $slug;
	}

	protected function makeSlugUnique() {
		$field = ($this->generateSlugFrom);
		$slug = Str::slug($this->$field. '-' .Str::random(5));

		$i = 1;
		while ($this->otherRecordExistsWithSlug($slug) || $slug === '') {
			$slug = $slug. '-' .$i++;
		}
		
		return $slug;
	}

	protected function otherRecordExistsWithSlug(string $slug): bool
	{
		$key = $this->getKey();
		if ($this->incrementing) {
			$key = $key ?? '0';
		}
		$query = static::where('slug', $slug)->where($this->getKeyName(), '!=', $key)->withoutGlobalScopes();
		
		if ($this->usesSoftDeletes()) {
			$query->withTrashed();
		}
		return $query->exists();
	}

	protected function usesSoftDeletes()
	{
		if (in_array('Illuminate\Database\Eloquent\SoftDeletes', class_uses($this))) {
			return true;
		}
		return false;
	}
}