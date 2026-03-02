<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
class services extends Model
{
    protected $fillable = [
        'type',
        'name',
        'survey_name',
        'survey_image',
        'description',
        'slug'
    ];

    public static function boot() {
        parent::boot();
        static::creating(function ($service) {
            $service->slug = $service->slug ?? Str::slug($service->name ?? $service->survey_name);
        });
    }

    protected $appends = ['image_url'];

    public function getImageUrlAttribute() {
        return $this->survey_image ? url(Storage::url($this->survey_image)) : null;
    }
}
