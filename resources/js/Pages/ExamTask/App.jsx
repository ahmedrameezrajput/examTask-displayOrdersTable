import React from "react";
// import OrderList from "./OrderList";

function App() {
    return (
        <div class="flex flex-col justify-center items-center bg-[#E6DDC4] h-screen text-[#181D31]">
            <h1 class="text-5xl font-['Helvetica Neue']">
                hello and please work...
            </h1>
            <br />
            <br />
            <p class="text-lg">
                1.{" "}
                <a
                    href="/react"
                    class="hover:underline hover:underline-offset-4"
                >
                    react order list
                </a> <br />
                2.{" "}
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
