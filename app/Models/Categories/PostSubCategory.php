<?php

namespace App\Models\Categories;

use Illuminate\Database\Eloquent\Model;
use App\Models\Categories\PostMainCategory;
use App\Models\Posts\Post;

class PostSubCategory extends Model
{
    const UPDATED_AT = null;
    const CREATED_AT = null;
    protected $fillable = [
        'post_main_category_id',
        'sub_category',
    ];
    public function mainCategory(){
        return $this->belongsTo('App\Models\Categories\PostMainCaregory');// リレーションの定義
    }

    public function posts(){
        return $this->hasMany('App\Models\Posts\Post');// リレーションの定義
    }
}