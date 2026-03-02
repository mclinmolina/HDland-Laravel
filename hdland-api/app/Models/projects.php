<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class projects extends Model
{
    protected $fillable = ['name', 'image', 'location'];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute() {
        return $this->survey_image ? url(Storage::url($this->survey_image)) : null;
    }
}
