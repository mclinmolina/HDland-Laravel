<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
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
}
