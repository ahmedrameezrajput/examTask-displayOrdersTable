<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;


class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::select('order_date', 'total_amount', 'ordered_by', 'order_status')->get();

        return response()->json($orders);
    }
}
