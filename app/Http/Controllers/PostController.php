<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Post;
use App\Category;

class PostController extends Controller
{
    public function list()
    {
    	// $posts = Post::with(['user','category'])->get();
    	$posts = Category::with('posts')->get();
    	
    	return $posts;
    }
}
