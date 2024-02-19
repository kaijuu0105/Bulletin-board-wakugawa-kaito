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

class PostsController extends Controller
{

    public function postCreate() {
        return Inertia::render('Posts/PostCreate');
    }

    // サンプル
    public function show()
    {
        return view('posts.top');
    }

    // public function postCreate()
    // {
    //     return view('posts.postCreate');
    // }

    public function postUpdate()
    {
        return view('posts.postUpdate');
    }

    public function logout(){
        Auth::logout();
        return redirect('/login');
    }
}
