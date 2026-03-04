<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Projects;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectsController extends Controller
{
    public function index() {
        $projects = Projects::all()->map(function ($project) {
            $project->image = $project->image ? asset('storage/' . $project->image) : null;
            return $project;
        });
        return response()->json($projects);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        $path = $request->file('image')->store('projects', 'public');
        $validated['image'] = $path;

        $project = Projects::create($validated);
        return response()->json($project, 201);
    }

    public function delete(Projects $project) {
        Storage::disk('public')->delete($project->image);
        $project->delete();
        return response()->json(null, 204);
    }
}
