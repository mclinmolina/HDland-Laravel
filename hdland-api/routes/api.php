<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\ProjectsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Public Login route
Route::post('/login', [AuthController::class, 'login']);
Route::get('/services', [ServicesController::class, 'index']);
Route::get('/projects', [ProjectsController::class, 'index']);

// Protected Routes (Require Token)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    
    Route::post('services', [ServicesController::class, 'store']);
    Route::delete('services/{service}', [ServicesController::class, 'destroy']);

    Route::post('projects', [ProjectsController::class, 'store']);
    // We will add Service and Project CRUD routes here in the next step
});
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
