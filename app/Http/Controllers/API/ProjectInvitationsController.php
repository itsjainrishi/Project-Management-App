<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\ProjectInvitationRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use App\Project;
use App\User;

class ProjectInvitationsController extends Controller
{
	/**
	 * Invite a new user to the project.
	 *
	 * @param  Project                  $project
	 * @param  ProjectInvitationRequest $request
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function store(Project $project, ProjectInvitationRequest $request)
	{
		$user = User::whereEmail(request('email'))->first();

		foreach($project->members as $member) {
			if($member->id === $user->id) {
				$validator = Validator::make([], []); // Empty data and rules fields
				$validator->errors()->add('email', 'The user is already a member of the project.');
				throw new ValidationException($validator);
			}
		}

		$project->invite($user);

		$project = $project->load(['activity.user', 'activity.subject']);
		$project = $project->load('tasks');
		$project = $project->load('members');

		if (request()->wantsJson()) {
			return response()->json($project->toArray(), 201);
		}
	}
}
