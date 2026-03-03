<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\ProjectsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

//Public Login route
Route::post('/login', [AuthController::class, 'login']);
Route::get('/services', [ServicesController::class, 'index']);
Route::get('/projects', [ProjectsController::class, 'index']);

// Protected Routes (Require Token)
Route::middleware('auth:sanctum')->group(function () {
    
    Route::post('services', [ServicesController::class, 'store']);
    Route::delete('services/{service}', [ServicesController::class, 'destroy']);

    Route::post('projects', [ProjectsController::class, 'store']);

    // Return the authenticated user info
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Handle logout
    Route::post('/logout', function (Request $request) {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->noContent();
    });
});
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
