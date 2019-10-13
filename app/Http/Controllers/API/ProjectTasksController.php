<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use \Illuminate\Validation\ValidationException;
use Illuminate\Validation\Rule;
use App\Project;
use App\Task;

class ProjectTasksController extends Controller
{
	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request, Project $project)
	{
		$this->authorize('update', $project);
		$request->projectID = $project->id;
		$validator = Validator::make($request->all(), [
			'title' => [
				'required',
				Rule::unique('tasks')->where(function ($query) use ($request) {
					return $query
						->whereProjectId($request->projectID)
						->whereTitle($request->title);
					}),
			],
			'body' => 'required',
		]);

		if($validator->fails()){
			throw new ValidationException($validator);
		}

		$project->addTask($request->all());
		$project = $project->load('tasks');

		if (request()->wantsJson()) {
			return response()->json($project->toArray(), 201);
		}
	}
	
	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Project $project, Task $task)
	{
		$this->authorize('update', $project);

		$request->TaskID = $task->id;
		$request->ProjectID = $project->id;
		
		$validator = Validator::make($request->all(), [
			'title' => [
				'sometimes',
				'required',
				Rule::unique('tasks')->where(function ($query) use ($request) {
					return $query
						->whereTitle($request->title)
						->whereProjectId($request->ProjectID)
						->whereNotIn('id', [$request->TaskID]);
					}),
			],
			'body' => 'sometimes|required',
		]);

		if($validator->fails()){
			throw new ValidationException($validator);
		}

		$task->update([
			'title' => $request->title,
			'body' => $request->body,
		]);

		request('completed') ? $task->complete() : $task->incomplete();

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
	public function destroy(Project $project, Task $task)
	{
		$this->authorize('manage', $project);

		$task->delete();

		$project = $project->load('tasks');

		return $project;
	}
}
