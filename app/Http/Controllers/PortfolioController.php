<?php

namespace App\Http\Controllers;

use App\Portfolio;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{

    public function __construct()
    {

    }

    public function getAll()
    {
        return Portfolio::all();
    }
}
