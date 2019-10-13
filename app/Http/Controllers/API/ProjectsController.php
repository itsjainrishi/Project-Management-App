<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use App\Project;
use \Illuminate\Validation\ValidationException;

class ProjectsController extends BaseAPIController
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		return $this->me()->accessibleProjects();
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$validator = Validator::make($request->all(), [
			'title' => [
				'required',
				Rule::unique('projects')->where(function ($query) use ($request) {
					return $query
						->whereTitle($request->title)
						->whereOwnerId($this->me()->id);
					}),
			],
			'description' => 'required',
		]);

		if($validator->fails()){
			throw new ValidationException($validator);
		}
		
		$project = $this->me()->projects()->create($request->except('tasks'));

		if ($tasks = request('tasks')) {
			$project->addTasks($tasks);
		}

		if (request()->wantsJson()) {
			return response()->json($project->toArray(), 201);
		}

		return redirect($project->path());
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show(Project $project)
	{
		$this->authorize('update', $project);

		$project = $project->load(['activity.user', 'activity.subject']);
		$project = $project->load('tasks');
		$project = $project->load('members');

		if (request()->wantsJson()) {
			return response()->json($project->toArray(), 201);
		}
		// return $this->me()->projects()->with('tasks')->where('slug', '=', $id)->first();
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Project $project)
	{
		$this->authorize('update', $project);
		$request->id = $project->id;
		$request->ownerID = $project->owner_id;

		$validator = Validator::make($request->all(), [
			'title' => [
				'sometimes',
				'required',
				Rule::unique('projects')->where(function ($query) use ($request) {
					return $query
						->whereTitle($request->title)
						->whereOwnerId($request->ownerID)
						->whereNotIn('id', [$request->id]);
					}),
			],
			'description' => 'sometimes|required',
		]);

		if($validator->fails()){
			throw new ValidationException($validator);
		}

		$project->update($request->all());
		
		$project = $project->load(['activity.user', 'activity.subject']);
		$project = $project->load('tasks');
		$project = $project->load('members');

		if (request()->wantsJson()) {
			return response()->json($project->toArray(), 201);
		}
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Project $project)
	{
		$this->authorize('manage', $project);

		$project->delete();
		
		return 'hie';
	}

	protected function validateRequest()
	{
		return request()->validate([
			'title' => 'sometimes|required',
			'description' => 'sometimes|required',
			'notes' => 'nullable'
		]);
	}
}