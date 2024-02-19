<?php

namespace App\Http\Controllers\Admin\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Categories\PostMainCategory;


class PostMainCategoriesController extends Controller
{
     
     public function categories()
     {
          $mainCategories = PostMainCategory::with('subCategories')->get();
          dd($mainCategories);
          return Inertia::render('Posts/MainCategories',['mainCategories' => $mainCategories]);
     }

     // カテゴリーの追加
     public function mainCategoryCreate(Request $request){
          // dd($request);
          PostMainCategory::create(['main_category' => $request->mainCategory]);
          return redirect()->route('categories');
     }



}
