<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Models\Order;


class OrderController extends Controller
{
    public function react()
    {
        $orders = Order::select('order_date', 'total_amount', 'ordered_by', 'order_status')->get();

        return response()->json($orders);
    }

    public function blade()
    {
        $orders = Order::select('order_date', 'total_amount', 'ordered_by', 'order_status')->get();

        return view('orders', ['orders' => $orders]);
    }
}