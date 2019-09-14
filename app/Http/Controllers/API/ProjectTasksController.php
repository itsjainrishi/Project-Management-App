<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\Project;
use App\Task;

class ProjectTasksController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		//
	}

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
			return response()->json(['error'=>$validator->errors()], 422);
		}

		$project->addTask($request->all());

		if (request()->wantsJson()) {
			return response()->json($project->toArray(), 201);
		}
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id)
	{
		//
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
			return response()->json(['error'=>$validator->errors()], 422);
		}

		$task->update($request->all());

		if (request()->wantsJson()) {
			return response()->json($project->toArray(), 201);
		}

		return $task;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		//
	}
}
