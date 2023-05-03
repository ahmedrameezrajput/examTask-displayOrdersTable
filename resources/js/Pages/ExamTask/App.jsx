import React from "react";
// import OrderList from "./OrderList";

function App() {
    return (
        <div class="flex flex-col justify-center items-center bg-[#E6DDC4] h-screen text-[#181D31] px-48">
            <h1 class="text-center text-5xl font-['Helvetica Neue']">
                <strong>exam task:</strong> fetch records from 'orders' table
                and display it as a table
            </h1>
            <br />
            <br />
            <p class="text-lg">
                <strong>1. </strong>
                <a
                    href="/react"
                    class="hover:underline hover:underline-offset-4"
                >
                    react order list
                </a>{" "}
                <br />
                <strong>2. </strong>
                <a
                    href="/blade"
                    class="hover:underline hover:underline-offset-4"
                >
                    blade order list
                </a>
            </p>
            {/* <div class="py-16">
                <OrderList />
            </div> */}
        </div>
    );
}

export default App;
