<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class WelcomeController extends Controller
{
    function index(){
        return ['message' => 'Welcome'];
    }
}
