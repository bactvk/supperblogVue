<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
    public function add(Request $request)
    {
    	$this->validate($request,[
    		'cat_name' => 'required|unique:categories,cat_name'
    	]);

    	$category = new Category();
    	$category->cat_name = $request->cat_name;
    	$category->save();
    	return ['message' => 'ok'];
    }

    public function list()
    {
        $categories = Category::all();

        return response()->json([
            'categories' => $categories
        ],200);
    }
}
