<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
    public function add(Request $request)
    {
    	$category = new Category();
    	$category->cat_name = $request->cat_name;
    	$category->save();
    	return ['message' => 'ok'];
    }
}
