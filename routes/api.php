<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Auth::routes(['verify' => true])->namespace('API');

Route::group(['namespace' => 'API'], function () {

	Route::post('/register', 'Auth\RegisterController@register');
	Route::post('/login', 'Auth\LoginController@login');
	Route::get('/password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('apipassword.request');
	Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('apipassword.email');
	Route::post('/password/reset', 'Auth\ResetPasswordController@reset')->name('apipassword.update');
	Route::get('/password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('apipassword.reset');	
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
	return $request->user();
});

Route::group(['middleware' => ['auth:api'], 'namespace' => 'API'], function () {
	Route::post('/logout', 'Auth\LoginController@logout');
	Route::get('email/verify', 'Auth\VerificationController@show')->name('apiverification.notice');
	Route::get('email/verify/{id}', 'Auth\VerificationController@verify')->name('apiverification.verify');
	Route::get('email/resend', 'Auth\VerificationController@resend')->name('apiverification.resend');
	Route::resource('projects', 'ProjectsController');
	Route::post('/projects/{project}/tasks', 'ProjectTasksController@store');
	Route::put('/projects/{project}/tasks/{task}', 'ProjectTasksController@update');
});