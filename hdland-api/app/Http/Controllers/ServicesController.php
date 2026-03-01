<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ServicesController extends Controller
{
    // Public: List all services
    public function index() {
        return response()->json(Services::all());
    }

    // Protected: Store a new service
    public function store(Request $request) {
        $validated = $request->validate([
            'type' => 'required|string',
            'name' => 'nullable|string',
            'survey_name' => 'nullable|string',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('services', 'public');
            $validated['survey_image'] = $path;
        }

        // Generate Slug automatically if not provided
        $title = $validated['name'] ?? $validated['survey_name'];
        $validated['slug'] = Str::slug($title) . '-' . rand(1000, 9999);

        $service = Services::create($validated);
        return response()->json($service, 201);
    }

    // Protected: Delete a service
    public function destroy(Services $service) {
        if ($service->survey_image) {
            Storage::disk('public')->delete($service->survey_image);
        }
        $service->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
