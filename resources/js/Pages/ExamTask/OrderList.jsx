import React, { useState, useEffect } from "react";

function OrderList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("/orders")
            .then((response) => response.json())
            .then((data) => setOrders(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            {/* <div>
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
            </div> */}

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
                                    {orders.map((order) => (
                                        <tr
                                            key={order.id}
                                            class="border-b border-[#678983]"
                                        >
                                            <td class="whitespace-nowrap px-6 py-2">
                                                {order.order_date}
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-2">
                                                {order.ordered_by}
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-2">
                                               $ {order.total_amount}
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-2">
                                                {order.order_status}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderList;
