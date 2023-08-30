import { type V2_MetaFunction } from "@remix-run/node";
import NavBar from "./navbar";
import { useNavigate } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "Pricing" }];

export default function Show() {
  let navigate = useNavigate();

  return (
    <main className="absolute inset-0 sm:flex sm:items-center sm:justify-center">
      <div className="absolute top-4 z-10 w-full">
        <NavBar />
      </div>
      <div className="absolute inset-x-16 top-32 sm:top-64 md:inset-x-64">
        <div className="flex flex-auto flex-col">
          <h3 className="text-left text-2xl font-bold sm:text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl">
            <span className="block text-[#1119CB] sm:ml-10 2xl:ml-36">
              PRICING
            </span>
            <div className="text-center">
              <span className="font-semibold text-[#FA4C15] sm:ml-10 2xl:ml-36">
                PROMOTION(AUG - SEP 2023)
              </span>
            </div>
          </h3>
        </div>
        <div className="mb-16 mt-16 flex flex-col justify-center space-x-4 space-y-4 sm:flex-row">
          <div className="ml-4 mt-4 flex basis-1/4 flex-col items-center space-y-4 rounded-lg border-2 border-indigo-800 bg-white p-8 text-center">
            <a className="text-2xl font-bold">1 Class</a>
            <div className="flex flex-row space-x-4">
              <a className="text-xl text-gray-400 line-through sm:text-3xl">
                ￦30,000
              </a>
              <a className="text-xl sm:text-3xl">￦25,000</a>
            </div>
            <a className="text-lg">1 class</a>
            <button
              className="h-12 w-32 rounded-lg border-2 border-blue-600 bg-blue-500 text-white line-through"
              onClick={() => {
                // navigate("/payment?item=one");
              }}
            >
              Purchase
            </button>
          </div>
          <div className="flex basis-1/4 flex-col items-center space-y-4 rounded-lg border-4 border-indigo-700 bg-white p-8 text-center drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]">
            <a className="text-2xl font-bold">Monthly Plan</a>
            <div className="flex flex-row space-x-4">
              <a className="text-xl text-gray-400 line-through sm:text-3xl">
                ￦220,000
              </a>
              <a className="text-xl sm:text-3xl">￦180,000</a>
            </div>
            <a className="text-lg">2 classs / week</a>
            <button
              className="h-12 w-32 rounded-lg border-2 border-blue-600 bg-blue-500 text-white line-through"
              onClick={() => {
                // navigate("/payment?item=month");
              }}
            >
              Purchase
            </button>
          </div>
          <div className="flex basis-1/4 flex-col items-center space-y-4 rounded-lg border-2 border-indigo-800 bg-white p-8 text-center">
            <a className="text-2xl font-bold">Yearly Plan</a>
            <div className="flex flex-row space-x-4">
              <a className="text-xl text-gray-400 line-through sm:text-3xl">
                ￦2,400,000
              </a>
              <a className="text-xl sm:text-3xl">￦2,000,000</a>
            </div>
            <a className="text-lg">2 classs / week</a>
            <div id="payment-widget" />
            <button
              className="h-12 w-32 rounded-lg border-2 border-blue-600 bg-blue-500 text-white line-through"
              onClick={() => {
                // navigate("/payment?item=year");
              }}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
