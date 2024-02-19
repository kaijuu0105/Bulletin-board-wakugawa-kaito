<?php

namespace App\Http\Controllers\Admin\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Categories\PostSubCategory;

class PostSubCategoriesController extends Controller
{
    // サブカテゴリーの追加
    public function subCategoryCreate(Request $request){
        PostSubCategory::create([
            'post_main_category_id' => $request->mainCategoryId,
            'sub_category' => $request->subCategory
        ]);
        return redirect()->route('categories');
   }
}
