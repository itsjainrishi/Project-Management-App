<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use App\Project;

class ProjectsController extends BaseAPIController
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		return $this->me()->projects()->paginate();
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
			return response()->json(['error'=>$validator->errors()], 422);
		}
		
		$project = $this->me()->projects()->create($request->except('tasks'));

		if ($tasks = request('tasks')) {
			$project->addTasks($tasks);
		}

		if (request()->wantsJson()) {
			return response()->json($project->toArray(), 201);
		}

		// return redirect($project->path());
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

		return $project->load('tasks');
		// return $this->me()->projects()->with('tasks')->where('slug', '=', $id)->first();
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
			return response()->json(['error'=>$validator->errors()], 422);
		}

		$project->update($request->all());
		
		return $project;
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