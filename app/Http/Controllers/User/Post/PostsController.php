<?php

namespace App\Http\Controllers\User\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Categories\PostSubCategory;
use App\Models\Posts\Post;

class PostsController extends Controller
{

    public function postCreate() {
        $subCategories = PostSubCategory::get();
        return Inertia::render('Posts/PostCreate',['subCategories' => $subCategories]);
    }

    public function postInput(Request $request)
    {
        $userId = Auth::id();
        // dd($request);
        Post::create([
        'user_id' => $userId,
        'post_sub_category_id' => $request->subCategoryId,
        'title' => $request->title,
        'post' => $request->post
        ]);
        return redirect('top');
    }

    // public function postUpdate()
    // {
    //     return view('posts.postUpdate');
    // }

    // public function logout(){
    //     Auth::logout();
    //     return redirect('/login');
    // }
}
