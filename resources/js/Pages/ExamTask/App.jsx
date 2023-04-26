import React from "react";
import OrderList from "./OrderList";

function App() {
    return (
        <div class="flex flex-col justify-center items-center bg-[#E6DDC4] h-screen text-[#181D31]">
            <h1 class="text-5xl font-['Helvetica Neue']">
                hello and please work...
            </h1>
            <div class="py-16">
                <OrderList />
            </div>
        </div>
    );
}

export default App;
