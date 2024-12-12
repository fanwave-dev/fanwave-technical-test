<?php

use App\Http\Controllers\Api\WelcomeController;
use Illuminate\Support\Facades\Route;

Route::get('welcome', [WelcomeController::class, 'index'])->name('welcome');
