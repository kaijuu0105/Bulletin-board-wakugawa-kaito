<?php

use App\Http\Controllers\ProfileController;
// use App\Http\Controllers\Admin\Post\PostsController;
use App\Http\Controllers\Admin\Post\PostMainCategoriesController;
use App\Http\Controllers\Admin\Post\PostSubCategoriesController;
use App\Http\Controllers\User\Post\PostsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/top', function () {
    return Inertia::render('Index');
})->middleware(['auth', 'verified'])->name('top');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::namespace('Admin')->group(function(){
        Route::namespace('Post')->group(function(){
            Route::get('/categories', [PostMainCategoriesController::class, 'categories'])->name('categories');
            Route::post('/categories/create/main_category', [PostMainCategoriesController::class, 'mainCategoryCreate'])->name('main.category.create');
            Route::post('/categories/create/sub_category', [PostSubCategoriesController::class, 'subCategoryCreate'])->name('sub.category.create');
        });
    });

    Route::namespace('User')->group(function(){
        Route::namespace('Post')->group(function(){
            //Route::get('/', [Controller::class, ''])->name('');
            Route::get('/post/create', [PostsController::class, 'postCreate'])->name('post.create');
            
            
        });
    });

});

require __DIR__.'/auth.php';
