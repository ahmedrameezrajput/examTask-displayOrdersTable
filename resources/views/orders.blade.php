<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @vite('resources/css/app.css')
</head>

<body>
    <!-- <table>
        <thead>
            <tr>
                <th>Order Date</th>
                <th>Ordered By</th>
                <th>Total Amount</th>
                <th>Order Status</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($orders as $order)
            <tr>
                <td>{{ $order->order_date }}</td>
                <td>{{ $order->ordered_by }}</td>
                <td>{{ $order->total_amount }}</td>
                <td>{{ $order->order_status }}</td>
            </tr>
            @endforeach
        </tbody>
    </table> -->

    <div class="px-20 py-32 bg-[#E6DDC4] h-screen">
        <!-- <div>
            <h1>Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Order Date</th>
                        <th>Ordered By</th>
                        <th>Total Amount</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                    <tr key={order.id}>
                        <td>{order.order_date}</td>
                        <td>{order.ordered_by}</td>
                        <td>{order.total_amount}</td>
                        <td>{order.order_status}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div> -->

        <div class="flex justify-center items-center">
            <a href="/">
                <button class="bg-[#181D31] text-[#E6DDC4] px-8 py-2 hover:bg-[#678983] hover:text-[#181D31]">
                    home
                </button>
            </a>
        </div>

        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full text-center text-sm font-light font-mono">
                            <thead class="border-b font-semibold border-[#678983]">
                                <tr>
                                    <th scope="col" class="px-6 py-2">
                                        Order Date
                                    </th>
                                    <th scope="col" class="px-6 py-2">
                                        Ordered By
                                    </th>
                                    <th scope="col" class="px-6 py-2">
                                        Total Amount
                                    </th>
                                    <th scope="col" class="px-6 py-2">
                                        Order Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($orders as $order)
                                <tr key={order.id} class="border-b border-[#678983]">
                                    <td class="whitespace-nowrap px-6 py-2">{{ $order->order_date }}</td>
                                    <td class="whitespace-nowrap px-6 py-2">{{ $order->ordered_by }}</td>
                                    <td class="whitespace-nowrap px-6 py-2">$ {{ $order->total_amount }}</td>
                                    <td class="whitespace-nowrap px-6 py-2">{{ $order->order_status }}</td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>