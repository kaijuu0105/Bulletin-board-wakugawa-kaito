<?php

namespace App\Models\Categories;

use Illuminate\Database\Eloquent\Model;
use App\Models\Categories\PostSubCategory;

class PostMainCategory extends Model
{
    protected $fillable = [
        'main_category'
    ];

    public function subCategories(){
        return $this->hasMany('App\Models\Categories\PostSubCategory');// リレーションの定義
    }

}